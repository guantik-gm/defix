import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReportResponse, SEOData } from '@/types';

interface AnalysisReportPageProps {
  report: ReportResponse;
  nickname: string;
  seoData: SEOData;
}

export default function AnalysisReportPage({ report, nickname, seoData }: AnalysisReportPageProps) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        {seoData.openGraph && (
          <>
            <meta property="og:title" content={seoData.openGraph.title} />
            <meta property="og:description" content={seoData.openGraph.description} />
            <meta property="og:type" content={seoData.openGraph.type} />
            <meta property="og:url" content={seoData.openGraph.url} />
            {seoData.openGraph.images.map((image, index) => (
              <meta key={index} property="og:image" content={image.url} />
            ))}
          </>
        )}
        
        {/* Twitter */}
        {seoData.twitter && (
          <>
            <meta name="twitter:card" content={seoData.twitter.card} />
            <meta name="twitter:title" content={seoData.twitter.title} />
            <meta name="twitter:description" content={seoData.twitter.description} />
            {seoData.twitter.images.map((image, index) => (
              <meta key={index} name="twitter:image" content={image} />
            ))}
          </>
        )}

        {/* Canonical URL */}
        {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
      </Head>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* 返回按钮 */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                返回首页
              </Button>
            </Link>
          </div>

          {/* 报告标题 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {report.metadata.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>协议: {nickname}</span>
              <span>最后更新: {new Date(report.metadata.lastModified).toLocaleDateString()}</span>
              <span>文件大小: {Math.round(report.metadata.fileSize / 1024)}KB</span>
            </div>
          </div>

          {/* 报告内容 */}
          <div className="w-full">
            <div 
              dangerouslySetInnerHTML={{ __html: report.content }}
              className="analysis-content w-full"
            />
          </div>

          {/* 免责声明 */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-3">免责声明</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本分析报告基于数据分析和市场情况，仅供参考，不构成投资建议。
              DeFi 投资具有高风险，可能导致本金损失。请在充分了解相关风险的前提下，
              谨慎做出投资决策。我们不对投资结果承担任何责任。
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .analysis-content {
          line-height: 1.6;
        }

        .analysis-content * {
          max-width: 100%;
        }

        .analysis-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }

        .analysis-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
          font-size: 0.9rem;
        }

        .analysis-content th,
        .analysis-content td {
          border: 1px solid #e5e7eb;
          padding: 0.75rem;
          text-align: left;
        }

        .analysis-content th {
          background-color: #f9fafb;
          font-weight: 600;
        }

        .analysis-content pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }

        .analysis-content code {
          background-color: #f3f4f6;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .analysis-content pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }

        .analysis-content blockquote {
          border-left: 4px solid #d1d5db;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #6b7280;
        }

        .analysis-content h1,
        .analysis-content h2,
        .analysis-content h3,
        .analysis-content h4,
        .analysis-content h5,
        .analysis-content h6 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
          line-height: 1.25;
        }

        .analysis-content h1 {
          font-size: 2rem;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.5rem;
        }

        .analysis-content h2 {
          font-size: 1.5rem;
        }

        .analysis-content h3 {
          font-size: 1.25rem;
        }

        .analysis-content p {
          margin-bottom: 1rem;
        }

        .analysis-content ul,
        .analysis-content ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
        }

        .analysis-content li {
          margin-bottom: 0.5rem;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .analysis-content {
            font-size: 0.9rem;
          }
          
          .analysis-content table {
            font-size: 0.8rem;
          }
          
          .analysis-content th,
          .analysis-content td {
            padding: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, req, res }) => {
  try {
    const nickname = params?.nickname as string;
    
    if (!nickname) {
      return { notFound: true };
    }

    // 调用API获取报告内容
    const baseUrl = req.headers.host?.includes('localhost') 
      ? `http://${req.headers.host}` 
      : `https://${req.headers.host}`;
    
    const apiResponse = await fetch(`${baseUrl}/api/reports/analysis/${encodeURIComponent(nickname)}`);
    
    if (!apiResponse.ok) {
      return { notFound: true };
    }

    const report: ReportResponse = await apiResponse.json();
    const pageUrl = `${baseUrl}/reports/analysis/${encodeURIComponent(nickname)}`;

    // 生成SEO数据
    const seoData: SEOData = {
      title: `${report.metadata.title} | DeFi分析报告`,
      description: report.metadata.description || `${nickname} 协议的详细分析报告，包含数据分析、市场表现、技术评估等信息。`,
      keywords: `${nickname}, DeFi, 分析报告, ${report.metadata.keywords.join(', ')}`,
      canonical: pageUrl,
      openGraph: {
        title: report.metadata.title,
        description: report.metadata.description || `${nickname} 协议分析报告`,
        type: 'article',
        url: pageUrl,
        images: [
          {
            url: `${baseUrl}/og-analysis.png`,
            width: 1200,
            height: 630,
            alt: `${nickname} 分析报告`
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: report.metadata.title,
        description: report.metadata.description || `${nickname} 协议分析报告`,
        images: [`${baseUrl}/og-analysis.png`]
      }
    };

    // 设置缓存头
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate');

    return {
      props: {
        report,
        nickname,
        seoData
      }
    };
  } catch (error) {
    console.error('Failed to load analysis report:', error);
    return { notFound: true };
  }
};