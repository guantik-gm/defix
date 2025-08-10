import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // 检查 markdown 文件
    const markdownPath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${slug}.md`);
    const htmlPath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${slug}.html`);
    
    let content = '';
    let type: 'markdown' | 'html' = 'markdown';
    let title = '';
    let protocol = '';
    let lastModified = '';

    // 优先尝试加载 markdown 文件
    if (fs.existsSync(markdownPath)) {
      const fileContent = fs.readFileSync(markdownPath, 'utf8');
      const stats = fs.statSync(markdownPath);
      lastModified = stats.mtime.toISOString();
      
      try {
        // 尝试解析 frontmatter
        const { data, content: markdownContent } = matter(fileContent);
        title = data.title || data.Title || `${slug} 调研报告`;
        protocol = data.protocol || data.Protocol || '';
        
        // 将 markdown 转换为 HTML
        const processedContent = await remark()
          .use(remarkGfm)
          .use(html, { sanitize: false })
          .process(markdownContent);
        content = processedContent.toString();
      } catch (parseError) {
        // 如果 frontmatter 解析失败，直接处理整个文件作为 markdown
        const processedContent = await remark()
          .use(remarkGfm)
          .use(html, { sanitize: false })
          .process(fileContent);
        content = processedContent.toString();
        title = `${slug} 调研报告`;
      }
      
      type = 'markdown';
    }
    // 如果没有 markdown 文件，尝试 HTML 文件
    else if (fs.existsSync(htmlPath)) {
      content = fs.readFileSync(htmlPath, 'utf8');
      const stats = fs.statSync(htmlPath);
      lastModified = stats.mtime.toISOString();
      title = `${slug} 调研报告`;
      type = 'html';
    }
    // 如果都没有找到
    else {
      return NextResponse.json(
        {
          success: false,
          error: 'Report not found',
          message: '未找到指定的调研报告'
        },
        { status: 404 }
      );
    }

    // 如果内容为空
    if (!content.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Empty report',
          message: '报告内容为空'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        title,
        content,
        lastModified,
        protocol,
        type,
      }
    });

  } catch (error) {
    console.error('Error loading research report:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: '加载调研报告时出错'
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed',
      message: '不支持的请求方法'
    },
    { status: 405 }
  );
}