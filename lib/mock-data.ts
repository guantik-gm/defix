import { Pool, Protocol, FilterOptions, RiskLevel } from '@/types';

// Mock 协议数据
export const mockProtocols: Protocol[] = [
  {
    id: '1',
    name: 'Tapp Exchange',
    website: 'https://tapp.exchange/',
    nickname: 'tapp',
    description: 'Aptos生态DEX交易平台',
    reportPath: 'tapp',
  },
  {
    id: '2', 
    name: 'Kai Finance',
    website: 'https://kai.finance/',
    nickname: 'kai',
    description: 'Sui链上DeFi协议',
    reportPath: 'kai',
  },
  {
    id: '3',
    name: 'Kamino',
    website: 'https://kamino.finance/',
    nickname: 'kamino',
    description: 'Solana生态流动性管理协议',
    reportPath: 'kamino',
  },
  {
    id: '4',
    name: 'Pendle',
    website: 'https://pendle.finance/',
    nickname: 'pendle',
    description: '收益代币化DeFi协议',
    reportPath: 'pendle',
  },
  {
    id: '5',
    name: 'Navi Protocol',
    website: 'https://naviprotocol.io/',
    nickname: 'navi',
    description: 'Sui生态借贷协议',
    reportPath: 'navi',
  },
  {
    id: '6',
    name: 'Cetus',
    website: 'https://cetus.zone/',
    nickname: 'cetus',
    description: 'Sui生态DEX和流动性协议',
    reportPath: 'cetus',
  },
  {
    id: '7',
    name: 'Binance',
    website: 'https://binance.com/',
    nickname: 'binance',
    description: '全球领先的加密货币交易平台',
    reportPath: 'binance',
  },
  {
    id: '8',
    name: 'OKX',
    website: 'https://okx.com/',
    nickname: 'okx',
    description: '知名加密货币交易平台',
    reportPath: 'okx',
  },
];

// Mock 收益池数据
export const mockPools: Pool[] = [
  {
    id: '1',
    name: 'Tapp StableLP',
    protocol: {
      name: 'Tapp Exchange',
      website: 'https://tapp.exchange/',
      nickname: 'tapp',
      description: 'Aptos生态DEX交易平台',
    },
    type: 'StableLP',
    chain: ['Aptos'],
    risk: RiskLevel.MEDIUM,
    token: 'APT',
    aprRange: {
      low: 0.15,
      high: 0.3,
    },
    market: ['通用'],
    underlying: '稳定币 LP',
    danger: '小协议跑路风险',
    scenarios: '保本 U 本位理财',
    reports: {
      research: {
        exists: true,
        path: 'web3/protocol/research/tapp.md',
        url: '/reports/research/tapp',
      },
      analysis: {
        exists: true,
        path: 'web3/protocol/research/tapp.html',
        url: '/reports/analysis/tapp',
      },
    },
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-20'),
  },
  {
    id: '2',
    name: 'KaiFinance StableLP',
    protocol: {
      name: 'Kai Finance',
      website: 'https://kai.finance/',
      nickname: 'kai',
      description: 'Sui链上DeFi协议',
    },
    type: 'StableLP',
    chain: ['Sui'],
    risk: RiskLevel.MEDIUM,
    token: 'USDC',
    aprRange: {
      low: 0.12,
      high: 0.25,
    },
    market: ['通用', '稳定币'],
    underlying: 'USDC-USDT LP',
    danger: '智能合约风险',
    scenarios: '稳定币收益',
    reports: {
      research: {
        exists: true,
        path: 'web3/protocol/research/kai.md',
        url: '/reports/research/kai',
      },
      analysis: {
        exists: true,
        path: 'web3/protocol/research/kai.html',
        url: '/reports/analysis/kai',
      },
    },
    createdAt: new Date('2025-01-18'),
    updatedAt: new Date('2025-01-22'),
  },
  {
    id: '3',
    name: 'Kamino SOL Leverage',
    protocol: {
      name: 'Kamino',
      website: 'https://kamino.finance/',
      nickname: 'kamino',
      description: 'Solana生态流动性管理协议',
    },
    type: 'Leverage',
    chain: ['Solana'],
    risk: RiskLevel.HIGH,
    token: 'SOL',
    aprRange: {
      low: 0.2,
      high: 0.5,
    },
    market: ['杠杆', '高收益'],
    underlying: 'SOL杠杆仓位',
    danger: '杠杆清算风险',
    scenarios: 'SOL看多策略',
    reports: {
      research: {
        exists: true,
        path: 'web3/protocol/research/kamino.md',
        url: '/reports/research/kamino',
      },
      analysis: {
        exists: false,
      },
    },
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-21'),
  },
  {
    id: '4',
    name: 'Pendle LP',
    protocol: {
      name: 'Pendle',
      website: 'https://pendle.finance/',
      nickname: 'pendle',
      description: '收益代币化DeFi协议',
    },
    type: 'LP',
    chain: ['Ethereum', 'Arbitrum'],
    risk: RiskLevel.MEDIUM,
    token: 'PENDLE',
    aprRange: {
      low: 0.18,
      high: 0.35,
    },
    market: ['收益代币化', '固定收益'],
    underlying: 'Pendle PT/YT',
    danger: '收益率波动风险',
    scenarios: '固定收益策略',
    reports: {
      research: {
        exists: true,
        path: 'web3/protocol/research/pendle.md',
        url: '/reports/research/pendle',
      },
      analysis: {
        exists: true,
        path: 'web3/protocol/research/pendle.html',
        url: '/reports/analysis/pendle',
      },
    },
    createdAt: new Date('2025-01-12'),
    updatedAt: new Date('2025-01-20'),
  },
  {
    id: '5',
    name: 'Navi USDT Leverage',
    protocol: {
      name: 'Navi Protocol',
      website: 'https://naviprotocol.io/',
      nickname: 'navi',
      description: 'Sui生态借贷协议',
    },
    type: 'Leverage',
    chain: ['Sui'],
    risk: RiskLevel.HIGH,
    token: 'USDT',
    aprRange: {
      low: 0.22,
      high: 0.45,
    },
    market: ['借贷', '杠杆'],
    underlying: 'USDT杠杆存款',
    danger: '借贷利率波动风险',
    scenarios: '稳定币杠杆收益',
    reports: {
      research: {
        exists: true,
        path: 'web3/protocol/research/navi.md',
        url: '/reports/research/navi',
      },
      analysis: {
        exists: false,
      },
    },
    createdAt: new Date('2025-01-16'),
    updatedAt: new Date('2025-01-23'),
  },
  {
    id: '6',
    name: 'Cetus LP',
    protocol: {
      name: 'Cetus',
      website: 'https://cetus.zone/',
      nickname: 'cetus',
      description: 'Sui生态DEX和流动性协议',
    },
    type: 'LP',
    chain: ['Sui'],
    risk: RiskLevel.MEDIUM,
    token: 'SUI',
    aprRange: {
      low: 0.16,
      high: 0.32,
    },
    market: ['DEX', '流动性挖矿'],
    underlying: 'SUI-USDC LP',
    danger: '无常损失风险',
    scenarios: 'DEX流动性提供',
    reports: {
      research: {
        exists: true,
        path: 'web3/protocol/research/cetus.md',
        url: '/reports/research/cetus',
      },
      analysis: {
        exists: true,
        path: 'web3/protocol/research/cetus.html',
        url: '/reports/analysis/cetus',
      },
    },
    createdAt: new Date('2025-01-14'),
    updatedAt: new Date('2025-01-21'),
  },
  {
    id: '7',
    name: 'Binance BNB Future Grid',
    protocol: {
      name: 'Binance',
      website: 'https://binance.com/',
      nickname: 'binance',
      description: '全球领先的加密货币交易平台',
    },
    type: 'Future Grid',
    chain: ['BNB'],
    risk: RiskLevel.HIGH,
    token: 'BNB',
    aprRange: {
      low: 0.25,
      high: 0.6,
    },
    market: ['网格交易', '期货'],
    underlying: 'BNB期货网格',
    danger: '价格波动风险',
    scenarios: '震荡市网格策略',
    reports: {
      research: {
        exists: false,
      },
      analysis: {
        exists: false,
      },
    },
    createdAt: new Date('2025-01-19'),
    updatedAt: new Date('2025-01-23'),
  },
  {
    id: '8',
    name: 'OKX 智能套利策略',
    protocol: {
      name: 'OKX',
      website: 'https://okx.com/',
      nickname: 'okx',
      description: '知名加密货币交易平台',
    },
    type: '智能套利',
    chain: ['通用'],
    risk: RiskLevel.LOW,
    token: 'USDT',
    aprRange: {
      low: 0.08,
      high: 0.15,
    },
    market: ['套利', '稳定收益'],
    underlying: '现货套利策略',
    danger: '市场流动性风险',
    scenarios: '低风险套利收益',
    reports: {
      research: {
        exists: false,
      },
      analysis: {
        exists: false,
      },
    },
    createdAt: new Date('2025-01-17'),
    updatedAt: new Date('2025-01-22'),
  },
  {
    id: '9',
    name: 'Kamino USDT Deposit',
    protocol: {
      name: 'Kamino',
      website: 'https://kamino.finance/',
      nickname: 'kamino',
      description: 'Solana生态流动性管理协议',
    },
    type: 'Deposit',
    chain: ['Solana'],
    risk: RiskLevel.LOW,
    token: 'USDT',
    aprRange: {
      low: 0.05,
      high: 0.12,
    },
    market: ['存款', '稳定收益'],
    underlying: 'USDT存款池',
    danger: '协议风险',
    scenarios: '稳定币存款收益',
    reports: {
      research: {
        exists: true,
        path: 'web3/protocol/research/kamino.md',
        url: '/reports/research/kamino',
      },
      analysis: {
        exists: true,
        path: 'web3/protocol/research/kamino.html',
        url: '/reports/analysis/kamino',
      },
    },
    createdAt: new Date('2025-01-13'),
    updatedAt: new Date('2025-01-20'),
  },
  {
    id: '10',
    name: 'Hyperion StableLP',
    protocol: {
      name: 'Hyperion',
      website: 'https://hyperion.finance/',
      nickname: 'hyperion',
      description: 'Aptos生态DeFi协议',
    },
    type: 'StableLP',
    chain: ['Aptos'],
    risk: RiskLevel.MEDIUM,
    token: 'USDT',
    aprRange: {
      low: 0.14,
      high: 0.28,
    },
    market: ['稳定币', 'LP'],
    underlying: 'USDT-USDC LP',
    danger: '智能合约风险',
    scenarios: '稳定币LP收益',
    reports: {
      research: {
        exists: false,
      },
      analysis: {
        exists: false,
      },
    },
    createdAt: new Date('2025-01-11'),
    updatedAt: new Date('2025-01-19'),
  },
];

// 生成过滤器选项
export function generateMockFilterOptions(): FilterOptions {
  const pools = mockPools;
  
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

// 模拟API延迟
export function mockApiDelay(ms: number = 800): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 模拟分页数据
export function paginatePools(pools: Pool[], page: number = 1, limit: number = 20) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    pools: pools.slice(startIndex, endIndex),
    total: pools.length,
    page,
    limit,
    totalPages: Math.ceil(pools.length / limit),
  };
}

// 模拟搜索结果
export function searchPools(pools: Pool[], query: string): Pool[] {
  if (!query) return pools;
  
  const lowerQuery = query.toLowerCase();
  return pools.filter(pool => 
    pool.name.toLowerCase().includes(lowerQuery) ||
    pool.protocol.name.toLowerCase().includes(lowerQuery) ||
    pool.type.toLowerCase().includes(lowerQuery) ||
    pool.token.toLowerCase().includes(lowerQuery) ||
    pool.chain.some(chain => chain.toLowerCase().includes(lowerQuery))
  );
}