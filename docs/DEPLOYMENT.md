# 部署和配置指南

## 📋 概述

本指南详细说明了 DeFi 收益池聚合平台的部署流程、环境配置和管理后台设置，帮助开发者快速搭建完整的系统环境。

## 🛠️ 系统要求

### 运行环境
- **Node.js**: 18.17+ 或 20.5+
- **npm**: 9.0+ 或 **yarn**: 1.22+
- **数据库**: Supabase PostgreSQL
- **部署平台**: Vercel (推荐) 或其他 Next.js 兼容平台

### 开发工具
- **IDE**: VS Code (推荐)
- **Git**: 版本控制
- **浏览器**: Chrome/Firefox/Safari 现代浏览器

## 🚀 快速部署

### 1. 获取源码

```bash
# 克隆仓库
git clone https://github.com/your-username/defix.git
cd defix

# 安装依赖
npm install
# 或
yarn install
```

### 2. 环境配置

创建环境变量文件：

```bash
# 复制环境模板
cp .env.example .env.local
```

编辑 `.env.local` 文件：

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# 站点配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics (可选)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_code
```

### 3. 数据库设置

#### 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com)
2. 创建新项目
3. 获取项目 URL 和 anon key
4. 更新 `.env.local` 配置

#### 执行数据库迁移

```bash
# 在 Supabase SQL 编辑器中执行
cat supabase-schema.sql
```

或在项目根目录执行：

```sql
-- 创建请求表
CREATE TABLE pool_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type VARCHAR(50) NOT NULL CHECK (type IN ('protocol_inclusion', 'data_correction', 'other_feedback')),
  protocol_name VARCHAR(255),
  official_website TEXT,
  contact_email VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_review', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX idx_pool_requests_type ON pool_requests(type);
CREATE INDEX idx_pool_requests_status ON pool_requests(status);
CREATE INDEX idx_pool_requests_created_at ON pool_requests(created_at);

-- 启用行级安全策略
ALTER TABLE pool_requests ENABLE ROW LEVEL SECURITY;

-- 创建访问策略
CREATE POLICY "Allow insert requests" ON pool_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select requests" ON pool_requests FOR SELECT USING (true);
CREATE POLICY "Allow update requests" ON pool_requests FOR UPDATE USING (true);
```

### 4. 本地开发

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev
```

访问 `http://localhost:3000` 查看应用。

### 5. 生产部署

#### Vercel 部署 (推荐)

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署到 Vercel
vercel --prod
```

#### 环境变量配置

在 Vercel 项目设置中添加环境变量：

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`

## 🔧 详细配置

### Supabase 配置

#### 1. 创建项目

1. 登录 [Supabase Dashboard](https://app.supabase.com)
2. 点击 "New project"
3. 选择组织和设置项目名称
4. 设置数据库密码
5. 选择地区 (建议选择离用户最近的地区)

#### 2. 获取连接信息

在项目设置中找到：
- **Project URL**: `https://[project-id].supabase.co`
- **API Keys**: 
  - `anon/public`: 用于客户端访问
  - `service_role`: 用于服务端访问 (暂未使用)

#### 3. 配置数据库

```sql
-- 创建触发器自动更新时间戳
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_pool_requests_updated_at 
BEFORE UPDATE ON pool_requests 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

#### 4. 安全策略配置

```sql
-- 更严格的安全策略 (生产环境)
DROP POLICY IF EXISTS "Allow select requests" ON pool_requests;
DROP POLICY IF EXISTS "Allow update requests" ON pool_requests;

-- 只允许读取和插入，更新需要管理员权限
CREATE POLICY "Public read access" ON pool_requests FOR SELECT USING (true);
CREATE POLICY "Public insert access" ON pool_requests FOR INSERT WITH CHECK (true);

-- 管理员更新策略 (需要进一步实现认证)
-- CREATE POLICY "Admin update access" ON pool_requests FOR UPDATE USING (auth.jwt() ->> 'role' = 'admin');
```

### 管理后台配置

#### 1. 管理员密码设置

编辑 `app/admin/layout.tsx`：

```typescript
// 修改管理员密码
const ADMIN_PASSWORD = 'your_secure_password_here';
```

**生产环境建议**：
- 使用环境变量存储密码
- 实施更安全的认证机制
- 定期更换密码

#### 2. 增强安全配置

```typescript
// app/admin/layout.tsx
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'defix2024';

// 添加密码强度验证
const validatePassword = (password: string): boolean => {
  return password.length >= 8 && 
         /[A-Z]/.test(password) && 
         /[a-z]/.test(password) && 
         /[0-9]/.test(password);
};
```

#### 3. 会话管理优化

```typescript
// 设置会话过期时间
const SESSION_TIMEOUT = 2 * 60 * 60 * 1000; // 2 小时

useEffect(() => {
  const authTime = localStorage.getItem('admin_auth_time');
  if (authTime && Date.now() - parseInt(authTime) > SESSION_TIMEOUT) {
    handleLogout();
  }
}, []);

const handleLogin = (password: string) => {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem('admin_authenticated', 'true');
    localStorage.setItem('admin_auth_time', Date.now().toString());
    setIsAuthenticated(true);
  }
};
```

### 性能优化配置

#### 1. Next.js 配置

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用实验性功能
  experimental: {
    serverComponentsExternalPackages: ['remark', 'remark-html'],
  },
  
  // 图片优化
  images: {
    domains: ['your-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // 压缩配置
  compress: true,
  
  // 重写规则
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin/:path*',
      },
    ];
  },
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=600',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

#### 2. 缓存策略

```typescript
// lib/cache.ts
class DataCache {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private timeout = 5 * 60 * 1000; // 5 分钟

  set(key: string, value: any) {
    this.cache.set(key, {
      data: value,
      timestamp: Date.now()
    });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.timeout) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }

  clear() {
    this.cache.clear();
  }
}

export const dataCache = new DataCache();
```

## 🔒 安全配置

### 1. 环境变量安全

```bash
# .env.local (不要提交到版本控制)
NEXT_PUBLIC_SUPABASE_URL=https://project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
ADMIN_PASSWORD=your_secure_admin_password
ENCRYPTION_KEY=your_encryption_key_for_sensitive_data
```

### 2. HTTPS 配置

确保生产环境使用 HTTPS：

```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

### 3. API 安全

```typescript
// lib/security.ts
export const validateInput = (input: string, maxLength: number = 1000): boolean => {
  if (!input || input.length > maxLength) return false;
  
  // 防止 XSS
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
  ];
  
  return !dangerousPatterns.some(pattern => pattern.test(input));
};

export const sanitizeEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? email.toLowerCase().trim() : null;
};
```

## 📊 监控和维护

### 1. 日志配置

```typescript
// lib/logger.ts
export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`, data);
  },
  
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
  },
  
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`, data);
  },
};
```

### 2. 错误监控

```typescript
// app/error.tsx
'use client';

import { useEffect } from 'react';
import { logger } from '@/lib/logger';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error('Application error occurred', {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">系统错误</h2>
        <p className="text-gray-600 mb-6">抱歉，系统遇到了一个错误。请刷新页面重试。</p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          刷新页面
        </button>
      </div>
    </div>
  );
}
```

### 3. 健康检查

```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server';
import { isSupabaseConfigured } from '@/lib/supabase';

export async function GET() {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      database: isSupabaseConfigured ? 'connected' : 'disconnected',
      api: 'running',
    },
  };

  const status = health.services.database === 'connected' ? 200 : 503;
  
  return NextResponse.json(health, { status });
}
```

## 🚀 部署检查清单

### 部署前检查

- [ ] 环境变量配置完成
- [ ] Supabase 数据库表创建成功
- [ ] 管理员密码已修改
- [ ] 本地测试所有功能正常
- [ ] 构建成功无错误

### 部署后验证

- [ ] 网站可正常访问
- [ ] 收益池数据加载正常
- [ ] 用户请求提交功能工作
- [ ] 管理后台登录和功能正常
- [ ] 所有 API 接口响应正常
- [ ] 错误处理机制生效

### 性能检查

- [ ] 页面加载时间 < 3 秒
- [ ] API 响应时间 < 500ms
- [ ] 移动端适配良好
- [ ] SEO 优化配置正确

## 🔧 故障排除

### 常见问题

#### 1. Supabase 连接失败

**症状**: 用户请求提交失败，管理后台无法加载数据

**解决方案**:
```bash
# 检查环境变量
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# 验证 Supabase 连接
curl -H "apikey: your_anon_key" "your_supabase_url/rest/v1/pool_requests"
```

#### 2. 管理后台无法访问

**症状**: 访问 `/admin` 显示 404 或无法登录

**解决方案**:
- 检查路由配置是否正确
- 验证管理员密码设置
- 清除浏览器缓存和 localStorage

#### 3. 构建失败

**症状**: `npm run build` 报错

**解决方案**:
```bash
# 清理依赖
rm -rf node_modules package-lock.json
npm install

# 检查 TypeScript 错误
npm run type-check

# 检查语法错误
npm run lint
```

#### 4. 数据解析错误

**症状**: 收益池数据显示异常

**解决方案**:
- 检查 `web3/` 目录文件格式
- 验证 Markdown 文件 frontmatter 格式
- 查看控制台错误日志

### 日志排查

```bash
# Vercel 部署日志
vercel logs

# 本地开发日志
npm run dev 2>&1 | tee debug.log
```

## 📞 技术支持

### 联系方式

- **GitHub Issues**: [项目问题反馈](https://github.com/your-username/defix/issues)
- **技术文档**: [完整文档](./README.md)
- **API 文档**: [接口说明](./API.md)

### 相关资源

- [Next.js 文档](https://nextjs.org/docs)
- [Supabase 文档](https://supabase.com/docs)
- [Vercel 部署指南](https://vercel.com/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

**文档版本**: v1.0.0  
**最后更新**: 2025-07-26  
**适用版本**: DeFi Platform v2.2.0+