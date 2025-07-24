'use client';

import React from 'react';
import { Pool, RiskLevel } from '@/types';
import { formatAPRRange, getRiskLevelColor, getChainColor } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { ExternalLink, FileText, BarChart3 } from 'lucide-react';

interface PoolTableProps {
  pools: Pool[];
  isLoading?: boolean;
}

export function PoolTable({ pools, isLoading }: PoolTableProps) {
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
            <TableHead className="min-w-[70px] sm:w-[90px]">风险</TableHead>
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
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{pool.name}</span>
                  {pool.underlying && (
                    <span className="text-xs text-gray-500 mt-1 hidden sm:block">{pool.underlying}</span>
                  )}
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
                  {pool.chain.slice(0, 2).map((chain, index) => (
                    <Badge key={index} className={`chain-tag text-xs ${getChainColor(chain)}`}>
                      {chain}
                    </Badge>
                  ))}
                  {pool.chain.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{pool.chain.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <Badge className={`text-xs ${getRiskLevelColor(pool.risk)}`}>
                  <span className="hidden sm:inline">{pool.risk}</span>
                  <span className="sm:hidden">
                    {pool.risk === '低风险' ? '低' : 
                     pool.risk === '中风险' ? '中' : 
                     pool.risk === '高风险' ? '高' : '极'}
                  </span>
                </Badge>
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
                  {pool.market.slice(0, 2).map((market, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {market}
                    </Badge>
                  ))}
                  {pool.market.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{pool.market.length - 2}
                    </Badge>
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