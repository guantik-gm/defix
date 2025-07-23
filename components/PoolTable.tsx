import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, FileText, BarChart3, ChevronUp, ChevronDown } from 'lucide-react';
import { Pool, SearchFilters } from '@/types';
import { RiskBadge } from './RiskBadge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatAPRRange } from '@/lib/utils';
import { event } from '@/lib/analytics';

interface PoolTableProps {
  pools: Pool[];
  loading?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  onSort?: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
}

export const PoolTable: React.FC<PoolTableProps> = ({
  pools,
  loading = false,
  sortBy = 'name',
  sortOrder = 'asc',
  onSort
}) => {
  const handleSort = (field: string) => {
    if (onSort) {
      const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
      onSort(field, newOrder);
    }
  };

  const renderSortIcon = (field: string) => {
    if (sortBy !== field) return null;
    return sortOrder === 'asc' ? 
      <ChevronUp className="h-4 w-4" /> : 
      <ChevronDown className="h-4 w-4" />;
  };

  if (loading) {
    return <PoolTableSkeleton />;
  }

  if (pools.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="text-muted-foreground">
            <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">暂无数据</p>
            <p className="text-sm">没有找到符合条件的收益池，请尝试调整筛选条件</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* 桌面端表格 */}
      <div className="hidden md:block">
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <SortableHeader 
                    field="name" 
                    currentSort={sortBy} 
                    currentOrder={sortOrder}
                    onClick={handleSort}
                  >
                    收益池
                  </SortableHeader>
                  <th className="px-4 py-3 text-left text-sm font-medium">协议</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">类型</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">所属链</th>
                  <SortableHeader 
                    field="risk" 
                    currentSort={sortBy} 
                    currentOrder={sortOrder}
                    onClick={handleSort}
                  >
                    风险等级
                  </SortableHeader>
                  <th className="px-4 py-3 text-left text-sm font-medium">Token</th>
                  <SortableHeader 
                    field="apr" 
                    currentSort={sortBy} 
                    currentOrder={sortOrder}
                    onClick={handleSort}
                  >
                    收益范围
                  </SortableHeader>
                  <th className="px-4 py-3 text-left text-sm font-medium">适用市场</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">调研报告</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">分析报告</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">官网</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {pools.map((pool) => (
                  <PoolRow key={pool.id} pool={pool} />
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* 移动端卡片 */}
      <div className="md:hidden space-y-4">
        {pools.map((pool) => (
          <MobilePoolCard key={pool.id} pool={pool} />
        ))}
      </div>
    </>
  );
};

// 可排序表头组件
interface SortableHeaderProps {
  field: string;
  currentSort: string;
  currentOrder: 'asc' | 'desc';
  onClick: (field: string) => void;
  children: React.ReactNode;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({
  field,
  currentSort,
  currentOrder,
  onClick,
  children
}) => {
  return (
    <th 
      className="px-4 py-3 text-left text-sm font-medium cursor-pointer hover:bg-muted/30 transition-colors"
      onClick={() => onClick(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        {currentSort === field && (
          currentOrder === 'asc' ? 
            <ChevronUp className="h-4 w-4" /> : 
            <ChevronDown className="h-4 w-4" />
        )}
      </div>
    </th>
  );
};

// 表格行组件
const PoolRow: React.FC<{ pool: Pool }> = ({ pool }) => {
  return (
    <tr className="hover:bg-muted/50 transition-colors">
      <td className="px-4 py-3">
        <div className="font-medium">{pool.name}</div>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-col">
          <span className="font-medium">{pool.protocol.name}</span>
          {pool.protocol.nickname && pool.protocol.nickname !== pool.protocol.name && (
            <span className="text-xs text-muted-foreground">{pool.protocol.nickname}</span>
          )}
        </div>
      </td>
      <td className="px-4 py-3">
        <Badge variant="outline" className="text-xs">
          {pool.type}
        </Badge>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-1">
          {pool.chain.map((chain) => (
            <Badge key={chain} variant="secondary" className="text-xs">
              {chain}
            </Badge>
          ))}
        </div>
      </td>
      <td className="px-4 py-3">
        <RiskBadge risk={pool.risk} />
      </td>
      <td className="px-4 py-3">
        <Badge variant="outline" className="text-xs font-mono">
          {pool.token}
        </Badge>
      </td>
      <td className="px-4 py-3">
        <div className="font-mono text-sm">
          {formatAPRRange(pool.aprRange.low, pool.aprRange.high)}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-1">
          {pool.market.slice(0, 2).map((market) => (
            <Badge key={market} variant="outline" className="text-xs">
              {market}
            </Badge>
          ))}
          {pool.market.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{pool.market.length - 2}
            </Badge>
          )}
        </div>
      </td>
      <td className="px-4 py-3">
        {pool.reports.research?.exists ? (
          <Link 
            href={`/reports/research/${encodeURIComponent(pool.protocol.nickname)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => event({
              action: 'view_research_report',
              category: 'engagement',
              label: pool.protocol.nickname
            })}
          >
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <FileText className="h-4 w-4" />
              <span className="sr-only">查看调研报告</span>
            </Button>
          </Link>
        ) : (
          <span className="text-xs text-muted-foreground">暂未发布</span>
        )}
      </td>
      <td className="px-4 py-3">
        {pool.reports.analysis?.exists ? (
          <Link 
            href={`/reports/analysis/${encodeURIComponent(pool.protocol.nickname)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => event({
              action: 'view_analysis_report',
              category: 'engagement',
              label: pool.protocol.nickname
            })}
          >
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <BarChart3 className="h-4 w-4" />
              <span className="sr-only">查看分析报告</span>
            </Button>
          </Link>
        ) : (
          <span className="text-xs text-muted-foreground">暂未发布</span>
        )}
      </td>
      <td className="px-4 py-3">
        {pool.protocol.website ? (
          <a 
            href={pool.protocol.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex"
            onClick={() => event({
              action: 'visit_protocol_website',
              category: 'engagement',
              label: pool.protocol.nickname
            })}
          >
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">访问官网</span>
            </Button>
          </a>
        ) : (
          <span className="text-xs text-muted-foreground">-</span>
        )}
      </td>
    </tr>
  );
};

// 移动端卡片组件
const MobilePoolCard: React.FC<{ pool: Pool }> = ({ pool }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg">{pool.name}</h3>
          <RiskBadge risk={pool.risk} />
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">协议:</span>
            <span className="font-medium">{pool.protocol.name}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">类型:</span>
            <Badge variant="outline" className="text-xs">
              {pool.type}
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">所属链:</span>
            <div className="flex flex-wrap gap-1">
              {pool.chain.map((chain) => (
                <Badge key={chain} variant="secondary" className="text-xs">
                  {chain}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">APR:</span>
            <span className="font-mono font-medium">
              {formatAPRRange(pool.aprRange.low, pool.aprRange.high)}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">报告:</span>
            <div className="flex space-x-2">
              {pool.reports.research?.exists && (
                <Link 
                  href={`/reports/research/${encodeURIComponent(pool.protocol.nickname)}`}
                  onClick={() => event({
                    action: 'view_research_report',
                    category: 'engagement',
                    label: pool.protocol.nickname
                  })}
                >
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    调研
                  </Button>
                </Link>
              )}
              {pool.reports.analysis?.exists && (
                <Link 
                  href={`/reports/analysis/${encodeURIComponent(pool.protocol.nickname)}`}
                  onClick={() => event({
                    action: 'view_analysis_report',
                    category: 'engagement',
                    label: pool.protocol.nickname
                  })}
                >
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    分析
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {pool.protocol.website && (
            <div className="pt-2 border-t">
              <a 
                href={pool.protocol.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs"
                onClick={() => event({
                  action: 'visit_protocol_website',
                  category: 'engagement',
                  label: pool.protocol.nickname
                })}
              >
                <ExternalLink className="h-3 w-3" />
                访问官网
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// 骨架屏组件
const PoolTableSkeleton: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="animate-pulse">
          {/* 桌面端骨架屏 */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr>
                  {Array.from({ length: 11 }).map((_, i) => (
                    <th key={i} className="px-4 py-3">
                      <div className="h-4 bg-muted rounded w-full"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 11 }).map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <div className="h-4 bg-muted rounded w-full"></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 移动端骨架屏 */}
          <div className="md:hidden space-y-4 p-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-5 bg-muted rounded w-1/3"></div>
                  <div className="h-6 bg-muted rounded w-16"></div>
                </div>
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="flex justify-between">
                      <div className="h-4 bg-muted rounded w-1/4"></div>
                      <div className="h-4 bg-muted rounded w-1/3"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};