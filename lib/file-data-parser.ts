import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Pool, Protocol, RiskLevel } from '@/types';

/**
 * 文件系统数据解析器
 * 负责从web3目录中读取和解析收益池和协议数据
 */

// 风险等级映射
const riskMapping: Record<string, RiskLevel> = {
  '低风险': RiskLevel.LOW,
  '中风险': RiskLevel.MEDIUM,
  '高风险': RiskLevel.HIGH,
  '低': RiskLevel.LOW,
  '中': RiskLevel.MEDIUM,
  '高': RiskLevel.HIGH,
};

// 获取协议信息的缓存
let protocolsCache: Map<string, Protocol> | null = null;

/**
 * 解析协议数据
 */
export async function parseProtocols(): Promise<Protocol[]> {
  if (protocolsCache) {
    return Array.from(protocolsCache.values());
  }

  const protocolsDir = path.join(process.cwd(), 'web3', 'protocol');
  const protocols: Protocol[] = [];
  protocolsCache = new Map();

  try {
    const files = fs.readdirSync(protocolsDir);
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(protocolsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        // 从文件名生成ID
        const id = file.replace('.md', '').toLowerCase().replace(/\s+/g, '-');
        const name = file.replace('.md', '');
        
        const protocol: Protocol = {
          id,
          name,
          website: data.Website || '',
          nickname: data.Nickname || name.toLowerCase(),
          description: data.Description || '',
          reportPath: data.Report ? data.Report.replace(/\[\[|\]\]/g, '') : data.Nickname || name.toLowerCase(),
        };
        
        protocols.push(protocol);
        protocolsCache.set(name, protocol);
      }
    }
  } catch (error) {
    console.error('Error parsing protocols:', error);
  }

  return protocols;
}

/**
 * 模糊匹配协议名称
 */
function findProtocolByFuzzyMatch(protocolName: string): Protocol | null {
  if (!protocolsCache) return null;
  
  const normalizedInput = protocolName.toLowerCase().replace(/\s+/g, '');
  
  // 遍历所有协议寻找匹配
  for (const [key, protocol] of protocolsCache.entries()) {
    const normalizedKey = key.toLowerCase().replace(/\s+/g, '');
    const normalizedNickname = protocol.nickname.toLowerCase().replace(/\s+/g, '');
    
    // 精确匹配
    if (normalizedKey === normalizedInput || normalizedNickname === normalizedInput) {
      return protocol;
    }
    
    // 包含匹配
    if (normalizedKey.includes(normalizedInput) || normalizedInput.includes(normalizedKey)) {
      return protocol;
    }
    
    // 昵称包含匹配
    if (normalizedNickname.includes(normalizedInput) || normalizedInput.includes(normalizedNickname)) {
      return protocol;
    }
  }
  
  return null;
}

/**
 * 解析收益池数据
 */
export async function parsePools(): Promise<Pool[]> {
  const poolsDir = path.join(process.cwd(), 'web3', 'pools', 'chain');
  const pools: Pool[] = [];
  
  // 确保协议数据已加载
  await parseProtocols();

  try {
    const files = fs.readdirSync(poolsDir);
    
    for (const file of files) {
      if (file.endsWith('.md') && file.length > 3) { // 过滤空文件名
        try {
          const filePath = path.join(poolsDir, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContent);
        
        // 解析协议名称
        const protocolName = data.Protocol ? data.Protocol.replace(/\[\[|\]\]/g, '').trim() : '';
        
        // 尝试匹配协议，如果找不到则创建默认协议信息
        let protocol = protocolsCache?.get(protocolName);
        
        if (!protocol && protocolName) {
          // 尝试模糊匹配
          const fuzzyMatch = findProtocolByFuzzyMatch(protocolName);
          if (fuzzyMatch) {
            protocol = fuzzyMatch;
          } else {
            // 创建默认协议信息（仅在开发环境显示详细日志）
            if (process.env.NODE_ENV === 'development') {
              console.info(`使用默认协议信息: ${protocolName} (来源: ${file})`);
            }
            protocol = {
              name: protocolName,
              website: '',
              nickname: protocolName.toLowerCase().replace(/\s+/g, ''),
              description: ''
            };
          }
        } else if (!protocolName) {
          // 如果没有协议名称，创建默认协议
          protocol = {
            name: 'Unknown Protocol',
            website: '',
            nickname: 'unknown',
            description: ''
          };
        }

        // 生成池子ID
        const id = file.replace('.md', '').toLowerCase().replace(/\s+/g, '-');
        const name = file.replace('.md', '');
        
        // 解析风险等级
        const riskStr = data.Risk || '中风险';
        const risk = riskMapping[riskStr] || RiskLevel.MEDIUM;
        
        // 解析链信息
        const chains = Array.isArray(data.Chain) ? data.Chain : (data.Chain ? [data.Chain] : ['Unknown']);
        
        // 解析市场信息
        const markets = Array.isArray(data.Market) ? data.Market : (data.Market ? [data.Market] : ['通用']);
        
        // 解析APR范围
        const aprLow = parseFloat(data['APR-Low'] || '0');
        const aprHigh = parseFloat(data['APR-High'] || '0');
        
        // 检查报告文件是否存在
        const reportSlug = protocol.nickname || protocol.name.toLowerCase().replace(/\s+/g, '');
        const researchPath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${reportSlug}.md`);
        const analysisPath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${reportSlug}.html`);
        
        const pool: Pool = {
          id,
          name,
          protocol: {
            name: protocol.name,
            website: protocol.website,
            nickname: protocol.nickname,
            description: protocol.description,
          },
          type: data.Type || 'Unknown',
          chain: chains,
          risk,
          token: data.Token || 'Unknown',
          aprRange: {
            low: aprLow,
            high: aprHigh,
          },
          market: markets,
          underlying: data.Underlying || '',
          danger: data.Danger || '',
          scenarios: data.Scenarios || '',
          reports: {
            research: {
              exists: fs.existsSync(researchPath),
              path: `web3/protocol/research/${reportSlug}.md`,
              url: `/reports/research/${reportSlug}`,
            },
            analysis: {
              exists: fs.existsSync(analysisPath),
              path: `web3/protocol/research/${reportSlug}.html`,
              url: `/reports/analysis/${reportSlug}`,
            },
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        pools.push(pool);
        } catch (error) {
          console.error(`Error parsing pool file ${file}:`, error);
          // 继续处理其他文件，不中断整个过程
        }
      }
    }
  } catch (error) {
    console.error('Error parsing pools:', error);
  }

  return pools;
}

/**
 * 获取过滤器选项
 */
export async function generateFilterOptions() {
  const pools = await parsePools();
  
  const chains = Array.from(new Set(pools.flatMap(p => p.chain)));
  const risks = Array.from(new Set(pools.map(p => p.risk)));
  const types = Array.from(new Set(pools.map(p => p.type)));
  const tokens = Array.from(new Set(pools.map(p => p.token)));
  const markets = Array.from(new Set(pools.flatMap(p => p.market)));
  
  const aprValues = pools.flatMap(p => [p.aprRange.low, p.aprRange.high]);
  const aprRange = {
    min: Math.min(...aprValues),
    max: Math.max(...aprValues),
  };
  
  return {
    chains,
    risks,
    types,
    tokens,
    markets,
    aprRange,
  };
}

/**
 * 清除缓存（用于开发时的热重载）
 */
export function clearCache() {
  protocolsCache = null;
}

/**
 * 模拟API延迟（保持与原有API一致的行为）
 */
export function apiDelay(ms: number = 300): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}