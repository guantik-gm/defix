# API 接口文档

## 📋 概述

DeFi 收益池聚合系统 API 提供收益池数据查询、过滤器选项、用户请求提交等功能。所有 API 均基于 RESTful 设计，支持 JSON 格式数据交换。

## 🌐 基础信息

**Base URL**: `https://your-domain.com/api`  
**Content-Type**: `application/json`  
**编码**: UTF-8

## 🔍 收益池数据 API

### 获取收益池列表

获取收益池数据，支持分页、筛选、排序功能。

```
GET /api/pools
```

#### 查询参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `page` | number | 1 | 页码，从1开始 |
| `limit` | number | 20 | 每页数量，最大100 |
| `search` | string | - | 搜索关键词（池名称、协议名称） |
| `chain[]` | string[] | - | 区块链过滤，支持多选 |
| `risk[]` | string[] | - | 风险等级过滤，支持多选 |
| `type[]` | string[] | - | 收益池类型过滤，支持多选 |
| `token[]` | string[] | - | Token 类型过滤，支持多选 |
| `market[]` | string[] | - | 适用市场过滤，支持多选 |
| `aprMin` | number | - | 最低 APR 过滤 |
| `aprMax` | number | - | 最高 APR 过滤 |
| `sorts[]` | string[] | - | 排序字段，格式：`field:order` |

#### 支持的排序字段

| 字段 | 描述 | 示例 |
|------|------|------|
| `apr-high` | 按最高 APR 排序 | `apr-high:desc` |
| `apr-low` | 按最低 APR 排序 | `apr-low:asc` |
| `risk` | 按风险等级排序 | `risk:asc` |
| `name` | 按池名称排序 | `name:asc` |
| `protocol` | 按协议名称排序 | `protocol:asc` |

#### 请求示例

```bash
# 基础查询
curl "https://your-domain.com/api/pools?page=1&limit=10"

# 筛选查询
curl "https://your-domain.com/api/pools?chain[]=Ethereum&chain[]=Arbitrum&risk[]=中风险"

# 搜索查询
curl "https://your-domain.com/api/pools?search=Uniswap&aprMin=0.1"

# 排序查询
curl "https://your-domain.com/api/pools?sorts[]=apr-high:desc&sorts[]=risk:asc"
```

#### 响应格式

```json
{
  "success": true,
  "data": {
    "pools": [
      {
        "id": "pool-id",
        "name": "Uniswap V3 USDC/ETH",
        "protocol": {
          "name": "Uniswap",
          "website": "https://uniswap.org",
          "nickname": "uniswap",
          "description": "去中心化交易协议"
        },
        "type": "LP",
        "chain": ["Ethereum", "Arbitrum"],
        "risk": "中风险",
        "token": "USDC",
        "aprRange": {
          "low": 0.15,
          "high": 0.35
        },
        "market": ["DeFi", "流动性挖矿"],
        "underlying": "交易手续费收益",
        "danger": "无常损失风险",
        "scenarios": "稳定币对交易",
        "reports": {
          "research": {
            "exists": true,
            "path": "web3/protocol/research/uniswap.md",
            "url": "/reports/research/uniswap"
          },
          "analysis": {
            "exists": true,
            "path": "web3/protocol/research/uniswap.html", 
            "url": "/reports/analysis/uniswap"
          }
        },
        "createdAt": "2025-01-15T00:00:00.000Z",
        "updatedAt": "2025-01-20T00:00:00.000Z"
      }
    ],
    "total": 64,
    "page": 1,
    "limit": 20,
    "totalPages": 4,
    "filters": {
      "chains": ["Ethereum", "Arbitrum", "Sui", "Solana"],
      "risks": ["低风险", "中风险", "高风险", "极高风险"],
      "types": ["LP", "StableLP", "Leverage", "Staking"],
      "tokens": ["USDC", "USDT", "ETH", "BTC"],
      "markets": ["DeFi", "CeFi", "流动性挖矿"],
      "aprRange": { "min": 0.01, "max": 2.5 }
    }
  }
}
```

#### 错误响应

```json
{
  "success": false,
  "error": "Invalid page parameter",
  "message": "页码必须为正整数"
}
```

### 获取收益池文件内容

获取特定收益池的文件正文内容，用于详情弹窗显示。

```
GET /api/pool-content
```

#### 查询参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| `fileName` | string | ✅ | 收益池文件名，格式：`协议名 类型.md` |

#### 请求示例

```bash
curl "https://your-domain.com/api/pool-content?fileName=Uniswap%20LP.md"
```

#### 响应格式

**成功响应** (Content-Type: text/plain):
```
Uniswap V3 是基于自动化做市商（AMM）的去中心化交易协议...

## 收益来源
- 交易手续费：0.05% - 1%
- 流动性挖矿奖励：UNI 代币

## 风险分析
无常损失是主要风险，当资产价格比例发生变化时会产生损失...
```

**错误响应** (Content-Type: application/json):
```json
{
  "error": "未找到对应的收益池文件"
}
```

## 🔧 过滤器选项 API

### 获取过滤器选项

获取所有可用的过滤器选项，用于前端筛选器组件。

```
GET /api/filters
```

#### 响应格式

```json
{
  "chains": [
    "Ethereum",
    "Arbitrum", 
    "Sui",
    "Solana",
    "BSC",
    "Polygon"
  ],
  "risks": [
    "低风险",
    "中风险", 
    "高风险",
    "极高风险"
  ],
  "types": [
    "LP",
    "StableLP",
    "Leverage",
    "Staking",
    "Lending"
  ],
  "tokens": [
    "USDC",
    "USDT",
    "ETH",
    "BTC",
    "SOL"
  ],
  "markets": [
    "通用",
    "DeFi",
    "CeFi",
    "流动性挖矿",
    "借贷"
  ],
  "aprRange": {
    "min": 0.01,
    "max": 2.5
  }
}
```

## 📝 用户请求 API

### 提交收录请求

用户提交收益池或协议收录请求。

```
POST /api/requests
```

#### 请求体

```json
{
  "type": "pool_inclusion",
  "poolName": "新收益池名称",
  "protocolName": "协议名称", 
  "officialWebsite": "https://protocol.com",
  "chain": ["Ethereum", "Arbitrum"],
  "description": "详细描述收益池特点和优势",
  "userEmail": "user@example.com"
}
```

#### 字段说明

| 字段 | 类型 | 必填 | 描述 |
|------|------|------|------|
| `type` | string | ❌ | 请求类型，默认 `pool_inclusion` |
| `poolName` | string | ✅ | 收益池名称，最大100字符 |
| `protocolName` | string | ✅ | 协议名称，最大100字符 |
| `officialWebsite` | string | ✅ | 官方网站，必须为有效URL |
| `chain` | string[] | ✅ | 支持的区块链列表 |
| `description` | string | ✅ | 详细描述，最大1000字符 |
| `userEmail` | string | ✅ | 用户邮箱，用于反馈 |

#### 请求示例

```bash
curl -X POST "https://your-domain.com/api/requests" \
  -H "Content-Type: application/json" \
  -d '{
    "poolName": "Curve 3Pool",
    "protocolName": "Curve Finance",
    "officialWebsite": "https://curve.fi",
    "chain": ["Ethereum"],
    "description": "稳定币流动性池，低风险稳定收益",
    "userEmail": "user@example.com"
  }'
```

#### 响应格式

**成功响应**:
```json
{
  "success": true,
  "message": "提交成功！我们会尽快处理您的请求。",
  "requestId": "req_abc123def456"
}
```

**验证错误**:
```json
{
  "success": false,
  "message": "数据验证失败",
  "errors": [
    {
      "field": "userEmail",
      "message": "邮箱格式无效"
    },
    {
      "field": "officialWebsite", 
      "message": "网站URL格式无效"
    }
  ]
}
```

**服务错误**:
```json
{
  "success": false,
  "message": "数据库未配置，请联系管理员"
}
```

### 获取请求状态

获取用户提交请求的处理状态。

```
GET /api/requests
```

#### 查询参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| `email` | string | ✅ | 用户邮箱 |
| `status` | string | ❌ | 状态过滤：pending, in_progress, completed, rejected |

#### 响应格式

```json
{
  "success": true,
  "data": [
    {
      "id": "req_abc123def456",
      "type": "pool_inclusion",
      "poolName": "Curve 3Pool",
      "protocolName": "Curve Finance",
      "status": "pending",
      "priority": "medium",
      "submittedAt": "2025-01-20T10:30:00Z",
      "notes": null
    }
  ]
}
```

## 📄 报告系统 API

### 调研报告

获取协议调研报告页面。

```
GET /reports/research/[slug]
```

#### 路径参数

| 参数 | 类型 | 描述 |
|------|------|------|
| `slug` | string | 协议标识符，如 `uniswap` |

#### 响应

返回渲染后的 HTML 页面，包含：
- 协议基本信息
- 技术分析
- 风险评估
- 投资建议

### 分析报告

获取协议分析报告的原始 HTML 文件。

```
GET /reports/analysis/[slug]
```

#### 路径参数

| 参数 | 类型 | 描述 |
|------|------|------|
| `slug` | string | 协议标识符，如 `uniswap` |

#### 响应

返回原始 HTML 文件 (Content-Type: text/html)，保持完整的交互功能。

### 获取原始报告内容

获取分析报告的原始 HTML 内容。

```
GET /api/reports/analysis/[slug]/raw
```

#### 响应格式

```json
{
  "success": true,
  "data": {
    "slug": "uniswap",
    "title": "Uniswap 协议分析报告",
    "htmlContent": "<!DOCTYPE html><html>...</html>",
    "lastModified": "2025-01-20T10:30:00Z"
  }
}
```

## 🔒 错误处理

### HTTP 状态码

| 状态码 | 描述 |
|--------|------|
| 200 | 请求成功 |
| 400 | 请求参数错误 |
| 404 | 资源不存在 |
| 429 | 请求频率超限 |
| 500 | 服务器内部错误 |
| 503 | 服务不可用 |

### 错误响应格式

```json
{
  "success": false,
  "error": "ERROR_CODE",
  "message": "用户友好的错误描述",
  "details": {
    "field": "具体错误字段",
    "code": "VALIDATION_ERROR"
  }
}
```

### 常见错误码

| 错误码 | 描述 |
|--------|------|
| `INVALID_PARAMETERS` | 请求参数无效 |
| `VALIDATION_ERROR` | 数据验证失败 |
| `RESOURCE_NOT_FOUND` | 资源未找到 |
| `RATE_LIMIT_EXCEEDED` | 频率限制超出 |
| `DATABASE_ERROR` | 数据库操作失败 |
| `SERVICE_UNAVAILABLE` | 服务不可用 |

## 🚀 性能和限制

### API 限制

| 项目 | 限制 |
|------|------|
| 请求频率 | 100 requests/minute |
| 响应大小 | 最大 4MB |
| 超时时间 | 30 秒 |
| 分页大小 | 最大 100 条/页 |

### 缓存策略

| 端点 | 缓存时间 | 策略 |
|------|---------|------|
| `/api/pools` | 5 分钟 | 服务端缓存 |
| `/api/filters` | 30 分钟 | 服务端缓存 |
| `/api/pool-content` | 24 小时 | CDN 缓存 |
| 报告页面 | 1 小时 | 静态生成 |

### 性能优化建议

1. **使用分页**: 避免一次请求大量数据
2. **合理筛选**: 使用过滤参数减少数据量
3. **缓存响应**: 前端适当缓存 API 响应
4. **批量请求**: 合并多个相关请求

## 📊 API 使用示例

### JavaScript/TypeScript

```typescript
// 获取收益池数据
async function fetchPools(filters: PoolFilters) {
  const params = new URLSearchParams();
  
  if (filters.search) params.append('search', filters.search);
  if (filters.chain) filters.chain.forEach(c => params.append('chain[]', c));
  if (filters.page) params.append('page', filters.page.toString());
  
  const response = await fetch(`/api/pools?${params}`);
  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.message);
  }
  
  return data.data;
}

// 提交用户请求
async function submitRequest(requestData: UserRequest) {
  const response = await fetch('/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.message);
  }
  
  return result;
}
```

### Python

```python
import requests

# 获取收益池数据
def fetch_pools(page=1, limit=20, **filters):
    params = {'page': page, 'limit': limit}
    params.update(filters)
    
    response = requests.get('https://your-domain.com/api/pools', params=params)
    data = response.json()
    
    if not data['success']:
        raise Exception(data['message'])
    
    return data['data']

# 提交用户请求
def submit_request(request_data):
    response = requests.post(
        'https://your-domain.com/api/requests',
        json=request_data
    )
    
    result = response.json()
    
    if not result['success']:
        raise Exception(result['message'])
    
    return result
```

## 📝 更新日志

### v2.0.0 (2025-01-25)
- ✅ 完整的 API 文档
- ✅ 新增收益池详情内容 API
- ✅ 优化错误处理和状态码
- ✅ 增加性能指标和缓存策略

### v1.1.0 (2025-01-24) 
- ✅ 多字段排序支持
- ✅ 增强过滤器功能
- ✅ 用户请求状态查询

---

**文档版本**: v2.0.0  
**最后更新**: 2025-01-25  
**维护者**: Claude Code Assistant