import { NextResponse } from 'next/server';
import { generateMockFilterOptions, mockApiDelay } from '@/lib/mock-data';

export async function GET() {
  try {
    // 模拟API延迟
    await mockApiDelay(100);
    
    const filters = generateMockFilterOptions();
    
    return NextResponse.json({
      success: true,
      data: filters
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: '获取过滤器选项失败'
      },
      { status: 500 }
    );
  }
}