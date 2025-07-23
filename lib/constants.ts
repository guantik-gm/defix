import { CacheConfig } from '@/types';

// 缓存配置
export const CACHE_CONFIG: CacheConfig = {
  // 静态资源缓存
  staticMaxAge: 31536000, // 1年
  
  // API缓存
  apiMaxAge: 3600, // 1小时
  
  // 页面缓存
  pageMaxAge: 86400, // 1天
  
  // 内存缓存
  memoryCache: {
    ttl: 300000, // 5分钟
    maxSize: 1000 // 最大1000个条目
  }
};

// 默认分页配置
export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 20,
  maxLimit: 100
};

// API端点
export const API_ENDPOINTS = {
  POOLS: '/api/pools',
  POOL_DETAIL: '/api/pools/[id]',
  RESEARCH_REPORT: '/api/reports/research/[nickname]',
  ANALYSIS_REPORT: '/api/reports/analysis/[nickname]',
  REQUESTS: '/api/requests',
  FILTERS: '/api/filters',
  HEALTH: '/api/health',
  SITEMAP: '/sitemap.xml'
};

// 文件路径常量
export const FILE_PATHS = {
  WEB3_ROOT: 'web3',
  POOLS_DIR: 'web3/pools',
  CEX_POOLS: 'web3/pools/cex',
  CHAIN_POOLS: 'web3/pools/chain',
  PROTOCOL_DIR: 'web3/protocol',
  RESEARCH_DIR: 'web3/protocol/research',
  LOGS_DIR: 'logs'
};

// 支持的文件扩展名
export const SUPPORTED_EXTENSIONS = {
  MARKDOWN: '.md',
  HTML: '.html',
  JSON: '.json'
};

// 风险等级配置
export const RISK_CONFIG = {
  '低风险': {
    color: 'bg-green-100 text-green-800 border-green-200',
    priority: 1,
    description: '成熟协议，机制简单，历史稳定'
  },
  '中风险': {
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    priority: 2,
    description: '协议较为成熟，存在一定复杂性'
  },
  '高风险': {
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    priority: 3,
    description: '新兴协议或复杂机制，需谨慎评估'
  },
  '极高风险': {
    color: 'bg-red-100 text-red-800 border-red-200',
    priority: 4,
    description: '实验性项目，存在较大不确定性'
  }
};

// HTTP状态码
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
};

// 错误消息
export const ERROR_MESSAGES = {
  INVALID_REQUEST: '请求参数无效',
  POOL_NOT_FOUND: '收益池不存在',
  REPORT_NOT_FOUND: '报告文件不存在',
  FILE_READ_ERROR: '文件读取失败',
  DATABASE_ERROR: '数据库操作失败',
  VALIDATION_ERROR: '数据验证失败',
  INTERNAL_ERROR: '服务器内部错误',
  METHOD_NOT_ALLOWED: '请求方法不允许',
  RATE_LIMIT_EXCEEDED: '请求频率超出限制'
};

// 成功消息
export const SUCCESS_MESSAGES = {
  REQUEST_SUBMITTED: '请求提交成功，我们将尽快处理',
  DATA_UPDATED: '数据更新成功',
  OPERATION_COMPLETED: '操作完成'
};

// 默认SEO配置
export const DEFAULT_SEO = {
  siteName: 'DeFi收益池聚合平台',
  description: '为Web3 DeFi玩家提供专业的收益池信息聚合服务，包含详细的调研报告、风险评估和实时收益数据。',
  keywords: 'DeFi, 收益池, 流动性挖矿, Web3投资, 区块链理财, APR, 风险评估',
  ogImage: '/og-image.png',
  twitterHandle: '@defi_aggregator'
};

// 正则表达式模式
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PROTOCOL_NAME: /^\[\[(.*?)\]\]$/,
  MARKDOWN_LINKS: /\[(.*?)\]\((.*?)\)/g,
  MARKDOWN_HEADERS: /#{1,6}\s+/g,
  MARKDOWN_BOLD: /\*\*(.*?)\*\*/g,
  MARKDOWN_ITALIC: /\*(.*?)\*/g,
  MARKDOWN_CODE: /`(.*?)`/g
};

// Web Vitals优化配置
export const WEB_VITALS_CONFIG = {
  // 核心网页指标目标
  LCP: 2500,  // Largest Contentful Paint (ms)
  FID: 100,   // First Input Delay (ms)
  CLS: 0.1,   // Cumulative Layout Shift
  
  // 优化策略
  strategies: [
    'preload-critical-resources',
    'code-splitting',
    'lazy-loading',
    'service-worker-caching'
  ]
};

// 数据验证规则
export const VALIDATION_RULES = {
  POOL_NAME: {
    minLength: 2,
    maxLength: 100,
    required: true
  },
  PROTOCOL_NAME: {
    minLength: 2,
    maxLength: 50,
    required: true
  },
  DESCRIPTION: {
    minLength: 10,
    maxLength: 1000,
    required: true
  },
  EMAIL: {
    pattern: REGEX_PATTERNS.EMAIL,
    required: false
  },
  APR: {
    min: 0,
    max: 10000,
    precision: 2
  }
};

// 支持的区块链网络
export const SUPPORTED_CHAINS = [
  'Ethereum',
  'Aptos', 
  'Solana',
  'Polygon',
  'BSC',
  'Arbitrum',
  'Optimism',
  'Avalanche',
  'Fantom',
  'Cosmos'
];

// 支持的投资类型
export const INVESTMENT_TYPES = [
  'StableLP',
  'Future',
  'Lending',
  'Staking',
  'Farming',
  'Options',
  'Perpetual',
  'Vault'
];

// 支持的Token类型
export const TOKEN_TYPES = [
  'ETH',
  'BTC', 
  'USDC',
  'USDT',
  'DAI',
  'APT',
  'SOL',
  'MATIC',
  'BNB',
  'AVAX'
];

// 适用市场类型
export const MARKET_TYPES = [
  '牛市',
  '熊市',
  '震荡市',
  '通用',
  '高波动',
  '低波动'
];