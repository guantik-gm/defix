import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // 分析报告统一从research目录获取
    const researchHtmlPath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${slug}.html`);
    
    let content = '';
    
    // 加载 HTML 文件（分析报告）
    if (fs.existsSync(researchHtmlPath)) {
      content = fs.readFileSync(researchHtmlPath, 'utf8');
    }
    // 如果没有找到HTML文件
    else {
      return new NextResponse('Report not found', { status: 404 });
    }
    
    // 如果内容为空
    if (!content.trim()) {
      return new NextResponse('Empty report', { status: 404 });
    }
    
    // 返回原始HTML内容
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
    
  } catch (error) {
    console.error('Error loading analysis report:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}