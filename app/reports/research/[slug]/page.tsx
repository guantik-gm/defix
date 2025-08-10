'use client';

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, FileText, Calendar, ExternalLink, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArticleStructuredData, BreadcrumbsStructuredData } from '@/components/StructuredData';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';
import { trackReportEvent, trackUserInteraction } from '@/lib/analytics';

interface ReportData {
  title: string;
  content: string;
  lastModified: string;
  protocol?: string;
  type: 'markdown' | 'html';
}

interface PairedReportInfo {
  exists: boolean;
  url: string | null;
  title: string;
  type: 'analysis' | 'research';
}

export default function ResearchReportPage({ params }: { params: { slug: string } }) {
  const [report, setReport] = useState<ReportData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pairedReport, setPairedReport] = useState<PairedReportInfo | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        
        // 并行获取报告内容和配对报告信息
        const [reportResponse, pairedResponse] = await Promise.all([
          fetch(`/api/reports/research/${params.slug}`),
          fetch(`/api/reports/check/${params.slug}?type=research`)
        ]);
        
        // 处理报告内容
        if (!reportResponse.ok) {
          if (reportResponse.status === 404) {
            notFound();
          }
          throw new Error('Failed to fetch report');
        }

        const reportData = await reportResponse.json();
        if (reportData.success) {
          setReport(reportData.data);
          
          // 追踪调研报告查看事件
          trackReportEvent.viewResearchReport(params.slug);
        } else {
          setError(reportData.message || 'Failed to load report');
        }
        
        // 处理配对报告信息
        if (pairedResponse.ok) {
          const pairedData = await pairedResponse.json();
          if (pairedData.success) {
            setPairedReport(pairedData.data);
          }
        }
        
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('加载报告时出错');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [params.slug]);

  if (isLoading) {
    return <ReportPageSkeleton />;
  }

  if (error || !report) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">报告加载失败</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '调研报告', url: '/reports/research' },
    { name: report.title, url: `/reports/research/${params.slug}` }
  ];

  return (
    <>
      {/* SEO 结构化数据 */}
      <ArticleStructuredData
        title={report.title}
        description={`${report.protocol || ''} 调研报告 - 专业的DeFi项目分析`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/reports/research/${params.slug}`}
        publishedDate={report.lastModified}
        modifiedDate={report.lastModified}
        protocol={report.protocol}
      />
      <BreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
        {/* 导航栏 */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
            
            {pairedReport?.exists && pairedReport.url && (
              <Link href={pairedReport.url} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                <BarChart3 className="w-4 h-4 mr-2" />
                {pairedReport.title}
              </Link>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {report.title}
                </h1>
                {report.protocol && (
                  <p className="text-lg text-gray-600">
                    协议：{report.protocol}
                  </p>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(report.lastModified).toLocaleDateString('zh-CN')}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <FileText className="w-3 h-3 mr-1" />
                调研报告
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {report.type === 'markdown' ? 'Markdown' : 'HTML'}
              </span>
            </div>
          </div>
        </div>

        {/* 报告内容 */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: report.content }}
            />
          </div>
        </div>

        {/* 页脚 */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            此报告由专业调研团队提供，内容仅供参考，投资需谨慎
          </p>
          <p className="mt-2">
            如有问题或建议，请{' '}
            <Link href="/request" className="text-blue-600 hover:underline">
              提交反馈
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

// 骨架屏组件
function ReportPageSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="loading-skeleton h-10 w-32 mb-4"></div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="loading-skeleton h-8 w-96 mb-2"></div>
                <div className="loading-skeleton h-6 w-48"></div>
              </div>
              <div className="loading-skeleton h-5 w-24"></div>
            </div>
            <div className="flex gap-2">
              <div className="loading-skeleton h-6 w-20"></div>
              <div className="loading-skeleton h-6 w-16"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <div className="space-y-4">
              <div className="loading-skeleton h-4 w-full"></div>
              <div className="loading-skeleton h-4 w-5/6"></div>
              <div className="loading-skeleton h-4 w-4/5"></div>
              <div className="loading-skeleton h-4 w-full"></div>
              <div className="loading-skeleton h-4 w-3/4"></div>
              <div className="loading-skeleton h-32 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}