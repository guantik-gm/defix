import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ArrowLeft, ExternalLink, AlertTriangle, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Pool, SEOData } from '@/types';
import { DataLoader } from '@/lib/dataLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PoolDetailPageProps {
  pool: Pool;
  seoData: SEOData;
}

export default function PoolDetailPage({ pool, seoData }: PoolDetailPageProps) {
  const formatPercentage = (value: number) => `${(value * 100).toFixed(2)}%`;
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

  const getRiskBadgeColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": pool.name,
              "description": pool.description,
              "provider": {
                "@type": "Organization",
                "name": pool.protocol
              },
              "offers": {
                "@type": "Offer",
                "price": pool.apr,
                "priceCurrency": "USD"
              },
              "url": `${process.env.NEXT_PUBLIC_SITE_URL}/pool/${pool.slug}`,
              "category": pool.type,
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Chain",
                  "value": pool.chain
                },
                {
                  "@type": "PropertyValue",
                  "name": "TVL",
                  "value": pool.tvl
                },
                {
                  "@type": "PropertyValue",
                  "name": "Risk Level",
                  "value": pool.risk
                }
              ]
            })
          }}
        />
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

          {/* 页面标题 */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-foreground">{pool.name}</h1>
              <Badge className={getRiskBadgeColor(pool.risk)}>
                {pool.risk} 风险
              </Badge>
              <Badge variant="outline">{pool.chain}</Badge>
              <Badge variant="outline">{pool.type}</Badge>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl">
              {pool.description}
            </p>
          </div>

          {/* 关键指标卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">年化收益率</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {formatPercentage(pool.apr)}
                </div>
                <p className="text-xs text-muted-foreground">
                  预估年化收益
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">总锁定价值</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(pool.tvl)}
                </div>
                <p className="text-xs text-muted-foreground">
                  TVL
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">协议</CardTitle>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {pool.protocol.name}
                </div>
                <p className="text-xs text-muted-foreground">
                  DeFi 协议
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">更新时间</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {new Date(pool.updatedAt).toLocaleDateString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  最后更新
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 详细信息 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主要信息 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 投资策略 */}
              <Card>
                <CardHeader>
                  <CardTitle>投资策略</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">策略描述</h4>
                      <p className="text-muted-foreground">
                        {pool.description}
                      </p>
                    </div>
                    
                    {pool.tags && pool.tags.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">相关标签</h4>
                        <div className="flex flex-wrap gap-2">
                          {pool.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Token 信息 */}
              {pool.tokens && pool.tokens.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>支持的 Token</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {pool.tokens.map((token, index) => (
                        <Badge key={index} variant="outline">
                          {token}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* 侧边栏信息 */}
            <div className="space-y-6">
              {/* 风险提示 */}
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-800">
                    <AlertTriangle className="h-5 w-5" />
                    风险提示
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-yellow-700">
                    <p>• DeFi 投资存在智能合约风险</p>
                    <p>• APR 可能会随市场条件变化</p>
                    <p>• 请充分了解项目风险后投资</p>
                    <p>• 建议分散投资降低风险</p>
                  </div>
                </CardContent>
              </Card>

              {/* 快速操作 */}
              <Card>
                <CardHeader>
                  <CardTitle>快速操作</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pool.website && (
                    <Button className="w-full" asChild>
                      <a href={pool.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        访问官网
                      </a>
                    </Button>
                  )}
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/request">
                      更新信息
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 免责声明 */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-3">免责声明</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本页面提供的信息仅供参考，不构成投资建议。DeFi 投资具有高风险，可能导致本金损失。
              请在充分了解相关风险的前提下，谨慎做出投资决策。我们不对投资结果承担任何责任。
              建议在投资前咨询专业的财务顾问。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pools = await DataLoader.loadAllPools();
    const paths = pools.map(pool => ({
      params: { slug: pool.slug }
    }));

    return {
      paths,
      fallback: 'blocking' // 对于新的 slug，使用 ISR
    };
  } catch (error) {
    console.error('Failed to generate static paths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    const pools = await DataLoader.loadAllPools();
    const pool = pools.find(p => p.slug === slug);

    if (!pool) {
      return {
        notFound: true
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
    const pageUrl = `${baseUrl}/pool/${pool.slug}`;

    // 生成 SEO 数据
    const seoData: SEOData = {
      title: `${pool.name} - ${pool.protocol} | DeFi收益池详情`,
      description: `查看 ${pool.name} 的详细信息：年化收益率 ${(pool.apr * 100).toFixed(2)}%，TVL $${pool.tvl.toLocaleString()}，风险等级：${pool.risk}。${pool.description}`,
      keywords: `${pool.name}, ${pool.protocol}, ${pool.chain}, DeFi, 收益池, ${pool.type}, APR, TVL, ${pool.risk}风险`,
      canonical: pageUrl,
      openGraph: {
        title: `${pool.name} - ${pool.protocol}`,
        description: `年化收益率 ${(pool.apr * 100).toFixed(2)}% | TVL $${pool.tvl.toLocaleString()} | ${pool.risk}风险`,
        type: 'article',
        url: pageUrl,
        images: [
          {
            url: `${baseUrl}/og-image.png`,
            width: 1200,
            height: 630,
            alt: `${pool.name} - ${pool.protocol}`
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: `${pool.name} - ${pool.protocol}`,
        description: `年化收益率 ${(pool.apr * 100).toFixed(2)}% | TVL $${pool.tvl.toLocaleString()} | ${pool.risk}风险`,
        images: [`${baseUrl}/og-image.png`]
      }
    };

    return {
      props: {
        pool,
        seoData
      },
      revalidate: 3600 // 1小时重新生成
    };
  } catch (error) {
    console.error('Failed to load pool details:', error);
    return {
      notFound: true
    };
  }
};