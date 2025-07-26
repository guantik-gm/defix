# API 接口文档

## 📋 概述

DeFi 收益池聚合平台 API 提供完整的数据访问和管理功能，包括收益池数据查询、用户请求处理和管理后台支持。

## 🔗 基础信息

- **Base URL**: `https://your-domain.com/api`
- **认证方式**: 无需认证 (公开 API) / 简单密码 (管理功能)
- **数据格式**: JSON
- **字符编码**: UTF-8

## 📊 收益池数据 API

### GET /api/pools

获取收益池列表数据，支持分页、搜索和多维度筛选。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `page` | number | 否 | 页码，默认 1 | `1` |
| `limit` | number | 否 | 每页数量，默认 20 | `20` |
| `search` | string | 否 | 搜索关键词 | `Uniswap` |
| `chain[]` | string[] | 否 | 区块链筛选 | `["Ethereum", "BSC"]` |
| `risk[]` | string[] | 否 | 风险等级筛选 | `["低风险", "中风险"]` |
| `type[]` | string[] | 否 | 收益池类型筛选 | `["StableLP", "Leverage"]` |
| `token[]` | string[] | 否 | 代币类型筛选 | `["USDT", "BTC"]` |
| `market[]` | string[] | 否 | 适用市场筛选 | `["通用", "专业"]` |
| `aprMin` | number | 否 | 最低 APR | `0.1` |
| `aprMax` | number | 否 | 最高 APR | `0.5` |
| `sorts[]` | object[] | 否 | 排序配置 | `[{"field": "apr-high", "order": "desc"}]` |

#### 排序字段

| 字段 | 说明 |
|------|------|
| `apr-high` | 按最高 APR 排序 |
| `apr-low` | 按最低 APR 排序 |
| `risk` | 按风险等级排序 |

#### 响应示例

```json
{
  "success": true,
  "data": {
    "pools": [
      {
        "id": "uniswap-usdt-stable",
        "name": "USDT Stable Pool",
        "protocol": {
          "name": "Uniswap",
          "website": "https://uniswap.org",
          "nickname": "uniswap",
          "description": "去中心化交易协议"
        },
        "type": "StableLP",
        "chain": ["Ethereum", "Arbitrum"],
        "risk": "中风险",
        "token": "USDT",
        "aprRange": {
          "low": 0.12,
          "high": 0.25
        },
        "market": ["通用"],
        "underlying": "<p>底层收益机制描述</p>",
        "danger": "<p>风险提示信息</p>",
        "scenarios": "<p>适用场景说明</p>",
        "remark": "<p>备注信息</p>",
        "reports": {
          "research": {
            "exists": true,
            "path": "/reports/research/uniswap",
            "url": "/reports/research/uniswap"
          },
          "analysis": {
            "exists": false
          }
        },
        "createdAt": "2025-07-26T10:00:00Z",
        "updatedAt": "2025-07-26T10:00:00Z"
      }
    ],
    "total": 150,
    "page": 1,
    "limit": 20,
    "filters": {
      "chains": ["Ethereum", "BSC", "Arbitrum"],
      "risks": ["低风险", "中风险", "高风险"],
      "types": ["StableLP", "Leverage", "Staking"],
      "tokens": ["USDT", "BTC", "ETH"],
      "markets": ["通用", "专业"],
      "aprRange": { "min": 0.01, "max": 2.0 }
    }
  }
}
```

### GET /api/pool-content

获取收益池文件的非结构化内容，用于详情页面展示。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `fileName` | string | 是 | 收益池文件名 | `Uniswap USDT StableLP.md` |

#### 响应示例

```
Content-Type: text/plain

## 协议详细介绍

Uniswap 是以太坊上最大的去中心化交易协议...

## 投资建议

适合稳健型投资者，建议配置不超过 20% 的资金...
```

### GET /api/filters

获取所有可用的筛选器选项。

#### 响应示例

```json
{
  "chains": ["Ethereum", "BSC", "Arbitrum", "Polygon"],
  "risks": ["低风险", "中风险", "高风险", "极高风险"],
  "types": ["StableLP", "Leverage", "Staking", "Future"],
  "tokens": ["USDT", "BTC", "ETH", "BNB"],
  "markets": ["通用", "专业", "新手"],
  "aprRange": { "min": 0.01, "max": 2.5 }
}
```

## 📝 用户请求 API

### POST /api/requests

提交用户请求，支持协议收录、数据纠错和其他反馈。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `type` | string | 是 | 请求类型 | `protocol_inclusion` |
| `protocolName` | string | 条件 | 协议名称 (协议收录时必填) | `Pancake` |
| `officialWebsite` | string | 条件 | 官方网站 (协议收录时必填) | `https://pancakeswap.finance` |
| `contactEmail` | string | 是 | 联系邮箱 | `user@example.com` |
| `description` | string | 条件 | 问题描述 (纠错/反馈时必填) | `数据有误，建议修正...` |

#### 请求类型

| 值 | 说明 | 必填字段 |
|---|------|----------|
| `protocol_inclusion` | 协议收录 | `protocolName`, `officialWebsite`, `contactEmail` |
| `data_correction` | 数据纠错 | `contactEmail`, `description` |
| `other_feedback` | 其他反馈 | `contactEmail`, `description` |

#### 请求示例

```json
{
  "type": "protocol_inclusion",
  "protocolName": "PancakeSwap",
  "officialWebsite": "https://pancakeswap.finance",
  "contactEmail": "user@example.com"
}
```

#### 响应示例

```json
{
  "success": true,
  "data": {
    "requestId": "550e8400-e29b-41d4-a716-446655440000",
    "type": "protocol_inclusion"
  },
  "message": "协议收录请求提交成功，我们将在3-7个工作日内进行评估"
}
```

## 🛠️ 管理后台 API

### GET /api/requests

获取所有用户请求列表，用于管理后台。

#### 权限要求
- 管理员访问
- 需要 Supabase 配置

#### 响应示例

```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "type": "protocol_inclusion",
      "protocol_name": "PancakeSwap",
      "official_website": "https://pancakeswap.finance",
      "contact_email": "user@example.com",
      "description": null,
      "status": "pending",
      "created_at": "2025-07-26T10:00:00Z",
      "updated_at": "2025-07-26T10:00:00Z"
    }
  ]
}
```

### PATCH /api/requests

更新请求状态，用于管理后台处理流程。

#### 权限要求
- 管理员访问
- 需要 Supabase 配置

#### 请求参数

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `id` | string | 是 | 请求 ID | `550e8400-e29b-41d4-a716-446655440000` |
| `status` | string | 是 | 新状态 | `approved` |

#### 状态值

| 值 | 说明 |
|---|------|
| `pending` | 待处理 |
| `in_review` | 审核中 |
| `approved` | 已通过 |
| `rejected` | 已拒绝 |

#### 请求示例

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "approved"
}
```

#### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "approved",
    "updated_at": "2025-07-26T10:30:00Z"
  },
  "message": "状态更新成功"
}
```

## 📑 报告系统 API

### GET /reports/research/[slug]

获取调研报告页面，动态路由渲染 Markdown 内容。

#### 参数说明

| 参数 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `slug` | string | 协议简称 | `uniswap` |

#### 响应
返回渲染后的 HTML 页面，包含报告内容和元数据。

### GET /reports/analysis/[slug]

获取分析报告，直接服务静态 HTML 文件。

#### 参数说明

| 参数 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `slug` | string | 协议简称 | `uniswap` |

#### 响应
返回分析报告的 HTML 内容。

### GET /api/reports/analysis/[slug]/raw

获取分析报告的原始 HTML 内容。

#### 响应示例

```html
<!DOCTYPE html>
<html>
<head>
    <title>Uniswap 分析报告</title>
</head>
<body>
    <h1>Uniswap 协议分析</h1>
    <p>报告内容...</p>
</body>
</html>
```

## 🔧 数据模型

### Pool 收益池模型

```typescript
interface Pool {
  id: string;                    // 唯一标识符
  name: string;                  // 收益池名称
  protocol: {                    // 协议信息
    name: string;                // 协议名称
    website: string;             // 官方网站
    nickname: string;            // 协议简称
    description?: string;        // 协议描述
  };
  type: string;                  // 收益池类型
  chain: string[];               // 支持的区块链
  risk: RiskLevel;               // 风险等级
  token: string;                 // 主要代币
  aprRange: {                    // APR 范围
    low: number;                 // 最低 APR
    high: number;                // 最高 APR
  };
  market: string[];              // 适用市场
  underlying?: string;           // 底层机制 (HTML)
  danger?: string;               // 风险提示 (HTML)
  scenarios?: string;            // 适用场景 (HTML)
  remark?: string;               // 备注信息 (HTML)
  reports: {                     // 报告信息
    research?: ReportInfo;       // 调研报告
    analysis?: ReportInfo;       // 分析报告
  };
  createdAt: Date;               // 创建时间
  updatedAt: Date;               // 更新时间
}
```

### SubmissionRequest 用户请求模型

```typescript
interface SubmissionRequest {
  id: string;                           // 请求 ID
  type: RequestType;                    // 请求类型
  protocol_name?: string;               // 协议名称
  official_website?: string;            // 官方网站
  contact_email: string;                // 联系邮箱
  description?: string;                 // 问题描述
  status: RequestStatus;                // 处理状态
  created_at: string;                   // 创建时间
  updated_at: string;                   // 更新时间
}
```

### 枚举类型

```typescript
enum RequestType {
  PROTOCOL_INCLUSION = "protocol_inclusion",
  DATA_CORRECTION = "data_correction", 
  OTHER_FEEDBACK = "other_feedback"
}

enum RequestStatus {
  PENDING = "pending",
  IN_REVIEW = "in_review",
  APPROVED = "approved",
  REJECTED = "rejected"
}

enum RiskLevel {
  LOW = "低风险",
  MEDIUM = "中风险",
  HIGH = "高风险",
  VERY_HIGH = "极高风险"
}
```

## ⚠️ 错误处理

### 标准错误响应

```json
{
  "success": false,
  "error": "error_type",
  "message": "用户友好的错误描述"
}
```

### 错误类型

| 错误类型 | HTTP状态码 | 说明 |
|----------|------------|------|
| `validation_error` | 400 | 请求参数验证失败 |
| `not_found` | 404 | 资源不存在 |
| `configuration_error` | 503 | 系统配置错误 |
| `database_error` | 500 | 数据库操作失败 |
| `internal_server_error` | 500 | 服务器内部错误 |

### 常见错误示例

```json
{
  "success": false,
  "error": "validation_error",
  "message": "请填写所有必填字段"
}
```

```json
{
  "success": false,
  "error": "configuration_error", 
  "message": "Supabase数据库未配置，暂时无法提交请求"
}
```

## 🔄 API 版本控制

当前版本：`v1.0`

### 版本历史

| 版本 | 发布日期 | 主要变化 |
|------|----------|----------|
| v1.0 | 2025-07-26 | 初始版本，包含完整的 CRUD 功能 |

## 📈 使用限制

### 速率限制
- 收益池 API：无限制
- 用户请求 API：每 IP 每小时 10 次
- 管理 API：管理员无限制

### 数据限制
- 分页最大数量：100 条/页
- 搜索关键词长度：最大 100 字符
- 描述字段长度：最大 2000 字符

## 🛡️ 安全注意事项

### 数据保护
- 所有 API 支持 HTTPS
- 用户邮箱信息加密存储
- 敏感操作需要管理员权限

### 输入验证
- 所有输入参数进行严格验证
- 防止 SQL 注入和 XSS 攻击
- URL 格式验证和域名白名单

---

**文档版本**: v1.0.0  
**最后更新**: 2025-07-26  
**适用版本**: DeFi Platform v2.2.0+