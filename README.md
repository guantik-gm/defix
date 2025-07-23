# DeFi收益池聚合平台

> 为Web3 DeFi玩家提供一站式收益策略信息的专业平台

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/defix-aggregator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## ✨ 特性

- 🎯 **智能聚合** - 集中展示各类DeFi收益池的关键信息
- 📊 **专业分析** - 提供深度调研报告和风险评估
- 🔍 **智能筛选** - 支持多维度过滤和个性化需求匹配
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🚀 **极速加载** - 基于Next.js的静态生成和边缘缓存
- 📈 **SEO优化** - 完整的搜索引擎优化策略
- 📊 **数据分析** - 集成Google Analytics和用户行为跟踪

## 🎯 目标用户

- **主要用户**: Web3领域的DeFi投资者和策略研究者
- **次要用户**: 区块链研究机构、DeFi协议开发者
- **潜在用户**: 对DeFi收益感兴趣的传统金融从业人员

## 🌟 核心功能

### 📋 收益池聚合展示
- 统一展示来自不同协议的收益池信息
- 包含APR范围、风险等级、Token类型等关键指标
- 支持按协议、链、风险等级等多维度分类

### 🔍 智能搜索和筛选
- 实时搜索收益池名称和协议名称
- 多选筛选：区块链、风险等级、投资类型、Token类型
- APR范围滑块筛选
- 智能排序：按名称、收益率、风险等级排序

### 📖 专业报告系统
- **调研报告**: Markdown格式的深度项目分析
- **分析报告**: HTML格式的交互式数据分析
- 报告涵盖项目概述、风险评估、市场分析等

### 📝 用户请求系统
- 用户可提交新的收益池收录请求
- 包含收益池描述、协议信息等详细信息
- 专业团队审核和处理请求

## 🛠️ 技术栈

### 前端技术
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React Context + useState
- **Analytics**: Google Analytics 4

### 后端技术
- **Runtime**: Node.js 18+
- **Database**: Supabase (PostgreSQL)
- **File Processing**: gray-matter + marked
- **Caching**: Memory Cache + Vercel Edge Cache

### 部署和监控
- **Platform**: Vercel (推荐) / Self-hosted
- **CI/CD**: GitHub Actions
- **Monitoring**: Google Analytics + Vercel Analytics
- **SEO**: Google Search Console

## 🚀 快速开始

### 环境要求

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git >= 2.30.0
```

### 安装和设置

```bash
# 克隆项目
git clone https://github.com/your-username/defix-aggregator.git
cd defix-aggregator

# 安装依赖
npm install

# 复制环境变量模板
cp .env.example .env.local
```

### 环境变量配置

```bash
# 基础配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=DeFi收益池聚合平台

# Google Analytics (强烈推荐)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console (SEO推荐)  
NEXT_PUBLIC_GSC_VERIFICATION=your_verification_code

# Supabase数据库 (用户请求功能)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 本地开发

```bash
# 启动开发服务器
npm run dev

# 项目将在 http://localhost:3000 启动
```

### 构建和部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 运行类型检查
npm run type-check

# 运行代码检查
npm run lint
```

## 📁 项目结构

```
defix-aggregator/
├── 📁 components/              # React组件
│   ├── PoolTable.tsx          # 收益池表格组件
│   ├── FilterPanel.tsx        # 筛选面板组件
│   ├── SearchBar.tsx          # 搜索栏组件
│   └── ui/                    # 基础UI组件
├── 📁 pages/                  # Next.js页面
│   ├── index.tsx              # 首页
│   ├── request.tsx            # 提交请求页面
│   ├── reports/               # 报告页面
│   └── api/                   # API路由
├── 📁 lib/                    # 工具库
│   ├── analytics.tsx          # Google Analytics集成
│   ├── dataLoader.ts          # 数据加载器
│   ├── supabase.ts           # 数据库配置
│   └── utils.ts              # 工具函数
├── 📁 web3/                   # 数据文件目录
│   ├── pools/                 # 收益池配置文件
│   └── protocol/              # 协议信息和报告
├── 📁 docs/                   # 项目文档
│   ├── deployment/            # 部署相关文档
│   └── DeFi收益池聚合系统-完整设计文档.md
├── 📁 styles/                 # 样式文件
├── 📄 next.config.js          # Next.js配置
├── 📄 tailwind.config.js      # Tailwind CSS配置
└── 📄 package.json            # 项目依赖
```

## 🔧 部署指南

### 选项1: Vercel部署 (推荐)

1. **连接GitHub**: 将仓库连接到Vercel
2. **环境变量**: 在Vercel项目设置中添加环境变量
3. **自动部署**: 推送到main分支自动触发部署

详细步骤: [GitHub Secrets配置指南](./docs/deployment/GITHUB_SECRETS.md)

### 选项2: 自有服务器部署

支持使用Nginx + PM2进行自有服务器部署

详细步骤: [部署指南](./docs/deployment/DEPLOYMENT.md)

### 选项3: Docker部署

```bash
# 构建Docker镜像
docker build -t defix-aggregator .

# 运行容器
docker run -p 3000:3000 --env-file .env defix-aggregator
```

## 📊 分析和监控

### Google Analytics集成

系统集成了完整的用户行为分析，自动跟踪：

- **页面浏览**: 所有页面访问统计
- **用户交互**: 搜索、筛选、点击行为分析
- **内容参与**: 报告查看、外部链接访问统计
- **表单转化**: 用户请求提交转化率分析

### 关键指标

- 🔍 **搜索行为**: 热门搜索关键词、搜索转化率
- 🔧 **筛选偏好**: 最常用筛选条件、筛选组合模式
- 📊 **内容效果**: 报告点击率、协议关注度排名
- 📝 **用户转化**: 请求提交成功率、用户参与度

## 🎨 界面预览

### 桌面端界面
- 完整的数据表格展示
- 高级筛选面板
- 专业的报告查看界面

### 移动端界面
- 响应式卡片布局
- 优化的触控交互
- 简化的筛选界面

## 📚 文档

- 📖 [完整设计文档](./docs/DeFi收益池聚合系统-完整设计文档.md)
- 🚀 [部署运维手册](./docs/deployment/README.md)
- ⚙️ [环境变量配置指南](./docs/deployment/ENVIRONMENT_SETUP.md)
- 🔑 [GitHub Secrets配置](./docs/deployment/GITHUB_SECRETS.md)

## 🤝 贡献指南

我们欢迎社区贡献！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

### 开发规范

- 使用TypeScript进行类型安全开发
- 遵循ESLint和Prettier代码规范
- 为新功能添加适当的测试
- 更新相关文档

## 🐛 问题报告

如果您发现了bug或有功能建议，请：

1. 检查[现有Issues](https://github.com/your-username/defix-aggregator/issues)
2. 创建新的Issue并提供详细信息
3. 使用适当的标签分类问题

## 📄 许可证

本项目采用 [MIT许可证](LICENSE) - 查看LICENSE文件了解详情

## 🙏 致谢

感谢以下开源项目的支持：

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [shadcn/ui](https://ui.shadcn.com/) - UI组件库
- [Supabase](https://supabase.com/) - 开源后端服务
- [Vercel](https://vercel.com/) - 部署平台

## 📞 联系我们

- 📧 **邮箱**: contact@yoursite.com
- 🌐 **网站**: https://yoursite.com
- 💬 **反馈**: 通过网站的"提交收录请求"功能

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给我们一个Star！**

Made with ❤️ by DeFi聚合平台团队

</div>