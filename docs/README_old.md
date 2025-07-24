# Web3项目深度分析报告平台

一个基于Flask和Supabase的Web3项目深度分析报告管理平台，支持用户浏览分析报告、提交项目请求，以及管理员后台管理功能。

> ✅ 已修复 Vercel 部署问题 - 支持 serverless 环境和 Supabase Storage

## 功能特性

### 公共功能
- 📊 **报告列表页面**: 分页显示已发布的深度分析报告
- 🔍 **搜索功能**: 支持项目名称的模糊搜索
- 📱 **响应式设计**: 适配移动端和桌面端
- 📄 **报告详情**: 支持Markdown报告和HTML交互式分析页面
- 📝 **项目请求**: 用户可以申请研究新项目

### 管理员功能
- 🔐 **安全认证**: 管理员登录系统
- 📊 **仪表板**: 统计数据和快速操作
- 📋 **报告管理**: 创建、编辑、删除深度分析报告
- 📥 **请求管理**: 处理用户提交的项目请求
- 📁 **文件上传**: 支持Markdown和HTML文件上传
- 📧 **邮件通知**: 自动通知用户请求处理结果

## 技术栈

- **后端**: Flask, Python 3.8+
- **数据库**: Supabase (PostgreSQL)
- **前端**: Bootstrap 5, jQuery
- **认证**: Flask-Login
- **文件处理**: Werkzeug
- **Markdown**: Python-Markdown
- **邮件**: SMTP

## 安装和设置

### 1. 克隆项目
```bash
git clone <repository-url>
cd defix
```

### 2. 创建虚拟环境
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或
venv\Scripts\activate  # Windows
```

### 3. 安装依赖
```bash
pip install -r requirements.txt
```

### 4. 配置环境变量
复制 `.env.example` 为 `.env` 并填写配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件：
```env
# Supabase配置
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_role_key

# Flask配置
FLASK_SECRET_KEY=your_secret_key_here
FLASK_ENV=development
DEBUG=True

# 邮件配置（可选）
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
FROM_EMAIL=your_email@gmail.com
```

### 5. 设置Supabase数据库
1. 在Supabase控制台创建新项目
2. 在SQL编辑器中运行 `database/schema.sql` 中的SQL脚本
3. 获取项目URL和API密钥，填入 `.env` 文件

### 6. 初始化数据
```bash
python create_admin.py
```

这将创建：
- 默认管理员账户 (admin@example.com / admin123)
- 示例研究报告数据
- 示例用户请求数据

### 7. 运行应用
```bash
python run.py
```

应用将在 `http://localhost:5000` 启动。

### 8. 运行测试

所有测试代码已统一整理到 `test/` 目录下。运行测试以确保应用正常工作：

```bash
# 运行核心测试（推荐）
python test/run_core_tests.py

# 运行所有测试
python test/run_all_tests.py

# 运行单个测试模块
python test/test_deployment.py
python test/test_final_verification.py
python test/test_supabase.py
```

#### 测试模块说明

- `test/run_core_tests.py` - 核心测试运行器（推荐使用）
- `test/run_all_tests.py` - 完整测试套件运行器
- `test/test_deployment.py` - 部署验证测试
- `test/test_final_verification.py` - 最终功能验证
- `test/test_supabase.py` - 数据库连接测试
- `test/test_admin_templates.py` - 管理员模板测试
- `test/test_app.py` - 基础应用测试

详细测试说明请查看 `test/README.md`。

## 使用说明

### 公共用户
1. 访问首页查看深度分析报告列表
2. 使用搜索功能查找特定项目
3. 点击"分析"查看交互式分析页面
4. 点击"报告"查看详细的Markdown报告
5. 如果找不到想要的项目，可以点击"申请新项目"提交请求

### 管理员
1. 访问 `/admin/login` 登录管理后台
2. 在仪表板查看系统统计信息
3. 在"报告管理"中添加、编辑或删除深度分析报告
4. 在"用户请求"中处理用户提交的项目申请
5. 上传Markdown报告文件和HTML分析文件

## 项目结构

```
defix/
├── app/                    # 应用主目录
│   ├── models/            # 数据模型
│   ├── views/             # 视图控制器
│   ├── services/          # 服务层
│   └── utils/             # 工具函数
├── templates/             # HTML模板
│   ├── admin/            # 管理员模板
│   └── public/           # 公共模板
├── static/               # 静态文件
│   ├── css/             # 样式文件
│   ├── js/              # JavaScript文件
│   └── images/          # 图片文件
├── uploads/              # 上传文件目录
│   ├── reports/         # Markdown报告文件
│   └── analysis/        # HTML分析文件
├── database/             # 数据库脚本
├── requirements.txt      # Python依赖
├── run.py               # 应用启动文件
└── create_admin.py      # 初始化脚本
```

## API接口

### 公共接口
- `GET /` - 首页，显示报告列表
- `GET /report/<id>/analysis` - 查看分析页面
- `GET /report/<id>/report` - 查看报告页面
- `POST /request-project` - 提交项目请求

### 管理员接口
- `GET /admin/login` - 登录页面
- `GET /admin/dashboard` - 管理仪表板
- `GET /admin/reports` - 报告管理
- `POST /admin/reports/create` - 创建报告
- `GET /admin/requests` - 请求管理

## 部署

### 生产环境配置
1. 设置 `FLASK_ENV=production`
2. 使用强密码和安全的SECRET_KEY
3. 配置HTTPS
4. 设置文件上传限制
5. 配置邮件服务

### 使用Gunicorn部署
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 run:app
```

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 许可证

MIT License

## 支持

如果您在使用过程中遇到问题，请：
1. 查看文档和FAQ
2. 搜索已有的Issues
3. 创建新的Issue描述问题

---

**注意**: 这是一个演示项目，在生产环境中使用前请确保进行充分的安全测试和配置。
