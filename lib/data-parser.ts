import matter from 'gray-matter';
import { Pool, Protocol, RawPoolData, RawProtocolData, RiskLevel, SortField, SortFieldType } from '@/types';
import { extractProtocolName, normalizeArray, generateId } from './utils';

// 解析Pool文档
export function parsePoolData(content: string, filename: string): Partial<Pool> {
  try {
    const { data } = matter(content);
    const raw = data as RawPoolData;
    
    const poolName = filename.replace('.md', '');
    const protocolName = extractProtocolName(raw.Protocol || '');
    
    return {
      id: generateId(),
      name: poolName,
      protocol: {
        name: protocolName,
        website: '', // 需要从Protocol文档获取
        nickname: '', // 需要从Protocol文档获取
        description: '', // 需要从Protocol文档获取
      },
      type: raw.Type || '',
      chain: normalizeArray(raw.Chain),
      risk: mapRiskLevel(raw.Risk),
      token: raw.Token || '',
      aprRange: {
        low: raw['APR-Low'] || 0,
        high: raw['APR-High'] || 0,
      },
      market: normalizeArray(raw.Market),
      underlying: raw.Underlying,
      danger: raw.Danger,
      scenarios: raw.Scenarios,
      reports: {
        research: { exists: false },
        analysis: { exists: false },
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  } catch (error) {
    console.error('Error parsing pool data:', error);
    return {};
  }
}

// 解析Protocol文档
export function parseProtocolData(content: string, filename: string): Partial<Protocol> {
  try {
    const { data } = matter(content);
    const raw = data as RawProtocolData;
    
    const protocolName = filename.replace('.md', '');
    
    return {
      id: generateId(),
      name: protocolName,
      website: raw.Website || '',
      nickname: raw.Nickname || '',
      description: raw.Description || '',
      reportPath: extractProtocolName(raw.Report || ''),
    };
  } catch (error) {
    console.error('Error parsing protocol data:', error);
    return {};
  }
}

// 映射风险等级字符串到枚举
function mapRiskLevel(risk: string): RiskLevel {
  switch (risk) {
    case '低风险':
      return RiskLevel.LOW;
    case '中风险':
      return RiskLevel.MEDIUM;
    case '高风险':
      return RiskLevel.HIGH;
    case '极高风险':
      return RiskLevel.VERY_HIGH;
    default:
      return RiskLevel.MEDIUM; // 默认中风险
  }
}

// 合并Pool和Protocol数据
export function mergePoolWithProtocol(pool: Partial<Pool>, protocol?: Partial<Protocol>): Pool {
  const now = new Date();
  
  return {
    id: pool.id || generateId(),
    name: pool.name || '',
    protocol: {
      name: protocol?.name || pool.protocol?.name || '',
      website: protocol?.website || pool.protocol?.website || '',
      nickname: protocol?.nickname || pool.protocol?.nickname || '',
      description: protocol?.description || pool.protocol?.description || '',
    },
    type: pool.type || '',
    chain: pool.chain || [],
    risk: pool.risk || RiskLevel.MEDIUM,
    token: pool.token || '',
    aprRange: pool.aprRange || { low: 0, high: 0 },
    market: pool.market || [],
    underlying: pool.underlying,
    danger: pool.danger,
    scenarios: pool.scenarios,
    reports: {
      research: {
        exists: false,
        path: protocol?.reportPath ? `web3/protocol/research/${protocol.reportPath}.md` : undefined,
        url: protocol?.reportPath ? `/reports/research/${protocol.reportPath}` : undefined,
      },
      analysis: {
        exists: false,
        path: protocol?.reportPath ? `web3/protocol/research/${protocol.reportPath}.html` : undefined,
        url: protocol?.reportPath ? `/reports/analysis/${protocol.reportPath}` : undefined,
      },
    },
    createdAt: pool.createdAt || now,
    updatedAt: pool.updatedAt || now,
  };
}

// 验证Pool数据完整性
export function validatePoolData(pool: Pool): string[] {
  const errors: string[] = [];
  
  if (!pool.name) errors.push('缺少收益池名称');
  if (!pool.protocol.name) errors.push('缺少协议名称');
  if (!pool.type) errors.push('缺少投资类型');
  if (!pool.chain.length) errors.push('缺少区块链信息');
  if (!pool.token) errors.push('缺少Token信息');
  if (pool.aprRange.low < 0 || pool.aprRange.high < 0) errors.push('APR范围不能为负数');
  if (pool.aprRange.low > pool.aprRange.high) errors.push('APR最低值不能大于最高值');
  
  return errors;
}

// 生成Pool搜索关键词
export function generatePoolKeywords(pool: Pool): string {
  return [
    pool.name,
    pool.protocol.name,
    pool.type,
    ...pool.chain,
    pool.token,
    ...pool.market,
    pool.underlying,
  ].filter(Boolean).join(' ').toLowerCase();
}

// 获取字段值的函数
function getFieldValue(pool: Pool, field: SortFieldType): any {
  switch (field) {
    case 'apr-high':
      return pool.aprRange.high;
    case 'apr-low':
      return pool.aprRange.low;
    case 'risk':
      const riskOrder = { 
        [RiskLevel.LOW]: 1, 
        [RiskLevel.MEDIUM]: 2, 
        [RiskLevel.HIGH]: 3, 
        [RiskLevel.VERY_HIGH]: 4 
      };
      return riskOrder[pool.risk];
    default:
      return pool.name;
  }
}

// 多字段排序函数
export function sortPools(pools: Pool[], sorts: SortField[] = []): Pool[] {
  if (sorts.length === 0) {
    return pools; // 没有排序条件时返回原数组
  }
  
  const sorted = [...pools].sort((a, b) => {
    // 按照sorts数组中的顺序逐个比较字段
    for (const { field, order } of sorts) {
      const aValue = getFieldValue(a, field);
      const bValue = getFieldValue(b, field);
      
      let result = 0;
      if (aValue < bValue) result = -1;
      else if (aValue > bValue) result = 1;
      
      if (result !== 0) {
        return order === 'asc' ? result : -result;
      }
    }
    
    return 0; // 所有字段都相等
  });
  
  return sorted;
}

// 过滤函数
export function filterPools(pools: Pool[], filters: {
  search?: string;
  chains?: string[];
  risks?: RiskLevel[];
  types?: string[];
  tokens?: string[];
  markets?: string[];
  aprMin?: number;
  aprMax?: number;
}): Pool[] {
  return pools.filter(pool => {
    // 搜索过滤
    if (filters.search) {
      const keywords = generatePoolKeywords(pool);
      if (!keywords.includes(filters.search.toLowerCase())) {
        return false;
      }
    }
    
    // 链过滤
    if (filters.chains?.length) {
      if (!pool.chain.some(chain => filters.chains!.includes(chain))) {
        return false;
      }
    }
    
    // 风险等级过滤
    if (filters.risks?.length) {
      if (!filters.risks.includes(pool.risk)) {
        return false;
      }
    }
    
    // 类型过滤
    if (filters.types?.length) {
      if (!filters.types.includes(pool.type)) {
        return false;
      }
    }
    
    // Token过滤
    if (filters.tokens?.length) {
      if (!filters.tokens.includes(pool.token)) {
        return false;
      }
    }
    
    // 市场过滤
    if (filters.markets?.length) {
      if (!pool.market.some(market => filters.markets!.includes(market))) {
        return false;
      }
    }
    
    // APR范围过滤
    if (filters.aprMin !== undefined || filters.aprMax !== undefined) {
      const avgAPR = (pool.aprRange.low + pool.aprRange.high) / 2;
      if (filters.aprMin !== undefined && avgAPR < filters.aprMin) {
        return false;
      }
      if (filters.aprMax !== undefined && avgAPR > filters.aprMax) {
        return false;
      }
    }
    
    return true;
  });
}