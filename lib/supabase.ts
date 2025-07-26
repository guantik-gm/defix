import { createClient } from '@supabase/supabase-js';

// Supabase配置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 检查是否正确配置了Supabase
export const isSupabaseConfigured = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_url_here' && 
  supabaseAnonKey !== 'your_supabase_anon_key_here';

// 创建Supabase客户端（仅在配置正确时）
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl!, supabaseAnonKey!) 
  : null;

// 用户请求提交的数据类型
export interface SubmissionRequest {
  id?: string;
  type: 'protocol_inclusion' | 'data_correction' | 'other_feedback';
  protocol_name?: string; // 协议收录时必填
  official_website?: string; // 协议收录时必填
  contact_email: string; // 必填
  description?: string; // 数据纠错和其他反馈时必填
  status: 'pending' | 'in_review' | 'approved' | 'rejected';
  created_at?: string;
  updated_at?: string;
}

// 提交新的收录请求
export async function submitPoolRequest(request: Omit<SubmissionRequest, 'id' | 'status' | 'created_at' | 'updated_at'>) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase未配置，无法提交请求' };
  }

  try {
    // 验证必填字段
    if (!request.contact_email) {
      return { success: false, error: '联系邮箱是必填项' };
    }

    if (request.type === 'protocol_inclusion') {
      if (!request.protocol_name || !request.official_website) {
        return { success: false, error: '协议收录请求需要填写协议名称和官方网站' };
      }
    }

    if ((request.type === 'data_correction' || request.type === 'other_feedback') && !request.description) {
      return { success: false, error: '数据纠错和其他反馈需要填写问题描述' };
    }

    const { data, error } = await supabase
      .from('pool_requests')
      .insert([
        {
          ...request,
          status: 'pending',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting request:', error);
    return { success: false, error: error instanceof Error ? error.message : '提交失败' };
  }
}

// 获取所有请求（管理员用）
export async function getAllRequests() {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase未配置，无法获取请求' };
  }

  try {
    const { data, error } = await supabase
      .from('pool_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error fetching requests:', error);
    return { success: false, error: error instanceof Error ? error.message : '获取请求失败' };
  }
}

// 更新请求状态（管理员用）
export async function updateRequestStatus(id: string, status: SubmissionRequest['status']) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase未配置，无法更新请求状态' };
  }

  try {
    const { data, error } = await supabase
      .from('pool_requests')
      .update({ 
        status, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error updating request:', error);
    return { success: false, error: error instanceof Error ? error.message : '更新状态失败' };
  }
}

// 删除请求（管理员用）
export async function deleteRequest(id: string) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase未配置，无法删除请求' };
  }

  try {
    console.log('开始执行数据库删除操作，ID:', id);
    
    // 先检查记录是否存在
    const { data: existingRecord, error: checkError } = await supabase
      .from('pool_requests')
      .select('id')
      .eq('id', id)
      .single();
    
    console.log('检查记录是否存在:', existingRecord, checkError);
    
    if (checkError && checkError.code !== 'PGRST116') {
      console.error('检查记录时出错:', checkError);
      return { success: false, error: `检查记录失败: ${checkError.message}` };
    }
    
    if (!existingRecord) {
      console.log('记录不存在，ID:', id);
      return { success: false, error: '要删除的记录不存在' };
    }
    
    // 执行删除操作
    const { data, error } = await supabase
      .from('pool_requests')
      .delete()
      .eq('id', id)
      .select();

    console.log('删除操作结果:', { data, error });

    if (error) {
      console.error('Supabase删除错误:', error);
      throw error;
    }

    console.log('删除成功，返回的数据:', data);
    return { success: true, data };
  } catch (error) {
    console.error('删除请求时发生异常:', error);
    return { success: false, error: error instanceof Error ? error.message : '删除请求失败' };
  }
}

export default supabase;