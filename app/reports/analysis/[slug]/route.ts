import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getPairedReportInfo } from '@/lib/reports';

/**
 * 生成 Google Analytics 追踪代码
 */
function generateGoogleAnalyticsCode(slug: string) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  
  if (!gaId) return '';
  
  return `
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'reading_time',
          'custom_parameter_2': 'scroll_depth'
        }
      });
      
      // 追踪分析报告查看事件
      gtag('event', 'view_analysis_report', {
        event_category: 'report_interaction',
        event_label: '${slug}',
      });
      
      // 初始化会话追踪
      const sessionStart = Date.now();
      sessionStorage.setItem('ga_session_start', sessionStart.toString());
      
      // 追踪滚动深度
      let maxScrollDepth = 0;
      window.addEventListener('scroll', function() {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          if ([25, 50, 75, 100].includes(scrollDepth)) {
            gtag('event', 'scroll_depth', {
              event_category: 'user_engagement',
              event_label: scrollDepth + '%'
            });
          }
        }
      });
      
      // 页面卸载时追踪阅读时长
      window.addEventListener('beforeunload', function() {
        const sessionEnd = Date.now();
        const readingTime = Math.round((sessionEnd - sessionStart) / 1000);
        gtag('event', 'report_reading_time', {
          event_category: 'report_engagement',
          event_label: '${slug}',
          value: readingTime
        });
      });
    </script>
  `;
}

/**
 * 生成 Vercel Analytics 代码
 */
function generateVercelAnalyticsCode() {
  return `
    <!-- Vercel Analytics -->
    <script defer src="/_vercel/insights/script.js"></script>
  `;
}

/**
 * 生成导航栏HTML和CSS
 */
function generateNavigationBar(slug: string, hasResearchReport: boolean) {
  const navigationCSS = `
    <style>
      .defix-nav-bar {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        background: rgba(255, 255, 255, 0.98) !important;
        backdrop-filter: blur(10px) !important;
        border-bottom: 1px solid #e5e7eb !important;
        z-index: 99999 !important;
        padding: 12px 0 !important;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15) !important;
        display: block !important;
        visibility: visible !important;
      }
      .defix-nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }
      .defix-nav-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.2s ease;
        text-decoration: none;
        height: 36px;
        padding: 0 12px;
        border: 1px solid #d1d5db;
        background: #ffffff;
        color: #374151;
      }
      .defix-nav-btn:hover {
        background: #f9fafb;
        color: #1f2937;
      }
      .defix-nav-btn-primary {
        background: #2563eb;
        color: #ffffff;
        border-color: #2563eb;
      }
      .defix-nav-btn-primary:hover {
        background: #1d4ed8;
        color: #ffffff;
      }
      .defix-nav-icon {
        width: 16px;
        height: 16px;
        margin-right: 6px;
      }
      /* Hide original headers that might conflict */
      header.sticky, header[class*="sticky"] {
        position: relative !important;
        top: auto !important;
        z-index: 1 !important;
      }
      body {
        padding-top: 60px !important;
      }
      @media (max-width: 640px) {
        .defix-nav-container {
          flex-direction: column;
          gap: 8px;
        }
        .defix-nav-btn {
          width: 100%;
          justify-content: center;
        }
        body {
          padding-top: 120px !important;
        }
      }
    </style>
  `;

  const navigationHTML = `
    <div class="defix-nav-bar" style="position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; z-index: 99999 !important; background: rgba(255, 255, 255, 0.98) !important; padding: 12px 0 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important; display: block !important;">
      <div class="defix-nav-container" style="max-width: 1200px; margin: 0 auto; padding: 0 16px; display: flex; gap: 12px; align-items: center;">
        <a href="/" class="defix-nav-btn" style="display: inline-flex; align-items: center; padding: 8px 12px; background: white; border: 1px solid #d1d5db; border-radius: 6px; text-decoration: none; color: #374151; font-size: 14px; font-weight: 500;">
          <svg style="width: 16px; height: 16px; margin-right: 6px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          返回首页
        </a>
        ${hasResearchReport ? `
          <a href="/reports/research/${slug}" class="defix-nav-btn defix-nav-btn-primary" style="display: inline-flex; align-items: center; padding: 8px 12px; background: #2563eb; border: 1px solid #2563eb; border-radius: 6px; text-decoration: none; color: white; font-size: 14px; font-weight: 500;">
            <svg style="width: 16px; height: 16px; margin-right: 6px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            查看详细调研报告
          </a>
        ` : ''}
      </div>
    </div>
  `;

  return { navigationCSS, navigationHTML };
}

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
    
    // 检测对应的调研报告是否存在
    const pairedReport = getPairedReportInfo(slug, 'analysis');
    
    // 生成导航栏和追踪代码
    const { navigationCSS, navigationHTML } = generateNavigationBar(slug, pairedReport.exists);
    const googleAnalyticsCode = generateGoogleAnalyticsCode(slug);
    const vercelAnalyticsCode = generateVercelAnalyticsCode();
    
    // 注入导航栏和追踪代码到HTML中
    let enhancedContent = content;
    
    // 在 </head> 标签前注入CSS和追踪代码
    if (enhancedContent.includes('</head>')) {
      enhancedContent = enhancedContent.replace('</head>', `${navigationCSS}\n${googleAnalyticsCode}\n${vercelAnalyticsCode}\n</head>`);
    }
    
    // 在 <body> 标签后注入导航栏HTML
    if (enhancedContent.includes('<body')) {
      // 找到<body>标签的结束位置
      const bodyTagEnd = enhancedContent.indexOf('>', enhancedContent.indexOf('<body'));
      if (bodyTagEnd !== -1) {
        enhancedContent = enhancedContent.slice(0, bodyTagEnd + 1) + 
          `\n${navigationHTML}\n` + 
          enhancedContent.slice(bodyTagEnd + 1);
      }
    }
    
    // 返回增强后的HTML内容
    return new NextResponse(enhancedContent, {
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