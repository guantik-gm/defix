'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Pool, PoolsResponse, FilterOptions, RiskLevel, SortField, SortFieldType } from '@/types';
import { PoolTable } from '@/components/PoolTable';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { Pagination } from '@/components/Pagination';
import { Button } from '@/components/ui/button';
import { WebsiteStructuredData } from '@/components/StructuredData';
import { Plus, Filter, SortAsc, SortDesc, X } from 'lucide-react';
import { debounce } from '@/lib/utils';
import { trackPoolEvent, trackPerformance, initializeSessionTracking } from '@/lib/analytics';
import Link from 'next/link';

export default function HomePage() {
  const [pools, setPools] = useState<Pool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });
  const [filters, setFilters] = useState<FilterOptions>({
    chains: [],
    risks: [],
    types: [],
    tokens: [],
    markets: [],
    aprRange: { min: 0, max: 1 },
  });
  const [activeFilters, setActiveFilters] = useState<{
    chains: string[];
    risks: RiskLevel[];
    types: string[];
    tokens: string[];
    markets: string[];
    aprRange: { min: number; max: number };
  }>({
    chains: [],
    risks: [],
    types: [],
    tokens: [],
    markets: [],
    aprRange: { min: 0, max: 1 },
  });
  const [sorts, setSorts] = useState<SortField[]>([]);

  // 获取收益池数据
  const fetchPools = useCallback(async (searchTerm: string, page: number) => {
    setIsLoading(true);
    const startTime = performance.now();
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
      });

      if (searchTerm) {
        params.set('search', searchTerm);
      }

      // 添加多字段排序参数
      if (sorts.length > 0) {
        params.set('sorts', JSON.stringify(sorts));
      }

      // 添加过滤器参数
      if (activeFilters.chains.length > 0) {
        params.set('chains', activeFilters.chains.join(','));
      }
      if (activeFilters.risks.length > 0) {
        params.set('risks', activeFilters.risks.join(','));
      }
      if (activeFilters.types.length > 0) {
        params.set('types', activeFilters.types.join(','));
      }
      if (activeFilters.tokens.length > 0) {
        params.set('tokens', activeFilters.tokens.join(','));
      }
      if (activeFilters.markets.length > 0) {
        params.set('markets', activeFilters.markets.join(','));
      }
      if (activeFilters.aprRange.min > 0 || activeFilters.aprRange.max < 1) {
        params.set('aprMin', activeFilters.aprRange.min.toString());
        params.set('aprMax', activeFilters.aprRange.max.toString());
      }

      const response = await fetch(`/api/pools?${params}`);
      const result = await response.json();

      if (result.success) {
        const data = result.data as PoolsResponse;
        setPools(data.pools);
        setPagination({
          page: data.page,
          limit: data.limit,
          total: data.total,
          totalPages: Math.ceil(data.total / data.limit),
        });
        setFilters(data.filters);
        
        // 追踪 API 响应时间
        const endTime = performance.now();
        trackPerformance.apiResponseTime('/api/pools', endTime - startTime);
      } else {
        console.error('Failed to fetch pools:', result.error);
        trackPerformance.trackError('api_error', result.error, '/api/pools');
      }
    } catch (error) {
      console.error('Error fetching pools:', error);
      trackPerformance.trackError('fetch_error', (error as Error).message, '/api/pools');
    } finally {
      setIsLoading(false);
    }
  }, [pagination.limit, sorts, activeFilters]);

  // 防抖搜索
  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      fetchPools(searchTerm, 1);
    }, 500),
    [fetchPools]
  );

  // 初始加载数据
  useEffect(() => {
    fetchPools('', 1);
    
    // 初始化 Google Analytics 会话追踪
    initializeSessionTracking();
  }, [fetchPools]);

  // 搜索处理
  const handleSearchChange = (value: string) => {
    setSearch(value);
    debouncedSearch(value);
    
    // 追踪搜索事件
    if (value.trim()) {
      trackPoolEvent.searchPools(value);
    }
  };

  // 分页处理
  const handlePageChange = (page: number) => {
    fetchPools(search, page);
    
    // 追踪分页事件
    trackPoolEvent.changePage(page, pagination.totalPages);
  };

  // 添加或切换排序字段
  const toggleSortField = (field: SortFieldType) => {
    setSorts(currentSorts => {
      const existingIndex = currentSorts.findIndex(s => s.field === field);
      let newOrder: 'asc' | 'desc' = 'desc';
      
      if (existingIndex >= 0) {
        // 字段已存在，切换排序方向
        const updated = [...currentSorts];
        newOrder = updated[existingIndex].order === 'asc' ? 'desc' : 'asc';
        updated[existingIndex] = {
          ...updated[existingIndex],
          order: newOrder
        };
        
        // 追踪排序事件
        trackPoolEvent.sortPools(field, newOrder);
        
        return updated;
      } else {
        // 新字段，添加到排序列表（默认降序，因为通常用户想看最高的值）
        trackPoolEvent.sortPools(field, newOrder);
        return [...currentSorts, { field, order: 'desc' }];
      }
    });
  };

  // 移除排序字段
  const removeSortField = (field: SortFieldType) => {
    setSorts(currentSorts => currentSorts.filter(s => s.field !== field));
  };

  // 清空所有排序
  const clearAllSorts = () => {
    setSorts([]);
  };

  // 获取字段的排序状态
  const getSortStatus = (field: SortFieldType) => {
    const sort = sorts.find(s => s.field === field);
    return sort ? { active: true, order: sort.order, index: sorts.indexOf(sort) + 1 } : { active: false };
  };

  // 过滤器处理
  const handleFiltersChange = (newFilters: typeof activeFilters) => {
    setActiveFilters(newFilters);
    // 重置到第一页
    fetchPools(search, 1);
  };

  return (
    <>
      {/* SEO 结构化数据 */}
      <WebsiteStructuredData totalPools={pagination.total} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            探索优质 DeFi 收益机会
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            基于项目最新市场数据、项目信息、新闻与行情、社交媒体的评价&情绪、历史风险事件等维度，整合专业数据平台，调研生成详细的 Web3 项目投资评估报告
          </p>
        </div>

        {/* 操作区域 */}
        <div className="mb-6">
          <div className="search-filter-area flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* 搜索栏 */}
            <div className="w-full lg:w-96">
              <SearchBar
                value={search}
                onChange={handleSearchChange}
                placeholder="搜索收益池、协议或代币..."
              />
            </div>

            {/* 过滤器 */}
            <div className="w-full lg:w-auto filter-button-tablet">
              <FilterPanel
                filters={filters}
                activeFilters={activeFilters}
                onFiltersChange={handleFiltersChange}
              />
            </div>

            {/* 操作按钮 */}
            <div className="button-group flex gap-2 w-full lg:w-auto">
              {/* 排序按钮 */}
              <div className="flex gap-1 flex-wrap">
                {/* APR-High 排序 */}
                <Button
                  variant={getSortStatus('apr-high').active ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => toggleSortField('apr-high')}
                  className="btn flex-1 sm:flex-none relative"
                >
                  <span className="hidden sm:inline">高收益</span>
                  <span className="sm:hidden">高收</span>
                  {getSortStatus('apr-high').active && (
                    <>
                      {getSortStatus('apr-high').order === 'asc' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />}
                      {sorts.length > 1 && (
                        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                          {getSortStatus('apr-high').index}
                        </span>
                      )}
                    </>
                  )}
                </Button>
                
                {/* APR-Low 排序 */}
                <Button
                  variant={getSortStatus('apr-low').active ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => toggleSortField('apr-low')}
                  className="btn flex-1 sm:flex-none relative"
                >
                  <span className="hidden sm:inline">低收益</span>
                  <span className="sm:hidden">低收</span>
                  {getSortStatus('apr-low').active && (
                    <>
                      {getSortStatus('apr-low').order === 'asc' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />}
                      {sorts.length > 1 && (
                        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                          {getSortStatus('apr-low').index}
                        </span>
                      )}
                    </>
                  )}
                </Button>
                
                {/* 风险排序 */}
                <Button
                  variant={getSortStatus('risk').active ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => toggleSortField('risk')}
                  className="btn flex-1 sm:flex-none relative"
                >
                  <span className="hidden sm:inline">风险</span>
                  <span className="sm:hidden">险</span>
                  {getSortStatus('risk').active && (
                    <>
                      {getSortStatus('risk').order === 'asc' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />}
                      {sorts.length > 1 && (
                        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                          {getSortStatus('risk').index}
                        </span>
                      )}
                    </>
                  )}
                </Button>
                
                {/* 清空排序按钮 */}
                {sorts.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllSorts}
                    className="btn flex-1 sm:flex-none text-gray-500 hover:text-gray-700"
                  >
                    <span className="hidden sm:inline">清空</span>
                    <span className="sm:hidden">清</span>
                  </Button>
                )}
              </div>

              {/* 提交请求按钮 */}
              <Link href="/request" className="flex-1 sm:flex-none">
                <Button className="btn bg-blue-600 hover:bg-blue-700 w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">提交收录请求</span>
                  <span className="sm:hidden">提交请求</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mb-6">
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-3 sm:p-4 rounded-lg border">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">{pagination.total}</div>
              <div className="text-xs sm:text-sm text-gray-600">收益池总数</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg border">
              <div className="text-xl sm:text-2xl font-bold text-green-600">{filters.chains.length}</div>
              <div className="text-xs sm:text-sm text-gray-600">支持区块链</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg border">
              <div className="text-xl sm:text-2xl font-bold text-purple-600">{filters.types.length}</div>
              <div className="text-xs sm:text-sm text-gray-600">投资类型</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg border">
              <div className="text-xl sm:text-2xl font-bold text-orange-600">
                {(filters.aprRange.max * 100).toFixed(0)}%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">最高APR</div>
            </div>
          </div>
        </div>

        {/* 收益池表格 */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <PoolTable pools={pools} isLoading={isLoading} />
        </div>

        {/* 分页 */}
        <Pagination
          {...pagination}
          onPageChange={handlePageChange}
          className="justify-center"
        />

        {/* 页脚信息 */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            数据由专用 DeFi Research Agent 智能聚合生成，结合协议官方信息与多维度分析，仅供参考，投资需谨慎
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <p>
              如有问题或建议，请{' '}
              <Link href="/request" className="text-blue-600 hover:underline">
                提交反馈
              </Link>
            </p>
            <span className="text-gray-300">|</span>
            <Link 
              href="https://x.com/GT_Chiang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
              title="关注我们的 X 账号"
            >
              <X className="w-4 h-4" />
              <span className="text-xs">在 X 上联系</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/admin" 
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              title="管理后台"
            >
              管理
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}