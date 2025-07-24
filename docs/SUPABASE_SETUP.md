# Supabase 配置指南

本项目使用 Supabase 作为后端数据库来存储用户提交的收录请求。

## 1. 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com/) 并注册账号
2. 点击 "New Project" 创建新项目
3. 填写项目信息：
   - Organization: 选择或创建组织
   - Project Name: `defix-aggregator`
   - Database Password: 设置强密码
   - Region: 选择离用户最近的区域

## 2. 获取项目配置

创建项目后，在项目仪表板中：

1. 进入 **Settings** → **API**
2. 复制以下信息：
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - Anon Public Key (NEXT_PUBLIC_SUPABASE_ANON_KEY)

## 3. 配置环境变量

1. 复制 `.env.example` 文件为 `.env.local`：
   ```bash
   cp .env.example .env.local
   ```

2. 填写 Supabase 配置：
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

## 4. 创建数据库表

在 Supabase 项目的 **SQL Editor** 中执行以下 SQL：

```sql
-- 创建用户请求表
CREATE TABLE user_requests (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL DEFAULT 'pool_inclusion',
  pool_name TEXT NOT NULL,
  protocol_name TEXT NOT NULL,
  official_website TEXT NOT NULL,
  chain TEXT[] NOT NULL,
  token TEXT,
  investment_type TEXT,
  expected_apr TEXT,
  risk_level TEXT DEFAULT 'medium',
  contact_email TEXT NOT NULL,
  additional_info TEXT,
  status TEXT DEFAULT 'pending',
  priority TEXT DEFAULT 'medium',
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- 创建索引以提高查询性能
CREATE INDEX idx_user_requests_status ON user_requests(status);
CREATE INDEX idx_user_requests_submitted_at ON user_requests(submitted_at);
CREATE INDEX idx_user_requests_contact_email ON user_requests(contact_email);

-- 启用 Row Level Security (RLS)
ALTER TABLE user_requests ENABLE ROW LEVEL SECURITY;

-- 创建插入策略（允许任何人提交请求）
CREATE POLICY "Allow insert for all users" ON user_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- 创建查询策略（仅允许管理员查看）
CREATE POLICY "Allow select for admins only" ON user_requests
  FOR SELECT TO authenticated
  USING (false); -- 需要设置管理员角色或使用服务密钥

-- 添加评论
COMMENT ON TABLE user_requests IS '用户提交的收益池收录请求';
COMMENT ON COLUMN user_requests.type IS '请求类型：pool_inclusion, protocol_analysis, data_correction, other';
COMMENT ON COLUMN user_requests.risk_level IS '风险等级：low, medium, high, very_high';
COMMENT ON COLUMN user_requests.status IS '请求状态：pending, reviewing, approved, rejected, completed';
```

## 5. 配置访问权限

### 公开访问设置
如果需要允许匿名用户提交请求，确保在 **Authentication** → **Settings** 中：
- 启用 "Enable email confirmations"
- 根据需要配置其他认证设置

### 管理员访问
为了管理提交的请求，建议：
1. 创建管理员用户
2. 使用 Supabase 的 Row Level Security 控制访问权限
3. 或使用服务密钥进行后台管理

## 6. 测试配置

启动开发服务器并测试提交功能：

```bash
npm run dev
```

访问 `http://localhost:3000/request` 并尝试提交一个测试请求。

## 7. 生产环境配置

在部署到生产环境时：

1. 更新环境变量中的 `NEXT_PUBLIC_SITE_URL`
2. 在 Supabase 项目设置中配置正确的域名
3. 考虑设置更严格的 RLS 策略
4. 配置备份和监控

## 故障排除

### 常见问题

1. **连接失败**：检查 URL 和密钥是否正确
2. **权限错误**：确认 RLS 策略配置正确
3. **表不存在**：确认已执行创建表的 SQL 语句

### 调试模式

在开发过程中，如果 Supabase 连接失败，系统会自动回退到 mock 数据存储，并在控制台显示相关日志。

## 数据库管理

### 查看提交的请求

在 Supabase 仪表板的 **Table Editor** 中可以查看和管理 `user_requests` 表中的数据。

### 导出数据

可以通过 SQL 查询导出数据：

```sql
SELECT * FROM user_requests 
ORDER BY submitted_at DESC;
```

### 备份建议

建议定期备份数据：
1. 使用 Supabase 的自动备份功能
2. 定期导出重要数据到本地
3. 设置监控和告警

---

更多详细信息请参考 [Supabase 官方文档](https://supabase.com/docs)。