# DeFi收益池聚合平台 - 部署运维手册

> 🚀 为运维工程师和DevOps团队提供的完整部署和运维手册

本手册提供了从开发环境搭建到生产部署的完整指导，包含多种部署方案、监控设置和运维维护等关键信息。

## 📚 文档导航

### 🔍 快速查找
- **初次部署** → [环境变量配置指南](./ENVIRONMENT_SETUP.md)
- **CI/CD设置** → [GitHub Secrets配置指南](./GITHUB_SECRETS.md) 
- **多种部署方式** → [详细部署指南](./DEPLOYMENT.md)
- **Google Analytics配置** → [环境变量指南](./ENVIRONMENT_SETUP.md#google-analytics)

### 📱 按角色导航
- **开发者** → 本地开发部分 + 环境变量配置
- **运维工程师** → 所有文档，重点关注生产部署和监控
- **项目管理者** → 部署选项对比和成本分析

## 🚀 快速开始

### 1. 环境要求

```bash
Node.js >= 18.0.0
npm >= 8.0.0  
Git >= 2.30.0
```

### 2. 安装和基础配置

```bash
# 克隆和安装
git clone https://github.com/your-username/defix-aggregator.git
cd defix-aggregator && npm install

# 快速配置
cp .env.example .env.local

# 基础环境变量(必须)
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" >> .env.local
echo "NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX" >> .env.local  # 可选

# 启动开发服务器
npm run dev
```

> 📝 **详细配置**: 参考 [环境变量配置指南](./ENVIRONMENT_SETUP.md)

## 🔧 部署方案对比

| 特性 | Vercel(🌟推荐) | 自有服务器 | Docker |
|------|------------|---------|--------|
| **难度** | 极简单 | 中等 | 中等 |
| **部署时间** | 2分钟 | 30分钟 | 15分钟 |
| **成本** | 免费/低成本 | 服务器成本 | 服务器成本 |
| **自动化** | 全自动 | 手动配置 | 手动配置 |
| **性能** | 边缘缓存 | 可控 | 可控 |
| **适用场景** | 初创、中小入量 | 企业、定制化 | 混合云、容器化 |

### 快速部署链接

**Vercel一键部署** (推荐新手):
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/defix-aggregator)

**详细部署指南**:
- 🏠 [Vercel部署指南](./GITHUB_SECRETS.md) - 推荐新手
- 🖥️ [自有服务器部署](./DEPLOYMENT.md) - 企业用户  
- 📦 [Docker部署](./DEPLOYMENT.md#docker部署) - 混合云用户

## 📊 监控和分析体系

### Google Analytics 4 集成 ⭐

**自动跟踪的数据指标**:
- 🔍 **搜索行为**: 热门关键词、搜索转化率
- 🎯 **筛选偏好**: 最常用筛选条件、组合模式  
- 📈 **内容效果**: 报告点击率、协议关注度
- 📝 **表单转化**: 用户请求提交成功率
- 🔄 **页面流转**: 用户访问路径和停留时间

**业务洞察分析**:
- 🏆 **协议热度排名**: 了解用户最关注的DeFi项目
- ⚠️ **风险偏好分布**: 掌握用户风险承受能力
- 🔗 **链生态偏好**: 分析不同区块链的受欢迎程度

**简单配置** (只需环境变量):
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_code
```

> 📋 **详细配置**: [环境变量配置指南](./ENVIRONMENT_SETUP.md#google-analytics)

## 🛠️ 运维和维护

### 日常监控检查单

**每日检查** (自动监控推荐):
- ✅ Google Analytics数据是否正常上报
- ✅ 网站性能指标(Core Web Vitals)
- ✅ API接口响应时间(<200ms)
- ✅ 错误率监控(<1%)

**每周维护**:
- 🔄 更新依赖包: `npm update && npm audit fix`
- 📊 性能分析: `npm run build && npm run analyze`
- 🔍 日志分析和清理

**每月优化**:
- 📈 Google Analytics数据分析和优化建议
- 🔒 安全漏洞扫描: `npm audit`
- 💾 数据备份和恢复测试

### 自动化更新机制

**数据更新**: web3数据文件变更 → 自动触发ISR重新生成  
**依赖更新**: GitHub Dependabot自动PR + 手动审核  
**部署更新**: main分支推送 → 自动触发CI/CD部署

## 🔧 常见问题排除

### Google Analytics无数据 📈
**问题**: GA4控制台不显示数据  
**解决步骤**:
1. 检查环境变量: `NEXT_PUBLIC_GA_ID`格式正确
2. 验证网站是否正常访问和加载
3. 等待24-48小时数据聚合延迟
4. 使用GA4实时报告验证事件触发

### 部署失败 🚀
**问题**: Vercel或CI/CD部署失败  
**解决步骤**:
1. 检查[GitHub Secrets](./GITHUB_SECRETS.md)配置完整性
2. 确认Node.js版本兼容性(>=18.0.0)
3. 查看部署日志中的具体错误信息
4. 尝试本地构建: `npm run build`

### 页面404错误 🔍
**问题**: 报告页面或部分页面无法访问  
**解决步骤**:
1. 确认文件路径正确: `web3/protocol/research/`
2. 检查文件名称和格式(.md/.html)
3. 验证ISR配置: `revalidate`参数
4. 清理缓存后重新访问

### 获取帮助 🙋‍♂️

1. 📋 **详细文档**: [环境变量配置](./ENVIRONMENT_SETUP.md) | [GitHub配置](./GITHUB_SECRETS.md) | [部署指南](./DEPLOYMENT.md)
2. 🐛 **问题反馈**: [GitHub Issues](https://github.com/your-username/defix-aggregator/issues)
3. 📧 **技术支持**: support@yoursite.com

---

<div align="center">

**🚀 专业的部署和运维支持，助力DeFi平台稳定运行**

最后更新: 2025-07-23 | 版本: v1.2.0 | 维护: DeFi聚合平台开发组

</div>