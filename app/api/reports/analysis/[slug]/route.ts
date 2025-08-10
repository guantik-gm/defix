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
    
    // 分析报告统一从research目录获取
    const researchHtmlPath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${slug}.html`);
    const researchMarkdownPath = path.join(process.cwd(), 'web3', 'protocol', 'research', `${slug}.md`);
    
    let content = '';
    let type: 'markdown' | 'html' = 'markdown';
    let title = '';
    let protocol = '';
    let lastModified = '';
    let metrics: { risk?: string; apr?: string; liquidity?: string } = {};

    // 优先尝试加载 HTML 文件（分析报告）
    if (fs.existsSync(researchHtmlPath)) {
      content = fs.readFileSync(researchHtmlPath, 'utf8');
      const stats = fs.statSync(researchHtmlPath);
      lastModified = stats.mtime.toISOString();
      title = `${slug} 分析报告`;
      type = 'html';
      
      // 尝试从HTML中提取协议信息和指标
      const protocolMatch = content.match(/协议[：:]\s*([^<\n]+)/i);
      protocol = protocolMatch ? protocolMatch[1].trim() : '';
      
      // 尝试提取风险等级
      const riskMatch = content.match(/风险等级[：:]\s*([^<\n]+)/i);
      if (riskMatch) metrics.risk = riskMatch[1].trim();
      
      // 尝试提取APR信息
      const aprMatch = content.match(/APR[：:]\s*([^<\n%]+%?)/i);
      if (aprMatch) metrics.apr = aprMatch[1].trim();
      
      // 尝试提取流动性信息
      const liquidityMatch = content.match(/流动性[：:]\s*([^<\n]+)/i);
      if (liquidityMatch) metrics.liquidity = liquidityMatch[1].trim();
      
    }
    // 其次尝试 Markdown 文件（作为分析报告的备用格式）
    else if (fs.existsSync(researchMarkdownPath)) {
      const fileContent = fs.readFileSync(researchMarkdownPath, 'utf8');
      const stats = fs.statSync(researchMarkdownPath);
      lastModified = stats.mtime.toISOString();
      
      try {
        // 尝试解析 frontmatter
        const { data, content: markdownContent } = matter(fileContent);
        title = data.title || data.Title || `${slug} 分析报告`;
        protocol = data.protocol || data.Protocol || '';
        
        // 解析分析指标
        if (data.risk || data.Risk) {
          metrics.risk = data.risk || data.Risk;
        }
        if (data.apr || data.APR || data['apr-range']) {
          metrics.apr = data.apr || data.APR || data['apr-range'];
        }
        if (data.liquidity || data.Liquidity) {
          metrics.liquidity = data.liquidity || data.Liquidity;
        }
        
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
        title = `${slug} 分析报告`;
      }
      
      type = 'markdown';
    }
    // 如果都没有找到
    else {
      return NextResponse.json(
        {
          success: false,
          error: 'Analysis not found',
          message: '未找到指定的分析报告'
        },
        { status: 404 }
      );
    }

    // 如果内容为空
    if (!content.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Empty analysis',
          message: '分析报告内容为空'
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
        metrics: Object.keys(metrics).length > 0 ? metrics : undefined,
      }
    });

  } catch (error) {
    console.error('Error loading analysis report:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: '加载分析报告时出错'
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