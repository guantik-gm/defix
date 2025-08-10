import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
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
  '极高风险': RiskLevel.VERY_HIGH,
  '低': RiskLevel.LOW,
  '中': RiskLevel.MEDIUM,
  '高': RiskLevel.HIGH,
  '极高': RiskLevel.VERY_HIGH,
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
 * 解析正文中的 Markdown 详情字段
 * 使用标准 Markdown AST 解析，比正则表达式更可靠
 */
async function parseMarkdownDetails(body: string): Promise<{
  underlying: string;
  danger: string;
  scenarios: string;
  remark: string;
}> {
  const detailFields = ['Underlying', 'Danger', 'Scenarios', 'Remark'];
  const details: any = {};
  
  try {
    // 使用 remark 解析 Markdown 为 AST
    const tree = remark().parse(body);
    
    // 遍历 AST 查找字段
    for (const field of detailFields) {
      const markdownContent = extractFieldContent(tree, field);
      // 将Markdown内容转换为HTML
      if (markdownContent.trim()) {
        const htmlContent = await remark()
          .use(remarkHtml, { sanitize: false })
          .process(markdownContent);
        details[field.toLowerCase()] = String(htmlContent).trim();
      } else {
        details[field.toLowerCase()] = '';
      }
    }
  } catch (error) {
    console.error('Markdown parsing error:', error);
    // 降级到空值
    for (const field of detailFields) {
      details[field.toLowerCase()] = '';
    }
  }
  
  return {
    underlying: details.underlying || '',
    danger: details.danger || '',
    scenarios: details.scenarios || '',
    remark: details.remark || ''
  };
}

/**
 * 从 AST 中提取指定字段的内容，返回原始Markdown格式
 */
function extractFieldContent(tree: any, fieldName: string): string {
  const nodes = tree.children;
  let fieldStartIndex = -1;
  
  // 查找字段标题节点
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type === 'paragraph' && node.children) {
      // 检查是否包含 **字段名**
      const hasFieldTitle = node.children.some((child: any) => 
        child.type === 'strong' && 
        child.children &&
        child.children.some((grandchild: any) => 
          grandchild.type === 'text' && grandchild.value === fieldName
        )
      );
      
      if (hasFieldTitle) {
        fieldStartIndex = i;
        break;
      }
    }
  }
  
  if (fieldStartIndex === -1) {
    return '';
  }
  
  // 收集从字段标题后到下一个字段标题之间的所有内容
  const contentNodes = [];
  for (let i = fieldStartIndex + 1; i < nodes.length; i++) {
    const node = nodes[i];
    
    // 检查是否遇到下一个字段标题
    if (node.type === 'paragraph' && node.children) {
      const isNextField = node.children.some((child: any) => 
        child.type === 'strong' && 
        child.children &&
        child.children.some((grandchild: any) => 
          grandchild.type === 'text' && 
          ['Underlying', 'Danger', 'Scenarios', 'Remark'].includes(grandchild.value)
        )
      );
      
      if (isNextField) {
        break;
      }
    }
    
    // 检查是否遇到分隔符
    if (node.type === 'thematicBreak') {
      break;
    }
    
    contentNodes.push(node);
  }
  
  // 将节点转换回Markdown格式
  return contentNodes.map(node => nodeToMarkdown(node)).join('\n').trim();
}

/**
 * 将 AST 节点转换为 Markdown 格式
 */
function nodeToMarkdown(node: any): string {
  if (!node) return '';
  
  switch (node.type) {
    case 'text':
      return node.value || '';
    
    case 'paragraph':
      return (node.children || []).map((child: any) => nodeToMarkdown(child)).join('');
    
    case 'strong':
      return `**${(node.children || []).map((child: any) => nodeToMarkdown(child)).join('')}**`;
    
    case 'emphasis':
      return `*${(node.children || []).map((child: any) => nodeToMarkdown(child)).join('')}*`;
    
    case 'link':
      const text = (node.children || []).map((child: any) => nodeToMarkdown(child)).join('');
      return `[${text}](${node.url || ''})`;
    
    case 'list':
      return (node.children || []).map((item: any, index: number) => {
        const itemText = nodeToMarkdown(item);
        return node.ordered ? `${index + 1}. ${itemText}` : `- ${itemText}`;
      }).join('\n');
    
    case 'listItem':
      return (node.children || []).map((child: any) => nodeToMarkdown(child)).join('');
    
    case 'code':
      return `\`\`\`\n${node.value || ''}\n\`\`\``;
    
    case 'inlineCode':
      return `\`${node.value || ''}\``;
    
    case 'heading':
      const level = '#'.repeat(node.depth || 1);
      const headingText = (node.children || []).map((child: any) => nodeToMarkdown(child)).join('');
      return `${level} ${headingText}`;
    
    case 'blockquote':
      const quoteText = (node.children || []).map((child: any) => nodeToMarkdown(child)).join('\n');
      return quoteText.split('\n').map((line: string) => `> ${line}`).join('\n');
    
    default:
      if (node.children) {
        return (node.children || []).map((child: any) => nodeToMarkdown(child)).join('');
      }
      return node.value || '';
  }
}

/**
 * 将 AST 节点转换为文本（保留用于其他用途）
 */
function nodeToText(node: any): string {
  if (!node) return '';
  
  switch (node.type) {
    case 'text':
      return node.value || '';
    
    case 'paragraph':
    case 'strong':
    case 'emphasis':
    case 'link':
      return (node.children || []).map((child: any) => nodeToText(child)).join('');
    
    case 'list':
      return (node.children || []).map((item: any, index: number) => {
        const itemText = nodeToText(item);
        return node.ordered ? `${index + 1}. ${itemText}` : `- ${itemText}`;
      }).join('\n');
    
    case 'listItem':
      return (node.children || []).map((child: any) => nodeToText(child)).join('');
    
    case 'code':
      return `\`${node.value || ''}\``;
    
    case 'inlineCode':
      return `\`${node.value || ''}\``;
    
    default:
      if (node.children) {
        return (node.children || []).map((child: any) => nodeToText(child)).join('');
      }
      return node.value || '';
  }
}

/**
 * 模糊匹配协议名称
 */
function findProtocolByFuzzyMatch(protocolName: string): Protocol | null {
  if (!protocolsCache) return null;
  
  const normalizedInput = protocolName.toLowerCase().replace(/\s+/g, '');
  
  // 遍历所有协议寻找匹配
  for (const [key, protocol] of Array.from(protocolsCache.entries())) {
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
              id: protocolName.toLowerCase().replace(/\s+/g, '-'),
              name: protocolName,
              website: '',
              nickname: protocolName.toLowerCase().replace(/\s+/g, ''),
              description: ''
            };
          }
        } else if (!protocolName) {
          // 如果没有协议名称，创建默认协议
          protocol = {
            id: 'unknown-protocol',
            name: 'Unknown Protocol',
            website: '',
            nickname: 'unknown',
            description: ''
          };
        }

        // 确保 protocol 不为 undefined
        if (!protocol) {
          protocol = {
            id: 'unknown-protocol',
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
        
        // 解析正文中的详情字段（新格式）
        const markdownDetails = await parseMarkdownDetails(content);
        
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
          underlying: markdownDetails.underlying || data.Underlying || '',
          danger: markdownDetails.danger || data.Danger || '',
          scenarios: markdownDetails.scenarios || data.Scenarios || '',
          remark: markdownDetails.remark || data.Remark || '',
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