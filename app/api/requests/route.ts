import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { mockApiDelay } from '@/lib/mock-data';
import { generateId } from '@/lib/utils';
import { RequestType, RiskLevel, RequestStatus } from '@/types';

// Supabase 配置（开发环境使用 mock 数据）
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 模拟存储用户请求（当 Supabase 未配置时使用）
const mockRequests: any[] = [];

export async function POST(request: NextRequest) {
  try {
    // 模拟API延迟
    await mockApiDelay(500);
    
    const body = await request.json();
    const { 
      type, 
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
    
    // 创建新请求记录
    const newRequest = {
      id: generateId(),
      type: type || RequestType.POOL_INCLUSION,
      pool_name: poolName,
      protocol_name: protocolName,
      official_website: officialWebsite,
      chain: Array.isArray(chain) ? chain : [chain],
      token,
      investment_type: investmentType,
      expected_apr: expectedAPR,
      risk_level: riskLevel || RiskLevel.MEDIUM,
      contact_email: contactEmail,
      additional_info: additionalInfo,
      status: RequestStatus.PENDING,
      priority: 'medium',
      submitted_at: new Date().toISOString(),
      processed_at: null,
      notes: null,
    };

    // 如果配置了 Supabase，存储到数据库
    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        const { data, error } = await supabase
          .from('user_requests')
          .insert([newRequest])
          .select();

        if (error) {
          console.error('Supabase error:', error);
          // 如果 Supabase 失败，回退到 mock 存储
          mockRequests.push(newRequest);
        } else {
          console.log('请求已存储到 Supabase:', data);
        }
      } catch (supabaseError) {
        console.error('Supabase connection error:', supabaseError);
        // 如果 Supabase 连接失败，回退到 mock 存储
        mockRequests.push(newRequest);
      }
    } else {
      // 使用 mock 存储
      mockRequests.push(newRequest);
      console.log('请求已存储到 mock 数据:', newRequest);
    }
    
    return NextResponse.json({
      success: true,
      data: {
        requestId: newRequest.id,
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
    // 模拟API延迟
    await mockApiDelay(200);
    
    // 返回所有请求（仅用于开发调试）
    return NextResponse.json({
      success: true,
      data: mockRequests
    });
    
  } catch (error) {
    console.error('API Error:', error);
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