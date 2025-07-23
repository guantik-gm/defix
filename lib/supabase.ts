import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// 客户端实例 (用于前端)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 服务端实例 (用于API路由)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// 数据库表名
export const TABLES = {
  USER_REQUESTS: 'user_requests'
} as const;

// 用户请求表结构
export interface UserRequestRow {
  id: string;
  pool_name: string;
  protocol_name: string;
  description: string;
  user_email?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  submitted_at: string;
  processed_at?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

// 创建用户请求
export async function createUserRequest(data: {
  poolName: string;
  protocolName: string;
  description: string;
  userEmail?: string;
}) {
  const { data: result, error } = await supabase
    .from(TABLES.USER_REQUESTS)
    .insert([
      {
        pool_name: data.poolName,
        protocol_name: data.protocolName,
        description: data.description,
        user_email: data.userEmail,
        status: 'pending',
        priority: 'medium',
        submitted_at: new Date().toISOString()
      }
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create user request: ${error.message}`);
  }

  return result;
}

// 获取用户请求列表
export async function getUserRequests(options: {
  status?: string;
  priority?: string;
  limit?: number;
  offset?: number;
} = {}) {
  let query = supabaseAdmin
    .from(TABLES.USER_REQUESTS)
    .select('*')
    .order('submitted_at', { ascending: false });

  if (options.status) {
    query = query.eq('status', options.status);
  }

  if (options.priority) {
    query = query.eq('priority', options.priority);
  }

  if (options.limit) {
    query = query.limit(options.limit);
  }

  if (options.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 20) - 1);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Failed to fetch user requests: ${error.message}`);
  }

  return data || [];
}

// 更新用户请求状态
export async function updateUserRequestStatus(
  id: string,
  status: 'pending' | 'in_progress' | 'completed' | 'rejected',
  notes?: string
) {
  const updateData: Partial<UserRequestRow> = {
    status,
    updated_at: new Date().toISOString()
  };

  if (status !== 'pending') {
    updateData.processed_at = new Date().toISOString();
  }

  if (notes) {
    updateData.notes = notes;
  }

  const { data, error } = await supabaseAdmin
    .from(TABLES.USER_REQUESTS)
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to update user request: ${error.message}`);
  }

  return data;
}

// 获取请求统计信息
export async function getRequestStats() {
  const { data, error } = await supabaseAdmin
    .from(TABLES.USER_REQUESTS)
    .select('status, priority')
    .order('submitted_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch request stats: ${error.message}`);
  }

  const stats = {
    total: data.length,
    byStatus: {
      pending: 0,
      in_progress: 0,
      completed: 0,
      rejected: 0
    },
    byPriority: {
      low: 0,
      medium: 0,
      high: 0
    }
  };

  data.forEach(item => {
    stats.byStatus[item.status as keyof typeof stats.byStatus]++;
    stats.byPriority[item.priority as keyof typeof stats.byPriority]++;
  });

  return stats;
}

// 创建数据库表的SQL
export const CREATE_TABLES_SQL = `
-- 用户请求表
CREATE TABLE IF NOT EXISTS user_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  pool_name TEXT NOT NULL,
  protocol_name TEXT NOT NULL,
  description TEXT NOT NULL,
  user_email TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'rejected')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  processed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_user_requests_status ON user_requests(status);
CREATE INDEX IF NOT EXISTS idx_user_requests_priority ON user_requests(priority);
CREATE INDEX IF NOT EXISTS idx_user_requests_submitted_at ON user_requests(submitted_at);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_requests_updated_at BEFORE UPDATE
ON user_requests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
`;

// 健康检查
export async function healthCheck(): Promise<{ status: 'ok' | 'error'; message: string }> {
  try {
    const { data, error } = await supabase
      .from(TABLES.USER_REQUESTS)
      .select('count')
      .limit(1);

    if (error) {
      return { status: 'error' as const, message: error.message };
    }

    return { status: 'ok' as const, message: 'Database connection successful' };
  } catch (error) {
    return { 
      status: 'error' as const, 
      message: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}