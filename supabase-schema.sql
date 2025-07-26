-- Supabase 数据库表结构
-- 删除旧表（如果存在）
DROP TABLE IF EXISTS pool_requests;

-- 创建简化的请求表
CREATE TABLE pool_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type VARCHAR(50) NOT NULL CHECK (type IN ('protocol_inclusion', 'data_correction', 'other_feedback')),
  protocol_name VARCHAR(255), -- 协议名称（协议收录时必填）
  official_website TEXT, -- 官方网站（协议收录时必填）
  contact_email VARCHAR(255) NOT NULL, -- 联系邮箱（必填）
  description TEXT, -- 问题描述（数据纠错和其他反馈时必填）
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_review', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX idx_pool_requests_type ON pool_requests(type);
CREATE INDEX idx_pool_requests_status ON pool_requests(status);
CREATE INDEX idx_pool_requests_created_at ON pool_requests(created_at);

-- 添加行级安全策略（RLS）
ALTER TABLE pool_requests ENABLE ROW LEVEL SECURITY;

-- 允许插入新请求（公开访问）
CREATE POLICY "Allow insert requests" ON pool_requests
FOR INSERT WITH CHECK (true);

-- 允许查看所有请求（仅管理员，这里暂时允许所有人查看）
CREATE POLICY "Allow select requests" ON pool_requests
FOR SELECT USING (true);

-- 允许更新请求状态（仅管理员，这里暂时允许所有人更新）
CREATE POLICY "Allow update requests" ON pool_requests
FOR UPDATE USING (true);

-- 添加触发器自动更新 updated_at 字段
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_pool_requests_updated_at 
BEFORE UPDATE ON pool_requests 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();