// 风险等级枚举
export enum RiskLevel {
  LOW = "低风险",
  MEDIUM = "中风险", 
  HIGH = "高风险",
  VERY_HIGH = "极高风险"
}

// Pool 收益池数据模型
export interface Pool {
  id: string;
  slug: string;                    // URL slug
  name: string;                    // 收益池名称
  description?: string;            // 收益池描述
  protocol: {
    name: string;                  // 协议名称
    website: string;               // 官网链接
    nickname: string;              // 协议简称
    description?: string;          // 协议描述
  };
  website?: string;                // 收益池网站
  type: string;                    // 收益池类型 (StableLP, Future, etc.)
  chain: string[];                 // 所属链 (["Aptos", "Ethereum"])
  risk: RiskLevel;                 // 风险等级
  token: string;                   // Token 类型
  tokens?: string[];               // 支持的多个tokens
  tags?: string[];                 // 标签
  apr: number;                     // 当前APR (计算得出)
  aprRange: {
    low: number;                   // 最低 APR
    high: number;                  // 最高 APR
  };
  tvl: number;                     // 总锁定价值
  market: string[];                // 适用市场
  underlying?: string;             // 底层资产
  danger?: string;                 // 风险描述
  scenarios?: string;              // 应用场景
  reports: {
    research?: {                   // 调研报告
      exists: boolean;
      path?: string;
      url?: string;
    };
    analysis?: {                   // 分析报告
      exists: boolean;
      path?: string;
      url?: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

// 用户请求状态枚举
export enum RequestStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress", 
  COMPLETED = "completed",
  REJECTED = "rejected"
}

// 用户请求优先级枚举
export enum RequestPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high"
}

// 用户请求数据模型
export interface UserRequest {
  id: string;
  poolName: string;               // 收益池名称
  protocolName: string;           // 协议名称
  description: string;            // 请求描述
  userEmail?: string;             // 用户邮箱
  status: RequestStatus;          // 请求状态
  priority: RequestPriority;      // 优先级
  submittedAt: Date;
  processedAt?: Date;
  notes?: string;                 // 处理备注
}

// API响应类型
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 分页信息
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// 过滤器选项
export interface FilterOptions {
  chains: string[];
  risks: RiskLevel[];
  types: string[];
  tokens: string[];
  markets: string[];
  aprRange: {
    min: number;
    max: number;
  };
}

// 搜索和过滤参数
export interface SearchFilters {
  search?: string;
  chain?: string[];
  risk?: RiskLevel[];
  type?: string[];
  token?: string[];
  market?: string[];
  aprMin?: number;
  aprMax?: number;
  sortBy?: 'name' | 'apr' | 'risk' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

// Pool列表API响应
export interface PoolsResponse {
  pools: Pool[];
  total: number;
  page: number;
  limit: number;
  filters: FilterOptions;
}

// 报告元数据
export interface ReportMetadata {
  title: string;
  description: string;
  keywords: string[];
  lastModified: Date;
  fileSize: number;
  publishedDate?: Date;
  canonical?: string;
}

// 报告内容响应
export interface ReportResponse {
  content: string;
  metadata: ReportMetadata;
}

// SEO数据
export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    type: string;
    url: string;
    images: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}

// 缓存配置
export interface CacheConfig {
  staticMaxAge: number;
  apiMaxAge: number;
  pageMaxAge: number;
  memoryCache: {
    ttl: number;
    maxSize: number;
  };
}

// 错误响应格式
export interface ErrorResponse {
  error: string;           // 错误类型
  message: string;         // 用户友好的错误信息
  details?: any;          // 错误详情(开发环境)
  timestamp: string;       // 错误时间戳
  path: string;           // 请求路径
}

// Pool表格组件Props
export interface PoolTableProps {
  pools: Pool[];
  filters: FilterOptions;
  pagination: PaginationInfo;
  onFilterChange?: (filters: SearchFilters) => void;
  onPageChange?: (page: number) => void;
}

// 组件通用Props
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// 用于Markdown frontmatter解析的原始数据类型
export interface PoolFrontmatter {
  Protocol: string;
  Type: string;
  Chain: string | string[];
  Risk: RiskLevel;
  Token: string;
  'APR-Low': number;
  'APR-High': number;
  Market: string | string[];
  Underlying?: string;
  Danger?: string;
  Scenarios?: string;
}

// 协议基础信息
export interface Protocol {
  name: string;
  website: string;
  nickname: string;
  description?: string;
}

// 监控指标定义
export interface MonitoringMetrics {
  // 性能指标
  performance: {
    responseTime: number;      // 响应时间
    throughput: number;        // 吞吐量
    errorRate: number;         // 错误率
    uptime: number;           // 正常运行时间
  };
  
  // 资源指标
  resources: {
    cpuUsage: number;         // CPU使用率
    memoryUsage: number;      // 内存使用率
    diskUsage: number;        // 磁盘使用率
    networkIO: number;        // 网络IO
  };
  
  // 业务指标
  business: {
    dailyActiveUsers: number;  // 日活用户
    pageViews: number;        // 页面浏览量
    apiCalls: number;         // API调用次数
    errorRequests: number;    // 错误请求数
  };
}