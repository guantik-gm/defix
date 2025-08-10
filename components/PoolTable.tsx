'use client';

import React, { useState } from 'react';
import { Pool, RiskLevel } from '@/types';
import { formatAPRRange, getRiskLevelColor, getChainColor } from '@/lib/utils';
import { trackPoolEvent, trackInvestmentInterest } from '@/lib/analytics';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { ExternalLink, FileText, BarChart3, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { PoolDetailDialog } from './PoolDetailDialog';

interface PoolTableProps {
  pools: Pool[];
  isLoading?: boolean;
}

export function PoolTable({ pools, isLoading }: PoolTableProps) {
  // 管理每个池子的展开状态
  const [expandedChains, setExpandedChains] = useState<Set<string>>(new Set());
  const [expandedMarkets, setExpandedMarkets] = useState<Set<string>>(new Set());
  
  // 管理弹窗状态
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [poolContent, setPoolContent] = useState<string>('');

  // 点击收益池名称时打开弹窗
  const handlePoolNameClick = async (pool: Pool) => {
    // Google Analytics 追踪
    trackPoolEvent.viewPoolDetail(pool.name, pool.protocol.name);
    trackInvestmentInterest.viewInvestmentOpportunity(
      pool.protocol.name, 
      pool.type, 
      `${pool.aprRange.low}-${pool.aprRange.high}%`
    );
    
    setSelectedPool(pool);
    setIsDialogOpen(true);
    
    // 尝试获取收益池文件内容
    try {
      // 构建文件路径，基于协议名称和类型
      const fileName = `${pool.protocol.name} ${pool.type}.md`;
      const response = await fetch(`/api/pool-content?fileName=${encodeURIComponent(fileName)}`);
      if (response.ok) {
        const content = await response.text();
        setPoolContent(content);
      } else {
        setPoolContent('');
      }
    } catch (error) {
      console.warn('无法获取收益池文件内容:', error);
      setPoolContent('');
    }
  };

  // 关闭弹窗
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedPool(null);
    setPoolContent('');
  };

  // 切换链展开状态
  const toggleChainExpanded = (poolId: string) => {
    setExpandedChains(prev => {
      const newSet = new Set(prev);
      if (newSet.has(poolId)) {
        newSet.delete(poolId);
      } else {
        newSet.add(poolId);
      }
      return newSet;
    });
  };

  // 切换市场展开状态
  const toggleMarketExpanded = (poolId: string) => {
    setExpandedMarkets(prev => {
      const newSet = new Set(prev);
      if (newSet.has(poolId)) {
        newSet.delete(poolId);
      } else {
        newSet.add(poolId);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return <PoolTableSkeleton />;
  }

  if (pools.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 mb-4">
          <BarChart3 className="w-12 h-12 mx-auto" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          暂无收益池数据
        </h3>
        <p className="text-gray-600">
          没有找到符合条件的收益池，请尝试调整搜索或过滤条件
        </p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <Table>
        <TableHeader className="table-header">
          <TableRow>
            <TableHead className="min-w-[140px] sm:w-[180px]">收益池</TableHead>
            <TableHead className="min-w-[120px] sm:w-[140px]">协议</TableHead>
            <TableHead className="min-w-[60px] sm:w-[80px]">类型</TableHead>
            <TableHead className="min-w-[100px] sm:w-[120px]">所属链</TableHead>
            <TableHead className="min-w-[80px] sm:w-[100px]">风险</TableHead>
            <TableHead className="min-w-[60px] sm:w-[80px]">Token</TableHead>
            <TableHead className="min-w-[100px] sm:w-[120px]">收益范围</TableHead>
            <TableHead className="min-w-[90px] sm:w-[110px] hidden sm:table-cell">适用市场</TableHead>
            <TableHead className="min-w-[100px] sm:w-[120px]">调研报告</TableHead>
            <TableHead className="min-w-[100px] sm:w-[120px]">分析报告</TableHead>
            <TableHead className="min-w-[70px] sm:w-[90px]">官网</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pools.map((pool) => (
            <TableRow key={pool.id} className="table-row">
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <button
                    onClick={() => handlePoolNameClick(pool)}
                    className="font-semibold text-gray-900 text-sm sm:text-base hover:text-blue-600 hover:underline text-left transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {pool.name}
                    <Info className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-500" />
                  </button>
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{pool.protocol.name}</span>
                  {pool.protocol.nickname && (
                    <span className="text-xs text-gray-500 hidden sm:block">@{pool.protocol.nickname}</span>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  {pool.type}
                </Badge>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {expandedChains.has(pool.id) ? (
                    // 展开状态 - 显示所有链
                    <>
                      {pool.chain.map((chain, index) => (
                        <Badge key={index} className={`chain-tag text-xs ${getChainColor(chain)}`}>
                          {chain}
                        </Badge>
                      ))}
                      {pool.chain.length > 2 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-1 text-xs text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 min-w-8 touch-manipulation"
                          onClick={() => toggleChainExpanded(pool.id)}
                        >
                          <ChevronUp className="w-3 h-3" />
                        </Button>
                      )}
                    </>
                  ) : (
                    // 收缩状态 - 只显示前2个
                    <>
                      {pool.chain.slice(0, 2).map((chain, index) => (
                        <Badge key={index} className={`chain-tag text-xs ${getChainColor(chain)}`}>
                          {chain}
                        </Badge>
                      ))}
                      {pool.chain.length > 2 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-1 text-xs text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 min-w-8 touch-manipulation"
                          onClick={() => toggleChainExpanded(pool.id)}
                        >
                          +{pool.chain.length - 2}
                          <ChevronDown className="w-3 h-3 ml-1" />
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </TableCell>
              
              <TableCell className="min-w-[80px]">
                <div 
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors whitespace-nowrap ${getRiskLevelColor(pool.risk)}`}
                  style={pool.risk === '极高风险' ? {
                    backgroundColor: '#dc2626', // red-600
                    color: '#fef2f2', // red-50
                    borderColor: '#b91c1c', // red-700
                    borderWidth: '1px'
                  } : undefined}
                >
                  <span className="hidden sm:inline">{pool.risk}</span>
                  <span className="sm:hidden">
                    {pool.risk === '低风险' ? '低' : 
                     pool.risk === '中风险' ? '中' : 
                     pool.risk === '高风险' ? '高' : '极'}
                  </span>
                </div>
              </TableCell>
              
              <TableCell>
                <span className="font-mono font-medium text-gray-900 text-sm">{pool.token}</span>
              </TableCell>
              
              <TableCell>
                <span className="apr-range text-sm">
                  {formatAPRRange(pool.aprRange.low, pool.aprRange.high)}
                </span>
              </TableCell>
              
              <TableCell className="hidden sm:table-cell">
                <div className="flex flex-wrap gap-1">
                  {expandedMarkets.has(pool.id) ? (
                    // 展开状态 - 显示所有市场
                    <>
                      {pool.market.map((market, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {market}
                        </Badge>
                      ))}
                      {pool.market.length > 2 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-1 text-xs text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 min-w-8 touch-manipulation"
                          onClick={() => toggleMarketExpanded(pool.id)}
                        >
                          <ChevronUp className="w-3 h-3" />
                        </Button>
                      )}
                    </>
                  ) : (
                    // 收缩状态 - 只显示前2个
                    <>
                      {pool.market.slice(0, 2).map((market, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {market}
                        </Badge>
                      ))}
                      {pool.market.length > 2 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-1 text-xs text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 min-w-8 touch-manipulation"
                          onClick={() => toggleMarketExpanded(pool.id)}
                        >
                          +{pool.market.length - 2}
                          <ChevronDown className="w-3 h-3 ml-1" />
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                {pool.reports.research?.exists ? (
                  <Button
                    variant="link"
                    size="sm"
                    className="report-link touch-target p-0 h-auto"
                    onClick={() => window.open(pool.reports.research?.url, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">查看报告</span>
                    <span className="sm:hidden">报告</span>
                  </Button>
                ) : (
                  <span className="text-gray-400 text-xs sm:text-sm">
                    <span className="hidden sm:inline">暂未发布</span>
                    <span className="sm:hidden">暂无</span>
                  </span>
                )}
              </TableCell>
              
              <TableCell>
                {pool.reports.analysis?.exists ? (
                  <Button
                    variant="link"
                    size="sm"
                    className="report-link touch-target p-0 h-auto"
                    onClick={() => window.open(pool.reports.analysis?.url, '_blank')}
                  >
                    <BarChart3 className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">查看分析</span>
                    <span className="sm:hidden">分析</span>
                  </Button>
                ) : (
                  <span className="text-gray-400 text-xs sm:text-sm">
                    <span className="hidden sm:inline">暂未发布</span>
                    <span className="sm:hidden">暂无</span>
                  </span>
                )}
              </TableCell>
              
              <TableCell>
                {pool.protocol.website ? (
                  <Button
                    variant="link"
                    size="sm"
                    className="report-link touch-target p-0 h-auto"
                    onClick={() => window.open(pool.protocol.website, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">访问</span>
                    <span className="sm:hidden">链接</span>
                  </Button>
                ) : (
                  <span className="text-gray-400 text-xs sm:text-sm">暂无</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* 收益池详情弹窗 */}
      <PoolDetailDialog
        pool={selectedPool}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        poolContent={poolContent}
      />
    </div>
  );
}

// 骨架屏组件
function PoolTableSkeleton() {
  return (
    <div className="table-container">
      <Table>
        <TableHeader className="table-header">
          <TableRow>
            <TableHead>收益池</TableHead>
            <TableHead>协议</TableHead>
            <TableHead>类型</TableHead>
            <TableHead>所属链</TableHead>
            <TableHead>风险等级</TableHead>
            <TableHead>Token</TableHead>
            <TableHead>收益范围</TableHead>
            <TableHead className="hidden-mobile">适用市场</TableHead>
            <TableHead>调研报告</TableHead>
            <TableHead>分析报告</TableHead>
            <TableHead>官网</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="loading-skeleton h-4 w-32"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-4 w-24"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-6 w-16"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-6 w-20"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-6 w-16"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-4 w-12"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-4 w-20"></div>
              </TableCell>
              <TableCell className="hidden-mobile">
                <div className="loading-skeleton h-6 w-16"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-4 w-16"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-4 w-16"></div>
              </TableCell>
              <TableCell>
                <div className="loading-skeleton h-4 w-12"></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}