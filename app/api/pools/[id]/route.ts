import { NextRequest, NextResponse } from 'next/server';
import { mockPools, mockApiDelay } from '@/lib/mock-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 模拟API延迟
    await mockApiDelay(200);
    
    const { id } = params;
    
    // 查找对应的收益池
    const pool = mockPools.find(p => p.id === id);
    
    if (!pool) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Pool not found',
          message: '未找到指定的收益池'
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: pool
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: '获取收益池详情失败'
      },
      { status: 500 }
    );
  }
}