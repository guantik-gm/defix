import { NextResponse } from 'next/server';
import { generateFilterOptions, apiDelay } from '@/lib/file-data-parser';

export async function GET() {
  try {
    // 模拟API延迟
    await apiDelay(100);
    
    // 从文件系统生成过滤器选项
    const filters = await generateFilterOptions();
    
    return NextResponse.json({
      success: true,
      data: filters
    });
    
  } catch (error) {
    console.error('Filters API Error:', error);
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