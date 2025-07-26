import { NextRequest, NextResponse } from 'next/server';
import { submitPoolRequest, getAllRequests, updateRequestStatus, isSupabaseConfigured } from '@/lib/supabase';

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
      type,
      protocolName, 
      officialWebsite,
      contactEmail,
      description
    } = body;
    
    // 验证必填字段
    if (!type || !contactEmail) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          message: '请填写所有必填字段'
        },
        { status: 400 }
      );
    }

    // 验证协议收录的必填字段
    if (type === 'protocol_inclusion' && (!protocolName || !officialWebsite)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          message: '协议收录请求需要填写协议名称和官方网站'
        },
        { status: 400 }
      );
    }

    // 验证数据纠错和其他反馈的必填字段
    if ((type === 'data_correction' || type === 'other_feedback') && !description) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          message: '数据纠错和其他反馈需要填写问题描述'
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

    // URL验证（仅对协议收录请求）
    if (type === 'protocol_inclusion' && officialWebsite) {
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
    }

    // 构建提交数据
    const submitData = {
      type: type.trim(),
      protocol_name: protocolName?.trim() || null,
      official_website: officialWebsite?.trim() || null,
      contact_email: contactEmail.trim(),
      description: description?.trim() || null,
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
        type: result.data?.[0]?.type,
      },
      message: type === 'protocol_inclusion' 
        ? '协议收录请求提交成功，我们将在3-7个工作日内进行评估'
        : '反馈提交成功，我们将尽快处理您的问题'
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

export async function PATCH(request: NextRequest) {
  try {
    // 检查Supabase是否已配置
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        {
          success: false,
          error: 'Configuration error',
          message: 'Supabase数据库未配置，暂时无法更新请求状态'
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { id, status } = body;

    // 验证必填字段
    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          message: '请求ID和状态是必填项'
        },
        { status: 400 }
      );
    }

    // 验证状态值
    const validStatuses = ['pending', 'in_review', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          message: '无效的状态值'
        },
        { status: 400 }
      );
    }

    // 更新请求状态
    const result = await updateRequestStatus(id, status);

    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database error',
          message: result.error || '更新状态失败'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: '状态更新成功'
    });
    
  } catch (error) {
    console.error('Update request status error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: '更新状态失败，请稍后重试'
      },
      { status: 500 }
    );
  }
}