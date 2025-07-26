# 部署运维指南

## 📋 概述

本文档提供 DeFi 收益池聚合系统的完整部署和运维指南，包括环境配置、数据库设置、部署流程和监控维护。

## 🚀 快速部署

### 环境要求
- **Node.js**: 18.0+ 
- **npm**: 8.0+
- **Git**: 用于代码管理
- **Supabase**: PostgreSQL 数据库服务

### 一键部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/defix-aggregator)

1. 点击上方按钮
2. 连接 GitHub 仓库
3. 配置环境变量
4. 部署完成

## 🔧 环境配置

### 1. 克隆项目

```bash
git clone https://github.com/your-username/defix-aggregator.git
cd defix-aggregator
```

### 2. 安装依赖

```bash
npm install
```

### 3. 环境变量配置

复制环境变量模板：
```bash
cp .env.example .env.local
```

配置 `.env.local`：
```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# 站点配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# 可选配置
ANALYZE=false
NODE_ENV=production
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

## 🗄️ 数据库配置 (Supabase)

### 1. 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com/) 并注册
2. 创建新项目：
   - Project Name: `defix-aggregator`
   - Database Password: 设置强密码
   - Region: 选择合适的区域

### 2. 获取配置信息

在项目仪表板 → Settings → API 中获取：
- **Project URL**: `NEXT_PUBLIC_SUPABASE_URL`
- **Anon Public Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. 创建数据表

在 SQL Editor 中执行：

```sql
-- 创建用户请求表
CREATE TABLE user_requests (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL DEFAULT 'pool_inclusion',
  pool_name TEXT NOT NULL,
  protocol_name TEXT NOT NULL,
  official_website TEXT NOT NULL,
  chain TEXT[] NOT NULL,
  description TEXT NOT NULL,
  user_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  priority TEXT NOT NULL DEFAULT 'medium',
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  processed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- 创建索引
CREATE INDEX idx_user_requests_status ON user_requests(status);
CREATE INDEX idx_user_requests_submitted_at ON user_requests(submitted_at DESC);
CREATE INDEX idx_user_requests_type ON user_requests(type);

-- 设置 RLS (Row Level Security)
ALTER TABLE user_requests ENABLE ROW LEVEL SECURITY;

-- 创建策略：允许插入请求
CREATE POLICY "Enable insert for all users" ON user_requests FOR INSERT WITH CHECK (true);

-- 创建策略：只允许查看自己的请求
CREATE POLICY "Enable read for users based on email" ON user_requests FOR SELECT USING (auth.jwt() ->> 'email' = user_email);
```

### 4. 配置存储策略（可选）

如需文件上传功能：

```sql
-- 创建存储桶
INSERT INTO storage.buckets (id, name, public) VALUES ('reports', 'reports', true);

-- 创建存储策略
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'reports');
CREATE POLICY "Enable upload for authenticated users" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'reports');
```

## 🌐 部署到 Vercel

### 1. 连接 GitHub

1. 在 [Vercel Dashboard](https://vercel.com/dashboard) 中
2. 点击 "New Project"
3. 选择 GitHub 仓库
4. 导入项目

### 2. 配置环境变量

在 Vercel 项目设置中添加：

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 3. 配置构建设置

**Framework Preset**: Next.js  
**Node.js Version**: 18.x  
**Build Command**: `npm run build`  
**Output Directory**: `.next`  

### 4. 域名配置

1. 在 Vercel 项目设置 → Domains
2. 添加自定义域名
3. 配置 DNS 记录
4. 启用 HTTPS

### 5. 部署验证

检查部署状态：
- ✅ 构建成功
- ✅ 部署完成
- ✅ 站点可访问
- ✅ API 端点正常
- ✅ 数据库连接正常

## 🔄 CI/CD 配置

### GitHub Actions 工作流

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run type check
      run: npm run type-check
    
    - name: Run linting
      run: npm run lint
    
    - name: Run tests
      run: npm run test
    
    - name: Build application
      run: npm run build
      env:
        NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
        NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
        NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}
```

### 环境分支策略

**分支配置**:
- `main` → 生产环境
- `staging` → 预发布环境  
- `develop` → 开发环境

**Vercel 预览部署**:
- 每个 PR 自动创建预览部署
- 独立的环境变量配置
- 自动清理过期部署

## 📊 监控与维护

### 1. 应用监控

**Vercel 内置监控**:
- 访问 Vercel Dashboard → Analytics
- 监控页面访问量、性能指标
- 查看函数执行时间和错误率

**关键指标**:
- **响应时间**: < 2s
- **可用性**: > 99.9%
- **错误率**: < 1%
- **构建时间**: < 3min

### 2. 数据库监控

**Supabase 监控**:
- 数据库连接数
- 查询性能
- 存储使用量
- API 请求量

**监控脚本** (scripts/health-check.js):
```javascript
const { supabase } = require('../lib/supabase');

async function healthCheck() {
  try {
    // 检查数据库连接
    const { data, error } = await supabase
      .from('user_requests')
      .select('count', { count: 'exact', head: true });
    
    if (error) throw error;
    
    console.log('✅ Database connection OK');
    console.log(`📊 Total requests: ${data}`);
    
    // 检查 API 端点
    const response = await fetch('https://your-domain.com/api/pools');
    if (!response.ok) throw new Error('API endpoint failed');
    
    console.log('✅ API endpoints OK');
    
  } catch (error) {
    console.error('❌ Health check failed:', error);
    process.exit(1);
  }
}

healthCheck();
```

### 3. 日志管理

**Vercel 函数日志**:
```javascript
// 统一日志格式
export function apiLogger(req, res, next) {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
  });
  
  next();
}
```

**错误日志收集**:
```javascript
// lib/error-tracking.js
export function trackError(error, context = {}) {
  const errorData = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    context,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
  };
  
  console.error('Error tracked:', errorData);
  
  // 可集成外部错误追踪服务
  // 如 Sentry, LogRocket 等
}
```

### 4. 性能优化

**图片优化**:
- 使用 Next.js Image 组件
- 启用 WebP 格式
- 配置 CDN 缓存

**代码分割**:
```javascript
// 动态导入组件
const PoolDetailDialog = lazy(() => import('./PoolDetailDialog'));

// 条件加载
if (typeof window !== 'undefined') {
  import('./client-only-module');
}
```

**缓存策略**:
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=300, stale-while-revalidate=600'
          }
        ]
      }
    ];
  }
};
```

## 🛡️ 安全配置

### 1. 环境变量安全

**敏感信息处理**:
- 使用 Vercel Environment Variables
- 生产环境独立配置
- 定期轮换 API 密钥

**验证示例**:
```javascript
// lib/config.js
export const config = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
};

// 启动时验证
if (!config.supabase.url || !config.supabase.key) {
  throw new Error('Missing required environment variables');
}
```

### 2. API 安全

**速率限制**:
```javascript
// lib/rate-limit.js
const rateLimit = new Map();

export function checkRateLimit(ip, limit = 10, window = 60000) {
  const now = Date.now();
  const requests = rateLimit.get(ip) || [];
  
  // 清理过期请求
  const validRequests = requests.filter(time => now - time < window);
  
  if (validRequests.length >= limit) {
    return { success: false, message: 'Rate limit exceeded' };
  }
  
  validRequests.push(now);
  rateLimit.set(ip, validRequests);
  
  return { success: true };
}
```

**输入验证**:
```javascript
// lib/validation.js
export function validateRequestData(data) {
  const schema = {
    poolName: { required: true, type: 'string', maxLength: 100 },
    protocolName: { required: true, type: 'string', maxLength: 100 },
    officialWebsite: { required: true, type: 'url' },
    userEmail: { required: true, type: 'email' },
  };
  
  return validateSchema(data, schema);
}
```

## 🔄 更新与维护

### 1. 依赖管理

**安全更新**:
```bash
# 检查过期依赖
npm audit

# 自动修复安全漏洞
npm audit fix

# 更新依赖
npm update
```

**依赖监控**:
- 使用 Dependabot 自动 PR
- 定期审查依赖更新
- 测试后合并更新

### 2. 数据维护

**定期任务**:
```sql
-- 清理过期请求（30天前）
DELETE FROM user_requests 
WHERE submitted_at < NOW() - INTERVAL '30 days' 
AND status = 'completed';

-- 数据统计
SELECT 
  status,
  COUNT(*) as count,
  DATE_TRUNC('day', submitted_at) as date
FROM user_requests 
WHERE submitted_at > NOW() - INTERVAL '7 days'
GROUP BY status, DATE_TRUNC('day', submitted_at)
ORDER BY date DESC;
```

### 3. 备份策略

**Supabase 自动备份**:
- 每日自动快照
- 7天保留期
- 一键恢复功能

**代码备份**:
- GitHub 自动备份
- 分支保护策略
- Tag 版本管理

## 📋 故障排除

### 常见问题

**1. 构建失败**
```bash
# 检查 Node.js 版本
node --version

# 清理缓存
npm ci

# 检查环境变量
echo $NEXT_PUBLIC_SUPABASE_URL
```

**2. 数据库连接失败**
```javascript
// 测试连接
const { supabase } = require('./lib/supabase');

async function testConnection() {
  const { data, error } = await supabase.from('user_requests').select('count');
  console.log('Connection test:', { data, error });
}
```

**3. API 超时**
```javascript
// 增加超时时间
export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  maxDuration: 10, // Vercel Pro 功能
};
```

### 应急处理

**回滚部署**:
1. 访问 Vercel Dashboard
2. 选择之前的成功部署
3. 点击 "Promote to Production"

**数据库恢复**:
1. 访问 Supabase Dashboard
2. 选择备份时间点
3. 执行恢复操作

---

**文档版本**: v2.0.0  
**最后更新**: 2025-01-25  
**维护者**: Claude Code Assistant