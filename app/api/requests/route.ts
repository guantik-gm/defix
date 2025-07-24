import { NextRequest, NextResponse } from 'next/server';
import { submitPoolRequest, getAllRequests, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // 检查Supabase是否已配置
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        {
          success: false,
          error: 'Configuration error',
          message: 'Supabase数据库未配置，暂时无法提交请求'
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { 
      poolName, 
      protocolName, 
      officialWebsite,
      chain,
      token,
      investmentType,
      expectedAPR,
      riskLevel,
      contactEmail,
      additionalInfo
    } = body;
    
    // 验证必填字段
    if (!poolName || !protocolName || !officialWebsite || !contactEmail || !chain?.length) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          message: '请填写所有必填字段'
        },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          message: '请输入有效的邮箱地址'
        },
        { status: 400 }
      );
    }

    // URL验证
    try {
      new URL(officialWebsite);
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation error',
          message: '请提供有效的协议网站链接'
        },
        { status: 400 }
      );
    }

    // 构建提交数据
    const submitData = {
      protocol_name: protocolName.trim(),
      protocol_website: officialWebsite.trim(),
      pool_type: `${poolName} - ${investmentType || 'Unknown'}`.trim(),
      chain: Array.isArray(chain) ? chain.join(', ') : chain,
      description: `收益池: ${poolName}\n代币: ${token || 'N/A'}\n预期APR: ${expectedAPR || 'N/A'}\n风险等级: ${riskLevel || 'N/A'}\n\n额外信息: ${additionalInfo || '无'}`.trim(),
      submitter_contact: contactEmail.trim(),
    };

    // 提交到Supabase
    const result = await submitPoolRequest(submitData);

    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database error',
          message: result.error || '提交失败，请稍后重试'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        requestId: result.data?.[0]?.id,
      },
      message: '请求提交成功，我们将在3-7个工作日内进行评估'
    });
    
  } catch (error) {
    console.error('Request submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: '提交失败，请稍后重试'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // 检查Supabase是否已配置
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        {
          success: false,
          error: 'Configuration error',
          message: 'Supabase数据库未配置，暂时无法获取请求列表'
        },
        { status: 503 }
      );
    }

    // 获取所有请求（用于管理后台）
    const result = await getAllRequests();
    
    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database error',
          message: result.error || '获取请求失败'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data
    });
    
  } catch (error) {
    console.error('Get requests error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: '获取请求列表失败'
      },
      { status: 500 }
    );
  }
}