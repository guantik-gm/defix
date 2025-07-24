// 风险等级枚举
export enum RiskLevel {
  LOW = "低风险",
  MEDIUM = "中风险", 
  HIGH = "高风险",
  VERY_HIGH = "极高风险"
}

// 协议数据模型
export interface Protocol {
  id: string;
  name: string;
  website: string;
  nickname: string;
  description?: string;
  reportPath?: string; // 调研报告路径
}

// Pool 收益池数据模型
export interface Pool {
  id: string;
  name: string;
  protocol: {
    name: string;
    website: string;
    nickname: string;
    description?: string;
  };
  type: string; // 收益池类型 (StableLP, Future, etc.)
  chain: string[]; // 所属链 (["Aptos", "Ethereum"])
  risk: RiskLevel; // 风险等级
  token: string; // Token 类型
  aprRange: {
    low: number; // 最低 APR
    high: number; // 最高 APR
  };
  market: string[]; // 适用市场
  underlying?: string; // 底层资产
  danger?: string; // 风险描述
  scenarios?: string; // 应用场景
  reports: {
    research?: {
      exists: boolean;
      path?: string;
      url?: string;
    };
    analysis?: {
      exists: boolean;
      path?: string;
      url?: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

// 用户请求数据模型
export interface UserRequest {
  id: string;
  poolName: string; // 收益池名称
  protocolName: string; // 协议名称
  description: string; // 请求描述
  userEmail?: string; // 用户邮箱
  status: RequestStatus; // 请求状态
  priority: RequestPriority; // 优先级
  submittedAt: Date;
  processedAt?: Date;
  notes?: string; // 处理备注
}

export enum RequestType {
  POOL_INCLUSION = "pool_inclusion",
  PROTOCOL_ANALYSIS = "protocol_analysis",
  DATA_CORRECTION = "data_correction",
  OTHER = "other"
}

export enum RequestStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress", 
  COMPLETED = "completed",
  REJECTED = "rejected"
}

export enum RequestPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high"
}

// 过滤器选项
export interface FilterOptions {
  chains: string[];
  risks: RiskLevel[];
  types: string[];
  tokens: string[];
  markets: string[];
  aprRange: { min: number; max: number };
}

// 分页信息
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// API响应类型
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 获取收益池列表的API响应
export interface PoolsResponse {
  pools: Pool[];
  total: number;
  page: number;
  limit: number;
  filters: FilterOptions;
}

// 搜索和过滤参数
export interface PoolsQuery {
  page?: number;
  limit?: number;
  search?: string; // 搜索关键词
  chain?: string[]; // 链过滤
  risk?: RiskLevel[]; // 风险等级过滤
  type?: string[]; // 类型过滤
  token?: string[]; // Token 过滤
  market?: string[]; // 市场过滤
  aprMin?: number; // 最低APR过滤
  aprMax?: number; // 最高APR过滤
  sortBy?: 'name' | 'apr' | 'risk' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

// 报告元数据
export interface ReportMetadata {
  title: string;
  lastModified: Date;
  fileSize: number;
  protocolName: string;
  nickname: string;
}

// SEO相关类型
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    type: string;
    url: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}

// 原始池文档结构（从markdown文件解析）
export interface RawPoolData {
  Protocol: string;
  Type: string;
  Chain: string | string[];
  Risk: string;
  Token: string;
  'APR-Low': number;
  'APR-High': number;
  Market: string | string[];
  Underlying?: string;
  Danger?: string;
  Remark?: string;
  Scenarios?: string;
}

// 原始协议文档结构（从markdown文件解析）
export interface RawProtocolData {
  Website: string;
  Nickname: string;
  Report: string;
  Description?: string;
}