import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Plus } from 'lucide-react';
import { Pool, FilterOptions, SearchFilters, PoolsResponse, PaginationInfo, SEOData } from '@/types';
import { DataLoader } from '@/lib/dataLoader';
import { DEFAULT_SEO } from '@/lib/constants';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { PoolTable } from '@/components/PoolTable';
import { Pagination } from '@/components/Pagination';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  pools: Pool[];
  filters: FilterOptions;
  seoData: SEOData;
  total: number;
}

export default function HomePage({ pools: initialPools, filters, seoData, total }: HomePageProps) {
  const [pools, setPools] = useState<Pool[]>(initialPools);
  const [loading, setLoading] = useState(false);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(total);
  
  const limit = 20;

  // 计算分页信息
  const paginationInfo: PaginationInfo = useMemo(() => ({
    page: currentPage,
    limit,
    total: totalItems,
    totalPages: Math.ceil(totalItems / limit)
  }), [currentPage, totalItems]);

  // 获取数据的函数
  const fetchPools = async (
    filters: SearchFilters = {},
    page: number = 1,
    sort: string = 'name',
    order: 'asc' | 'desc' = 'asc'
  ) => {
    setLoading(true);
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        sortBy: sort,
        sortOrder: order,
        ...Object.fromEntries(
          Object.entries(filters).map(([key, value]) => [
            key,
            Array.isArray(value) ? value.join(',') : value?.toString() || ''
          ]).filter(([, value]) => value !== '')
        )
      });

      const response = await fetch(`/api/pools?${params}`);
      const data: PoolsResponse = await response.json();
      
      setPools(data.pools);
      setTotalItems(data.total);
    } catch (error) {
      console.error('Failed to fetch pools:', error);
    } finally {
      setLoading(false);
    }
  };

  // 处理搜索
  const handleSearch = (searchTerm: string) => {
    const newFilters = { ...searchFilters, search: searchTerm || undefined };
    setSearchFilters(newFilters);
    setCurrentPage(1);
    fetchPools(newFilters, 1, sortBy, sortOrder);
  };

  // 处理过滤器变化
  const handleFiltersChange = (newFilters: SearchFilters) => {
    setSearchFilters(newFilters);
    setCurrentPage(1);
    fetchPools(newFilters, 1, sortBy, sortOrder);
  };

  // 处理排序
  const handleSort = (field: string, order: 'asc' | 'desc') => {
    setSortBy(field);
    setSortOrder(order);
    fetchPools(searchFilters, currentPage, field, order);
  };

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchPools(searchFilters, page, sortBy, sortOrder);
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      </Head>

      <div className="min-h-screen bg-background">
        {/* 页面头部 */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              DeFi 收益池聚合平台
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              为 Web3 DeFi 玩家提供一站式收益策略信息，包含详细的调研报告和风险分析
            </p>
          </div>

          {/* 搜索栏 */}
          <div className="mb-6">
            <SearchBar
              value={searchFilters.search || ''}
              onSearch={handleSearch}
              placeholder="搜索收益池或协议名称..."
              className="max-w-md"
            />
          </div>

          {/* 过滤器面板 */}
          <div className="mb-6">
            <FilterPanel
              filters={filters}
              activeFilters={searchFilters}
              onFiltersChange={handleFiltersChange}
            />
          </div>

          {/* 数据表格 */}
          <div className="mb-6">
            <PoolTable
              pools={pools}
              loading={loading}
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSort={handleSort}
            />
          </div>

          {/* 分页组件 */}
          {paginationInfo.totalPages > 1 && (
            <div className="mb-8">
              <Pagination
                {...paginationInfo}
                onPageChange={handlePageChange}
              />
            </div>
          )}

          {/* 提交请求按钮 */}
          <div className="text-center">
            <Link href="/request">
              <Button size="lg" className="inline-flex items-center gap-2">
                <Plus className="h-5 w-5" />
                提交收录请求
              </Button>
            </Link>
          </div>
        </div>

        {/* 页脚 */}
        <footer className="bg-muted/50 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                © 2024 DeFi收益池聚合平台. 本平台提供的信息仅供参考，不构成投资建议。
              </p>
              <p>
                投资有风险，入市需谨慎。请在充分了解风险的前提下进行投资决策。
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const pools = await DataLoader.loadAllPools();
    const filters = await DataLoader.generateFilterOptions(pools);
    
    // 生成SEO元数据
    const seoData: SEOData = {
      title: 'DeFi收益池聚合平台 - 一站式收益策略信息',
      description: '为Web3 DeFi玩家提供专业的收益池信息聚合服务，包含详细的调研报告、风险评估和实时收益数据。',
      keywords: 'DeFi, 收益池, 流动性挖矿, Web3投资, 区块链理财, APR, 风险评估',
      canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com',
      openGraph: {
        title: 'DeFi收益池聚合平台',
        description: '为Web3 DeFi玩家提供专业的收益池信息聚合服务',
        type: 'website',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'}/og-image.png`,
            width: 1200,
            height: 630,
            alt: 'DeFi收益池聚合平台'
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: 'DeFi收益池聚合平台',
        description: '为Web3 DeFi玩家提供专业的收益池信息聚合服务',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'}/og-image.png`]
      }
    };
    
    return {
      props: {
        pools: pools.slice(0, 50), // 首页显示前50个
        filters,
        seoData,
        total: pools.length
      },
      revalidate: 3600 // 1小时重新生成
    };
  } catch (error) {
    console.error('Failed to load static props:', error);
    
    // 返回默认数据
    const fallbackSeoData: SEOData = {
      title: DEFAULT_SEO.siteName,
      description: DEFAULT_SEO.description,
      keywords: DEFAULT_SEO.keywords
    };

    return {
      props: {
        pools: [],
        filters: {
          chains: [],
          risks: [],
          types: [],
          tokens: [],
          markets: [],
          aprRange: { min: 0, max: 100 }
        },
        seoData: fallbackSeoData,
        total: 0
      },
      revalidate: 60 // 发生错误时更频繁地重试
    };
  }
};