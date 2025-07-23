import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Pool, Protocol, PoolFrontmatter, ReportMetadata } from '@/types';
import { FILE_PATHS, SUPPORTED_EXTENSIONS, REGEX_PATTERNS } from './constants';
import { LRUCache, retry, cleanMarkdown, extractKeywords, hashString } from './utils';

// 内存缓存实例
const poolCache = new LRUCache<string, Pool[]>(10);
const protocolCache = new LRUCache<string, Map<string, Protocol>>(5);
const reportCache = new LRUCache<string, any>(50);

/**
 * 文件系统数据加载器
 */
export class DataLoader {
  /**
   * 加载所有收益池数据
   */
  static async loadAllPools(): Promise<Pool[]> {
    const cacheKey = 'all_pools';
    
    // 检查缓存
    const cached = poolCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const pools: Pool[] = [];
      
      // 并行读取 CEX 和 Chain 目录
      const [cexPools, chainPools] = await Promise.all([
        this.loadPoolsFromDirectory(FILE_PATHS.CEX_POOLS),
        this.loadPoolsFromDirectory(FILE_PATHS.CHAIN_POOLS)
      ]);
      
      pools.push(...cexPools, ...chainPools);
      
      // 加载协议信息并合并
      const protocolMap = await this.loadProtocolMap();
      
      const enrichedPools = await Promise.all(
        pools.map(pool => this.enrichPoolWithProtocol(pool, protocolMap))
      );

      // 缓存结果
      poolCache.set(cacheKey, enrichedPools);
      
      return enrichedPools;
    } catch (error) {
      console.error('Failed to load all pools:', error);
      throw new Error('Failed to load pool data');
    }
  }

  /**
   * 从指定目录加载收益池数据
   */
  private static async loadPoolsFromDirectory(dirPath: string): Promise<Pool[]> {
    try {
      const files = await fs.readdir(dirPath);
      const mdFiles = files.filter(file => file.endsWith(SUPPORTED_EXTENSIONS.MARKDOWN));
      
      const pools = await Promise.all(
        mdFiles.map(async (file) => {
          const filePath = path.join(dirPath, file);
          return retry(() => this.parsePoolFile(filePath), 3, 500);
        })
      );

      return pools.filter(Boolean);
    } catch (error) {
      console.warn(`Failed to load pools from directory ${dirPath}:`, error);
      return [];
    }
  }

  /**
   * 解析单个Pool文件 (Markdown frontmatter)
   */
  static async parsePoolFile(filePath: string): Promise<Pool> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const { data: frontmatter } = matter(content);
      
      // 验证必要字段
      if (!frontmatter.Protocol || !frontmatter.Type) {
        throw new Error(`Invalid pool file: ${filePath} - missing required fields`);
      }

      const poolData = frontmatter as PoolFrontmatter;
      const fileName = path.basename(filePath, SUPPORTED_EXTENSIONS.MARKDOWN);
      
      // 解析协议名称（去除双括号）
      const protocolMatch = poolData.Protocol.match(REGEX_PATTERNS.PROTOCOL_NAME);
      const protocolName = protocolMatch ? protocolMatch[1] : poolData.Protocol;

      const pool: Pool = {
        id: fileName,
        slug: fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: fileName,
        description: frontmatter.description || `${protocolName} ${poolData.Type} 收益池`,
        protocol: {
          name: protocolName,
          website: '',
          nickname: protocolName,
          description: ''
        },
        website: frontmatter.website || '',
        type: poolData.Type,
        chain: Array.isArray(poolData.Chain) ? poolData.Chain : [poolData.Chain],
        risk: poolData.Risk,
        token: poolData.Token,
        tokens: frontmatter.tokens ? (Array.isArray(frontmatter.tokens) ? frontmatter.tokens : [frontmatter.tokens]) : [poolData.Token],
        tags: frontmatter.tags ? (Array.isArray(frontmatter.tags) ? frontmatter.tags : [frontmatter.tags]) : [],
        apr: (poolData['APR-Low'] + poolData['APR-High']) / 200, // 计算平均APR并转换为小数
        aprRange: {
          low: poolData['APR-Low'] || 0,
          high: poolData['APR-High'] || 0,
        },
        tvl: frontmatter.tvl || Math.floor(Math.random() * 10000000) + 1000000, // 模拟TVL
        market: Array.isArray(poolData.Market) ? poolData.Market : [poolData.Market],
        underlying: poolData.Underlying,
        danger: poolData.Danger,
        scenarios: poolData.Scenarios,
        reports: await this.checkReports(protocolName),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return pool;
    } catch (error) {
      console.error(`Failed to parse pool file ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * 加载协议映射表
   */
  private static async loadProtocolMap(): Promise<Map<string, Protocol>> {
    const cacheKey = 'protocol_map';
    
    // 检查缓存
    const cached = protocolCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const protocolMap = new Map<string, Protocol>();
      
      // 检查协议目录是否存在
      try {
        await fs.access(FILE_PATHS.PROTOCOL_DIR);
      } catch {
        console.warn('Protocol directory not found, using default protocol info');
        protocolCache.set(cacheKey, protocolMap);
        return protocolMap;
      }

      const files = await fs.readdir(FILE_PATHS.PROTOCOL_DIR);
      const mdFiles = files.filter(file => file.endsWith(SUPPORTED_EXTENSIONS.MARKDOWN));
      
      await Promise.all(
        mdFiles.map(async (file) => {
          try {
            const filePath = path.join(FILE_PATHS.PROTOCOL_DIR, file);
            const content = await fs.readFile(filePath, 'utf-8');
            const { data: frontmatter } = matter(content);
            
            const protocolName = path.basename(file, SUPPORTED_EXTENSIONS.MARKDOWN);
            const protocol: Protocol = {
              name: frontmatter.name || protocolName,
              website: frontmatter.website || '',
              nickname: frontmatter.nickname || protocolName,
              description: frontmatter.description || ''
            };
            
            protocolMap.set(protocolName, protocol);
          } catch (error) {
            console.warn(`Failed to parse protocol file ${file}:`, error);
          }
        })
      );

      // 缓存结果
      protocolCache.set(cacheKey, protocolMap);
      
      return protocolMap;
    } catch (error) {
      console.error('Failed to load protocol map:', error);
      const emptyMap = new Map<string, Protocol>();
      protocolCache.set(cacheKey, emptyMap);
      return emptyMap;
    }
  }

  /**
   * 用协议信息丰富Pool数据
   */
  private static async enrichPoolWithProtocol(
    pool: Pool, 
    protocolMap: Map<string, Protocol>
  ): Promise<Pool> {
    const protocolInfo = protocolMap.get(pool.protocol.name);
    
    if (protocolInfo) {
      pool.protocol = {
        ...pool.protocol,
        ...protocolInfo
      };
    }

    return pool;
  }

  /**
   * 检查报告文件是否存在
   */
  static async checkReports(protocolName: string) {
    const cacheKey = `reports_${protocolName}`;
    
    // 检查缓存
    const cached = reportCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const reports: {
      research?: { exists: boolean; path?: string; url?: string };
      analysis?: { exists: boolean; path?: string; url?: string };
    } = {};
    
    try {
      // 并行检查两种报告
      const [researchExists, analysisExists] = await Promise.all([
        this.fileExists(path.join(FILE_PATHS.RESEARCH_DIR, `${protocolName}${SUPPORTED_EXTENSIONS.MARKDOWN}`)),
        this.fileExists(path.join(FILE_PATHS.RESEARCH_DIR, `${protocolName}${SUPPORTED_EXTENSIONS.HTML}`))
      ]);

      if (researchExists) {
        reports.research = {
          exists: true,
          path: path.join(FILE_PATHS.RESEARCH_DIR, `${protocolName}${SUPPORTED_EXTENSIONS.MARKDOWN}`),
          url: `/reports/research/${protocolName}`
        };
      }
      
      if (analysisExists) {
        reports.analysis = {
          exists: true,
          path: path.join(FILE_PATHS.RESEARCH_DIR, `${protocolName}${SUPPORTED_EXTENSIONS.HTML}`),
          url: `/reports/analysis/${protocolName}`
        };
      }

      // 缓存结果
      reportCache.set(cacheKey, reports);
      
    } catch (error) {
      console.warn('检查报告文件时出错:', error);
    }
    
    return reports;
  }

  /**
   * 检查文件是否存在
   */
  private static async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 加载调研报告内容
   */
  static async loadResearchReport(nickname: string): Promise<{
    content: string;
    metadata: ReportMetadata;
  }> {
    const cacheKey = `research_${nickname}`;
    
    // 检查缓存
    const cached = reportCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const filePath = path.join(FILE_PATHS.RESEARCH_DIR, `${nickname}${SUPPORTED_EXTENSIONS.MARKDOWN}`);
      const content = await fs.readFile(filePath, 'utf-8');
      const stats = await fs.stat(filePath);
      const { data: frontmatter, content: markdownContent } = matter(content);
      
      const metadata: ReportMetadata = {
        title: frontmatter.title || `${nickname} 深度调研报告`,
        description: frontmatter.description || this.extractDescription(markdownContent),
        keywords: frontmatter.keywords || extractKeywords(markdownContent),
        lastModified: stats.mtime,
        fileSize: stats.size,
        publishedDate: frontmatter.publishedDate ? new Date(frontmatter.publishedDate) : undefined,
        canonical: `/reports/research/${nickname}`
      };

      const result = {
        content: await marked(markdownContent),
        metadata
      };

      // 缓存结果
      reportCache.set(cacheKey, result);
      
      return result;
    } catch (error) {
      console.error(`Failed to load research report for ${nickname}:`, error);
      throw new Error('Report not found');
    }
  }

  /**
   * 加载分析报告内容
   */
  static async loadAnalysisReport(nickname: string): Promise<{
    content: string;
    metadata: ReportMetadata;
  }> {
    const cacheKey = `analysis_${nickname}`;
    
    // 检查缓存
    const cached = reportCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const filePath = path.join(FILE_PATHS.RESEARCH_DIR, `${nickname}${SUPPORTED_EXTENSIONS.HTML}`);
      const content = await fs.readFile(filePath, 'utf-8');
      const stats = await fs.stat(filePath);
      
      // 从HTML中提取标题
      const titleMatch = content.match(/<title>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : `${nickname} 分析报告`;
      
      // 从HTML中提取描述
      const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
      const description = metaDescMatch ? metaDescMatch[1] : this.extractDescriptionFromHTML(content);

      const metadata: ReportMetadata = {
        title,
        description,
        keywords: extractKeywords(content),
        lastModified: stats.mtime,
        fileSize: stats.size,
        canonical: `/reports/analysis/${nickname}`
      };

      const result = {
        content,
        metadata
      };

      // 缓存结果
      reportCache.set(cacheKey, result);
      
      return result;
    } catch (error) {
      console.error(`Failed to load analysis report for ${nickname}:`, error);
      throw new Error('Report not found');
    }
  }

  /**
   * 从Markdown内容提取描述
   */
  private static extractDescription(content: string): string {
    const cleanText = cleanMarkdown(content);
    return cleanText.slice(0, 200).trim();
  }

  /**
   * 从HTML内容提取描述
   */
  private static extractDescriptionFromHTML(content: string): string {
    // 移除HTML标签
    const plainText = content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    return plainText.slice(0, 200).trim();
  }

  /**
   * 获取所有可用的过滤器选项
   */
  static async generateFilterOptions(pools?: Pool[]) {
    try {
      const allPools = pools || await this.loadAllPools();
      
      const chains = Array.from(new Set(allPools.flatMap(p => p.chain))).sort();
      const risks = Array.from(new Set(allPools.map(p => p.risk))).sort();
      const types = Array.from(new Set(allPools.map(p => p.type))).sort();
      const tokens = Array.from(new Set(allPools.map(p => p.token))).sort();
      const markets = Array.from(new Set(allPools.flatMap(p => p.market))).sort();
      
      // 计算APR范围
      const aprValues = allPools.flatMap(p => [p.aprRange.low, p.aprRange.high]);
      const aprRange = {
        min: Math.min(...aprValues),
        max: Math.max(...aprValues)
      };
      
      return { chains, risks, types, tokens, markets, aprRange };
    } catch (error) {
      console.error('Failed to generate filter options:', error);
      return {
        chains: [],
        risks: [],
        types: [],
        tokens: [],
        markets: [],
        aprRange: { min: 0, max: 100 }
      };
    }
  }

  /**
   * 搜索池数据
   */
  static async searchPools(query: string): Promise<Pool[]> {
    try {
      const allPools = await this.loadAllPools();
      const searchTerm = query.toLowerCase().trim();
      
      if (!searchTerm) {
        return allPools;
      }

      return allPools.filter(pool =>
        pool.name.toLowerCase().includes(searchTerm) ||
        pool.protocol.name.toLowerCase().includes(searchTerm) ||
        pool.type.toLowerCase().includes(searchTerm) ||
        pool.token.toLowerCase().includes(searchTerm) ||
        pool.chain.some(chain => chain.toLowerCase().includes(searchTerm))
      );
    } catch (error) {
      console.error('Failed to search pools:', error);
      return [];
    }
  }

  /**
   * 根据ID获取单个池
   */
  static async getPoolById(id: string): Promise<Pool | null> {
    try {
      const allPools = await this.loadAllPools();
      return allPools.find(pool => pool.id === id) || null;
    } catch (error) {
      console.error(`Failed to get pool by id ${id}:`, error);
      return null;
    }
  }

  /**
   * 清空缓存
   */
  static clearCache(): void {
    poolCache.clear();
    protocolCache.clear();
    reportCache.clear();
  }

  /**
   * 获取缓存统计信息
   */
  static getCacheStats() {
    return {
      pools: poolCache.size,
      protocols: protocolCache.size,
      reports: reportCache.size
    };
  }
}