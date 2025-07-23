# 环境变量配置完整指南

## 📋 概述

本指南将帮助您完整配置DeFi收益池聚合平台的所有环境变量，包括部署、分析、SEO和功能配置。

## 🚀 快速开始

### 1. 复制环境变量模板

```bash
cp .env.example .env.local
```

### 2. 必需配置（网站基本运行）

```bash
# 基础配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=您的网站名称

# Google Analytics (强烈推荐)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. 推荐配置（完整功能）

```bash
# Google Search Console
NEXT_PUBLIC_GSC_VERIFICATION=your_verification_code

# Supabase (用户请求功能)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 🔧 详细配置说明

### 🌐 基础站点配置

#### `NEXT_PUBLIC_SITE_URL` ⭐ 必需
- **用途**: 网站的基础URL，用于SEO和社交分享
- **格式**: `https://your-domain.com`
- **注意**: 不要在末尾添加斜杠

#### `NEXT_PUBLIC_SITE_NAME`
- **用途**: 网站名称，显示在标题和meta标签中
- **格式**: 纯文本字符串
- **默认**: "DeFi收益池聚合平台"

### 📊 Google Analytics 配置

#### `NEXT_PUBLIC_GA_ID` ⭐ 强烈推荐
- **用途**: Google Analytics 4 跟踪ID
- **格式**: `G-XXXXXXXXXX`
- **功能**: 自动跟踪页面浏览、用户交互、搜索行为等
- **获取方式**:
  1. 登录 [Google Analytics](https://analytics.google.com/)
  2. 创建GA4属性
  3. 在"管理" → "数据流"中找到"衡量ID"

#### 跟踪的事件类型
```javascript
// 自动跟踪的用户行为
- 页面浏览 (pageview)
- 搜索操作 (search)
- 过滤器使用 (filter_change)
- 报告查看 (view_research_report, view_analysis_report)
- 外部链接点击 (visit_protocol_website)
- 界面交互 (expand_filters, clear_search)
```

### 🔍 Google Search Console 配置

#### `NEXT_PUBLIC_GSC_VERIFICATION` ⭐ SEO推荐
- **用途**: Google Search Console 网站所有权验证
- **格式**: 验证字符串（不包括HTML标签）
- **功能**: 启用搜索引擎优化监控
- **获取方式**:
  1. 登录 [Google Search Console](https://search.google.com/search-console/)
  2. 添加资源（网站）
  3. 选择"HTML标记"验证方法
  4. 复制`content`属性的值

### 🗄️ Supabase 数据库配置

#### `NEXT_PUBLIC_SUPABASE_URL`
- **用途**: Supabase项目URL
- **格式**: `https://your-project-id.supabase.co`
- **功能**: 用户请求提交和管理

#### `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **用途**: Supabase匿名访问密钥
- **格式**: 长字符串
- **功能**: 客户端数据库访问

#### `SUPABASE_SERVICE_ROLE_KEY`
- **用途**: Supabase服务端密钥
- **格式**: 长字符串
- **功能**: 服务端数据库操作
- **安全**: 仅在服务端使用，不会暴露给客户端

### 📧 邮件通知配置（可选）

#### SMTP 配置
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

#### `ENABLE_EMAIL_NOTIFICATIONS`
- **用途**: 开启/关闭邮件通知功能
- **格式**: `true` 或 `false`
- **默认**: `false`

## 🏗️ 部署配置

### Vercel 部署

#### 方法1: Vercel Dashboard（推荐）
1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择项目 → Settings → Environment Variables
3. 添加环境变量，选择所有环境（Production, Preview, Development）

#### 方法2: Vercel CLI
```bash
# 设置生产环境变量
vercel env add NEXT_PUBLIC_GA_ID production
vercel env add NEXT_PUBLIC_GSC_VERIFICATION production

# 设置所有环境
vercel env add NEXT_PUBLIC_SITE_URL
```

### GitHub Actions 配置

在GitHub仓库的 Settings → Secrets and variables → Actions 中添加：

```
Name: VERCEL_TOKEN
Value: [您的Vercel API Token]
```

## 🧪 本地开发配置

### 创建 `.env.local` 文件

```bash
# 本地开发配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=DeFi收益池聚合平台 - 开发环境

# Google Analytics (可选，开发时可以使用测试ID)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 其他配置...
```

### 开发服务器启动

```bash
npm run dev
# 或
yarn dev
```

## ✅ 配置验证

### 1. 基础功能验证
```bash
# 检查环境变量是否正确加载
npm run build
npm run start
```

### 2. Google Analytics 验证
- 访问 `http://localhost:3000`
- 打开浏览器开发者工具
- 查看Network标签，寻找对 `google-analytics.com` 的请求
- 在GA4实时报告中验证数据

### 3. Search Console 验证
- 部署网站后访问首页
- 查看页面源代码，确认包含验证meta标签
- 在Google Search Console中点击"验证"

## 🚨 常见问题

### 问题1: Google Analytics 没有数据
**解决方案**:
- 检查`NEXT_PUBLIC_GA_ID`格式是否为`G-XXXXXXXXXX`
- 确保在所有环境中都设置了变量
- 等待24小时后再查看数据（GA4有延迟）
- 检查浏览器是否安装了广告拦截器

### 问题2: 环境变量在构建时未生效
**解决方案**:
- 确保以`NEXT_PUBLIC_`开头的变量在构建时可用
- 重新部署应用以应用最新的环境变量
- 检查Vercel环境变量是否正确设置

### 问题3: Search Console 验证失败
**解决方案**:
- 确保验证码不包含HTML标签，只要content属性的值
- 检查域名是否与Search Console中添加的完全匹配
- 重新部署后等待几分钟再验证

## 📚 参考链接

- [Next.js 环境变量文档](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel 环境变量配置](https://vercel.com/docs/concepts/projects/environment-variables)
- [Google Analytics 4 设置](https://support.google.com/analytics/answer/9304153)
- [Google Search Console 验证](https://support.google.com/webmasters/answer/9008080)
- [Supabase 快速开始](https://supabase.com/docs/guides/getting-started)

## 📋 配置清单

### 🔴 必需配置
- [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] `VERCEL_TOKEN` (GitHub Secret)

### 🟡 强烈推荐
- [ ] `NEXT_PUBLIC_GA_ID`
- [ ] `NEXT_PUBLIC_GSC_VERIFICATION`
- [ ] `NEXT_PUBLIC_SITE_NAME`

### 🟢 可选配置
- [ ] Supabase 配置（用户请求功能）
- [ ] SMTP 配置（邮件通知）
- [ ] 其他功能开关

### ✅ 验证步骤
- [ ] 本地开发环境运行正常
- [ ] 生产环境部署成功
- [ ] Google Analytics 接收数据
- [ ] Google Search Console 验证通过
- [ ] 所有功能正常工作

---

**提示**: 按照此清单逐项配置，确保您的DeFi收益池聚合平台获得最佳的用户体验和SEO效果！