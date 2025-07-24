import React from 'react';

interface StructuredDataProps {
  type: 'website' | 'article' | 'breadcrumbs';
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "DeFi收益池聚合平台",
          "description": "为Web3 DeFi玩家提供专业的收益池信息聚合服务，包含详细的调研报告、风险评估和实时收益数据。",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DeFi收益池聚合平台",
            "url": baseUrl
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "DeFi收益池列表",
            "description": "经过专业调研的DeFi收益池项目",
            "numberOfItems": data?.totalPools || 10
          }
        };
        
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "DeFi项目分析报告",
          "description": data?.description || "专业的DeFi项目调研和分析报告",
          "author": {
            "@type": "Organization",
            "name": "DeFi收益池聚合平台专业团队"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DeFi收益池聚合平台",
            "url": baseUrl
          },
          "datePublished": data?.publishedDate || new Date().toISOString(),
          "dateModified": data?.modifiedDate || new Date().toISOString(),
          "url": data?.url || baseUrl,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || baseUrl
          },
          "articleSection": "DeFi分析",
          "keywords": ["DeFi", "收益池", "区块链", "投资分析", "风险评估"],
          "about": {
            "@type": "Thing",
            "name": data?.protocol || "DeFi协议",
            "description": "去中心化金融协议分析"
          }
        };
        
      case 'breadcrumbs':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        };
        
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

// 特定用途的结构化数据组件
export function WebsiteStructuredData({ totalPools }: { totalPools?: number }) {
  return <StructuredData type="website" data={{ totalPools }} />;
}

export function ArticleStructuredData({ 
  title, 
  description, 
  url, 
  publishedDate, 
  modifiedDate,
  protocol 
}: {
  title?: string;
  description?: string;
  url?: string;
  publishedDate?: string;
  modifiedDate?: string;
  protocol?: string;
}) {
  return (
    <StructuredData 
      type="article" 
      data={{ 
        title, 
        description, 
        url, 
        publishedDate, 
        modifiedDate, 
        protocol 
      }} 
    />
  );
}

export function BreadcrumbsStructuredData({ 
  breadcrumbs 
}: { 
  breadcrumbs: Array<{ name: string; url: string }> 
}) {
  return <StructuredData type="breadcrumbs" data={{ breadcrumbs }} />;
}