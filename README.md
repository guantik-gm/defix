# DeFi收益池聚合平台

> 🎯 为Web3 DeFi玩家提供一站式收益策略信息的专业平台

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/defix-aggregator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## ✨ 核心价值

- 🎯 **智能聚合** - 集中展示各类DeFi收益池关键信息，省去多平台切换的繁琐
- 📊 **专业分析** - 提供深度调研报告和风险评估，助力投资决策
- 🔍 **智能筛选** - 多维度过滤系统，快速找到符合需求的收益策略
- 📱 **全端适配** - 桌面端和移动端完美体验，随时随地查看数据
- ⚡ **极速访问** - 基于边缘缓存的静态生成，亚秒级响应速度

## 🎯 适用人群

**DeFi投资者**: 寻找收益机会，需要专业分析支持  
**策略研究者**: 深度了解协议机制，评估风险收益  
**区块链机构**: 批量研究项目，制定投资组合策略

## 🌟 功能特色

### 📋 收益池聚合
统一展示来自不同协议的收益池信息，包含APR范围、风险等级、Token类型等关键指标，支持多维度分类浏览。

### 🔍 智能筛选系统
- **实时搜索**: 收益池名称和协议名称模糊匹配
- **多维过滤**: 区块链、风险等级、投资类型、Token类型
- **APR筛选**: 滑块设定收益率范围
- **智能排序**: 名称、收益率、风险等级等多种排序

### 📖 专业报告
- **调研报告**: 深度项目分析，涵盖技术、风险、市场等维度
- **分析报告**: 交互式数据分析，可视化展示关键指标
- **持续更新**: 基于市场变化和项目发展动态更新内容

### 📝 社区参与
用户可提交新收益池收录请求，专业团队评估并制作相应的分析报告。

## 🛠️ 技术架构

**前端框架**: Next.js 14 + TypeScript + Tailwind CSS  
**数据存储**: 基于文件系统的数据管理 + Supabase数据库  
**部署平台**: Vercel边缘网络 + GitHub Actions CI/CD  
**分析监控**: Google Analytics 4 + Search Console集成  

> 📚 详细技术文档请查看 [开发者文档中心](./docs/README.md)

## 🚀 快速开始

### 1. 本地运行

```bash
# 克隆项目
git clone https://github.com/your-username/defix-aggregator.git
cd defix-aggregator

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 2. 基础配置

```bash
# 复制环境变量模板
cp .env.example .env.local

# 最小化配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics (可选)
```

### 3. 生产部署

**推荐选项**: 一键部署到Vercel  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/defix-aggregator)

**其他选项**: 自有服务器、Docker等  
> 📋 完整部署指南请查看 [部署运维手册](./docs/deployment/README.md)

## 📁 项目架构

```
defix-aggregator/
├── 📁 components/     # React组件库
├── 📁 pages/         # Next.js页面和API路由
├── 📁 lib/           # 核心工具库
├── 📁 web3/          # 数据文件目录
├── 📁 docs/          # 技术文档中心
└── 📁 styles/        # 样式和主题
```

> 📋 详细架构说明请查看 [技术设计文档](./docs/DeFi收益池聚合系统-完整设计文档.md)

## 📊 数据分析

系统集成Google Analytics 4，自动跟踪用户行为：

- **搜索行为**: 关键词分析、搜索转化率
- **筛选偏好**: 最常用条件、组合模式
- **内容效果**: 报告点击率、协议关注度
- **用户转化**: 请求提交成功率分析

## 🎨 界面展示

**桌面端**: 完整数据表格 + 高级筛选面板 + 专业报告查看  
**移动端**: 响应式卡片布局 + 触控优化 + 简化筛选界面

## 📚 文档导航

- 📖 **[技术文档中心](./docs/README.md)** - 开发者资源和技术文档
- 🚀 **[部署运维手册](./docs/deployment/README.md)** - 完整的部署和运维指南
- 📋 **[完整设计文档](./docs/DeFi收益池聚合系统-完整设计文档.md)** - 系统架构和技术设计

## 🤝 参与贡献

欢迎社区贡献！

1. **Fork项目** → **创建功能分支** → **提交更改** → **发起Pull Request**
2. **问题反馈**: [GitHub Issues](https://github.com/your-username/defix-aggregator/issues)
3. **功能建议**: 通过网站的"提交收录请求"功能描述需求

> 📋 详细贡献指南请查看 [开发者文档](./docs/README.md)

## 📞 联系方式

- 🌐 **项目网站**: https://yoursite.com
- 💬 **功能反馈**: 通过网站"提交收录请求"功能
- 📧 **技术支持**: contact@yoursite.com
- 🐛 **问题报告**: [GitHub Issues](https://github.com/your-username/defix-aggregator/issues)

## 📄 开源协议

本项目采用 [MIT许可证](LICENSE)，感谢 Next.js、Tailwind CSS、Supabase 等开源项目的支持。

---

<div align="center">

**⭐ 如果项目对您有帮助，欢迎给个Star支持！**

[🚀 立即体验](https://yoursite.com) | [📚 查看文档](./docs/README.md) | [🛠️ 部署指南](./docs/deployment/README.md)

Made with ❤️ by DeFi聚合平台团队

</div>