-- 创建用户请求提交表
CREATE TABLE IF NOT EXISTS pool_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  protocol_name VARCHAR(255) NOT NULL,
  protocol_website TEXT NOT NULL,
  pool_type VARCHAR(255) NOT NULL,
  chain VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  submitter_contact VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' NOT NULL CHECK (status IN ('pending', 'in_review', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_pool_requests_status ON pool_requests(status);
CREATE INDEX IF NOT EXISTS idx_pool_requests_created_at ON pool_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pool_requests_protocol_name ON pool_requests(protocol_name);

-- 创建更新触发器以自动更新 updated_at 字段
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = CURRENT_TIMESTAMP;
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_pool_requests_updated_at BEFORE UPDATE
ON pool_requests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 启用行级安全策略 (RLS)
ALTER TABLE pool_requests ENABLE ROW LEVEL SECURITY;

-- 允许所有人插入请求（用户提交）
CREATE POLICY "Anyone can insert pool requests" ON pool_requests
FOR INSERT WITH CHECK (true);

-- 允许所有人查看请求（如果需要的话，可以限制为管理员）
CREATE POLICY "Anyone can view pool requests" ON pool_requests
FOR SELECT USING (true);

-- 只有管理员可以更新请求状态（这里暂时允许所有人，实际部署时应该限制）
CREATE POLICY "Anyone can update pool requests" ON pool_requests
FOR UPDATE USING (true);

-- 评论表（可选，用于管理员添加处理备注）
CREATE TABLE IF NOT EXISTS pool_request_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  request_id UUID REFERENCES pool_requests(id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  created_by VARCHAR(255), -- 管理员标识
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_pool_request_comments_request_id ON pool_request_comments(request_id);
CREATE INDEX IF NOT EXISTS idx_pool_request_comments_created_at ON pool_request_comments(created_at DESC);