# DeFi收益池聚合平台 - 部署运维手册

## 📖 文档目录

本部署手册包含以下完整指南：

- **[环境变量配置指南](./ENVIRONMENT_SETUP.md)** - 完整的环境变量配置说明
- **[GitHub Secrets配置指南](./GITHUB_SECRETS.md)** - CI/CD和部署密钥配置
- **[部署指南](./DEPLOYMENT.md)** - 详细的部署步骤和选项

## 🚀 快速开始

### 1. 环境准备

确保您的开发环境满足以下要求：

```bash
# 环境要求
Node.js >= 18.0.0
npm >= 8.0.0
Git >= 2.30.0
```

### 2. 项目设置

```bash
# 克隆项目
git clone https://github.com/your-username/defix-aggregator.git
cd defix-aggregator

# 安装依赖
npm install

# 复制环境变量模板
cp .env.example .env.local
```

### 3. 必需配置

最少需要配置以下环境变量：

```bash
# 基础配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=DeFi收益池聚合平台

# Google Analytics (强烈推荐)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console (SEO推荐)
NEXT_PUBLIC_GSC_VERIFICATION=your_verification_code
```

### 4. 本地开发

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 🔧 部署选项

### 选项1: Vercel部署 (推荐)

**优势**: 自动部署、边缘缓存、零配置

1. 连接GitHub仓库到Vercel
2. 设置环境变量
3. 自动部署

详细步骤请参考：[GitHub Secrets配置指南](./GITHUB_SECRETS.md)

### 选项2: 自有服务器部署

**优势**: 完全控制、成本可控

详细步骤请参考：[部署指南](./DEPLOYMENT.md)

### 选项3: Docker部署

```bash
# 构建镜像
docker build -t defix-aggregator .

# 运行容器
docker run -p 3000:3000 --env-file .env defix-aggregator
```

## 📊 监控和分析

### Google Analytics集成

配置完成后，系统将自动跟踪：

- **页面浏览**: 所有页面访问
- **用户交互**: 搜索、过滤、点击行为
- **内容参与**: 报告查看、外部链接访问
- **表单转化**: 用户请求提交情况

### 关键指标监控

- **用户行为**: 搜索关键词、筛选偏好
- **内容效果**: 报告点击率、协议关注度
- **SEO表现**: 搜索排名、点击率
- **转化分析**: 用户请求转化漏斗

## 🛠️ 维护和更新

### 数据更新

系统基于文件系统自动更新：
- web3数据文件变更会触发自动重新生成
- 支持增量更新和缓存优化

### 定期维护

```bash
# 更新依赖
npm update

# 检查安全漏洞
npm audit

# 性能分析
npm run build
npm run analyze
```

### 监控检查

- 定期检查Google Analytics数据
- 监控网站性能指标
- 验证API接口响应
- 检查报告文件可访问性

## 📋 故障排除

### 常见问题

**1. Google Analytics没有数据**
- 检查环境变量格式
- 验证GA4配置
- 确认防火墙设置

**2. 部署失败**
- 检查GitHub Secrets配置
- 验证Node.js版本兼容性
- 查看构建日志错误信息

**3. 页面404错误**
- 确认文件路径正确
- 检查静态生成配置
- 验证路由设置

### 支持渠道

- 📧 技术支持: support@yoursite.com
- 📚 文档中心: 查看详细配置指南
- 🐛 问题反馈: GitHub Issues

## 📚 相关文档

- [完整设计文档](../DeFi收益池聚合系统-完整设计文档.md)
- [API接口文档](../api/)
- [用户使用手册](../user-guide/)

---

**最后更新**: 2025-07-23  
**文档版本**: v1.0.0  
**维护团队**: DeFi聚合平台开发组