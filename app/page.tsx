'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Pool, PoolsResponse, FilterOptions, RiskLevel } from '@/types';
import { PoolTable } from '@/components/PoolTable';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { Pagination } from '@/components/Pagination';
import { Button } from '@/components/ui/button';
import { WebsiteStructuredData } from '@/components/StructuredData';
import { Plus, Filter, SortAsc, SortDesc } from 'lucide-react';
import { debounce } from '@/lib/utils';
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
  const [sortBy, setSortBy] = useState<'name' | 'apr' | 'risk' | 'createdAt'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // 获取收益池数据
  const fetchPools = useCallback(async (searchTerm: string, page: number) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        sortBy,
        sortOrder,
      });

      if (searchTerm) {
        params.set('search', searchTerm);
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
      } else {
        console.error('Failed to fetch pools:', result.error);
      }
    } catch (error) {
      console.error('Error fetching pools:', error);
    } finally {
      setIsLoading(false);
    }
  }, [pagination.limit, sortBy, sortOrder, activeFilters]);

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
  }, [fetchPools]);

  // 搜索处理
  const handleSearchChange = (value: string) => {
    setSearch(value);
    debouncedSearch(value);
  };

  // 分页处理
  const handlePageChange = (page: number) => {
    fetchPools(search, page);
  };

  // 排序处理
  const handleSort = (field: typeof sortBy) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
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
            DeFi 收益池聚合平台
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            为 Web3 DeFi 玩家提供一站式收益策略信息，包含详细的调研报告和风险分析
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
                <Button
                  variant={sortBy === 'name' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleSort('name')}
                  className="btn flex-1 sm:flex-none"
                >
                  <span className="hidden sm:inline">名称</span>
                  <span className="sm:hidden">名</span>
                  {sortBy === 'name' && (sortOrder === 'asc' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />)}
                </Button>
                <Button
                  variant={sortBy === 'apr' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleSort('apr')}
                  className="btn flex-1 sm:flex-none"
                >
                  APR {sortBy === 'apr' && (sortOrder === 'asc' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />)}
                </Button>
                <Button
                  variant={sortBy === 'risk' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleSort('risk')}
                  className="btn flex-1 sm:flex-none"
                >
                  <span className="hidden sm:inline">风险</span>
                  <span className="sm:hidden">险</span>
                  {sortBy === 'risk' && (sortOrder === 'asc' ? <SortAsc className="ml-1 h-4 w-4" /> : <SortDesc className="ml-1 h-4 w-4" />)}
                </Button>
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
            数据来源于各协议官方和专业调研团队，仅供参考，投资需谨慎
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