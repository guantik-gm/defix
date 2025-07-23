# DeFi 收益池聚合平台部署指南

## 概述

这是一个基于 Next.js 的 DeFi 收益池信息聚合平台，提供收益池数据展示、搜索、筛选和详情查看功能。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + shadcn/ui
- **数据**: JSON 文件 + Supabase (可选)
- **部署**: Vercel / Netlify / 自定义服务器

## 本地开发

### 环境要求

- Node.js 18+ 
- npm 或 yarn
- Git

### 安装和运行

```bash
# 克隆项目
git clone <your-repo-url>
cd defix

# 安装依赖
npm install

# 复制环境变量文件并配置
cp .env.example .env.local

# 运行开发服务器
npm run dev
```

访问 http://localhost:3000 查看应用。

### 环境变量配置

在 `.env.local` 文件中配置以下变量：

```bash
# 基础配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=DeFi收益池聚合平台

# Supabase配置（可选）
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# 邮件通知配置（可选）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## 数据配置

### 使用 JSON 文件（默认）

1. 在 `data/pools/` 目录下放置 JSON 数据文件
2. 每个文件代表一个收益池数据
3. 参照 `data/pools/example-pool.json` 的格式

### 使用 Supabase（可选）

1. 创建 Supabase 项目
2. 运行 `lib/supabase/schema.sql` 创建数据表
3. 配置环境变量
4. 修改 `lib/dataLoader.ts` 启用 Supabase 数据源

## 部署

### Vercel 部署（推荐）

1. **连接 GitHub 仓库**
   ```bash
   # 推送代码到 GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **在 Vercel 中导入项目**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 导入你的 GitHub 仓库

3. **配置环境变量**
   在 Vercel 项目设置中配置：
   ```
   NEXT_PUBLIC_SITE_URL=https://yoursite.vercel.app
   NEXT_PUBLIC_SITE_NAME=DeFi收益池聚合平台
   ```

4. **部署设置**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Netlify 部署

1. **构建配置**
   创建 `netlify.toml` 文件：
   ```toml
   [build]
     command = "npm run build && npm run export"
     publish = "out"
   
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
   ```

2. **环境变量**
   在 Netlify 设置中配置相同的环境变量

### 自定义服务器部署

1. **构建应用**
   ```bash
   npm run build
   ```

2. **使用 PM2 运行**
   ```bash
   # 安装 PM2
   npm install -g pm2
   
   # 启动应用
   pm2 start npm --name "defix" -- start
   
   # 保存 PM2 配置
   pm2 save
   pm2 startup
   ```

3. **Nginx 配置示例**
   ```nginx
   server {
       listen 80;
       server_name yoursite.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Docker 部署

1. **创建 Docker 镜像**
   ```bash
   docker build -t defix .
   ```

2. **运行容器**
   ```bash
   docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://yoursite.com defix
   ```

## 性能优化

### 缓存策略

- 静态资源：1年缓存
- API 响应：5分钟缓存
- 页面：ISR 1小时重新生成

### 图片优化

- 使用 Next.js Image 组件
- 启用 WebP/AVIF 格式
- 响应式图片加载

### 代码分割

- 自动路由分割
- 动态导入大型组件
- Webpack 优化配置

## 监控和维护

### 性能监控

- 使用 Vercel Analytics（Vercel 部署）
- 配置 Google Analytics
- 监控 Core Web Vitals

### 错误监控

- 集成 Sentry 错误追踪
- 自定义错误页面
- 日志记录和分析

### 数据更新

- 手动更新：修改 JSON 文件
- 自动化：GitHub Actions 定时任务
- API 集成：连接数据提供商

## 安全考虑

- HTTPS 强制跳转
- CSP 头设置
- XSS 防护
- API 速率限制
- 输入验证和清理

## 备份和恢复

- 定期备份数据文件
- 版本控制所有配置
- 数据库备份（如使用）
- 灾难恢复计划

## 问题排查

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本
   - 清理 node_modules 重新安装
   - 验证 TypeScript 类型

2. **数据加载问题**
   - 检查数据文件格式
   - 验证文件路径
   - 查看控制台错误

3. **样式问题**
   - 确认 Tailwind CSS 配置
   - 检查 CSS 导入顺序
   - 验证响应式断点

### 日志分析

```bash
# 查看应用日志
pm2 logs defix

# 查看访问日志
tail -f /var/log/nginx/access.log

# 查看错误日志
tail -f /var/log/nginx/error.log
```

## 联系支持

如有问题，请通过以下方式联系：

- GitHub Issues
- 邮箱：support@yoursite.com
- 文档：查看项目 README.md

---

**注意**: 请在生产环境部署前仔细测试所有功能，并确保安全配置正确。