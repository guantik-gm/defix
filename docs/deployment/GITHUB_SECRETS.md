# GitHub Secrets 配置指南

## 📝 概述

为了使GitHub Actions workflow正常工作并启用Google Analytics和Search Console，您需要在GitHub仓库中配置以下环境变量。

## 🔑 必需的Secrets

### `VERCEL_TOKEN` (部署必需)
- **用途**: Vercel API访问令牌，用于自动部署
- **获取方式**:
  1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
  2. 点击右上角头像 → Settings
  3. 左侧菜单选择 "Tokens"
  4. 点击 "Create" 创建新token
  5. 输入token名称，选择scope，点击"Create Token"
  6. 复制生成的token

## 🚀 环境变量配置

为了完整体验网站功能，建议在Vercel项目中配置以下环境变量：

### Google Analytics 配置

#### `NEXT_PUBLIC_GA_ID` (强烈推荐)
- **用途**: Google Analytics 4 (GA4) 跟踪ID
- **格式**: `G-XXXXXXXXXX`
- **获取方式**:
  1. 登录 [Google Analytics](https://analytics.google.com/)
  2. 创建新的GA4属性或使用现有属性
  3. 在"管理"→"数据流"中找到您的网站数据流
  4. 复制"衡量ID"（格式：G-XXXXXXXXXX）

#### `NEXT_PUBLIC_GSC_VERIFICATION` (SEO优化推荐)
- **用途**: Google Search Console 网站验证代码
- **格式**: 一串字母数字组合
- **获取方式**:
  1. 登录 [Google Search Console](https://search.google.com/search-console/)
  2. 添加您的网站域名
  3. 选择"HTML标记"验证方法
  4. 复制content属性中的验证代码（不包括meta标签）

### 其他重要配置

#### Supabase 配置（用户请求功能）
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

#### 站点基础信息
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=DeFi收益池聚合平台
```

## 🛠️ Vercel 环境变量配置步骤

### 方法1: 通过Vercel Dashboard（推荐）

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择您的项目
3. 点击 "Settings" 选项卡
4. 在左侧菜单选择 "Environment Variables"
5. 添加以下变量：

```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX (您的GA4跟踪ID)
Environment: Production, Preview, Development

Name: NEXT_PUBLIC_GSC_VERIFICATION  
Value: your_verification_code (Google Search Console验证码)
Environment: Production, Preview, Development
```

### 方法2: 通过Vercel CLI

```bash
# 设置Google Analytics ID
vercel env add NEXT_PUBLIC_GA_ID

# 设置Google Search Console验证码
vercel env add NEXT_PUBLIC_GSC_VERIFICATION
```

## 🔑 GitHub Repository Secrets配置

### 添加Secret到GitHub仓库

1. 打开您的GitHub仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" → "Actions"
4. 点击 "New repository secret"
5. 添加以下secret:

```
Name: VERCEL_TOKEN
Value: [您的Vercel Token]
```

**注意**: GitHub Secrets主要用于CI/CD流程，而Google Analytics等环境变量应该在Vercel项目中配置。

## 📊 Google Analytics 功能说明

配置完成后，网站将自动跟踪以下用户行为：

### 自动跟踪事件
- **页面浏览**: 所有页面访问
- **搜索行为**: 用户搜索池子或协议
- **过滤器使用**: 筛选条件的使用情况
- **报告查看**: 调研报告和分析报告的点击
- **外部链接**: 协议官网访问

### 事件分类
- `user_interaction`: 用户交互行为
- `engagement`: 用户参与度相关
- `navigation`: 页面导航行为

## 🔍 Google Search Console 功能说明

配置验证码后，您可以：

- 监控网站在Google搜索中的表现
- 查看搜索查询和点击数据
- 检测和修复SEO问题
- 提交网站地图加速收录

## ✅ 验证配置

配置完成后，您可以通过以下方式验证：

### 1. 部署验证
推送代码到main分支触发自动部署：
```bash
git add .
git commit -m "Add Google Analytics configuration"
git push origin main
```

### 2. 功能验证
- 访问网站，打开浏览器开发者工具
- 在Console中检查是否有gtag相关的网络请求
- 在Google Analytics实时报告中查看访问数据

## ❌ 可选配置

以下配置是可选的，不配置不影响基本功能：

- `SMTP_*`: 邮件通知配置
- `SUPABASE_*`: 用户请求功能（如不需要可忽略）

## 🔧 故障排除

### 常见问题

1. **Google Analytics没有数据**
   - 检查`NEXT_PUBLIC_GA_ID`格式是否正确（G-XXXXXXXXXX）
   - 确保环境变量在所有环境（Production, Preview, Development）中都已设置
   - 等待24小时后查看数据（GA4有延迟）

2. **Search Console验证失败**
   - 确保验证码正确且没有包含HTML标签
   - 检查域名是否匹配
   - 重新部署网站确保meta标签生效

3. **部署失败**
   - 确保`VERCEL_TOKEN`在GitHub Secrets中正确设置
   - 检查token是否有效且权限足够

## 📚 相关链接

- [Google Analytics 4 设置指南](https://support.google.com/analytics/answer/9304153)
- [Google Search Console 帮助](https://support.google.com/webmasters/)
- [Vercel 环境变量文档](https://vercel.com/docs/concepts/projects/environment-variables)
- [GitHub Actions Secrets 文档](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

---

**配置优先级**: `VERCEL_TOKEN` (必需) → `NEXT_PUBLIC_GA_ID` (强烈推荐) → 其他配置 (可选)