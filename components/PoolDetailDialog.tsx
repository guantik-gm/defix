'use client';

import React from 'react';
import { Pool } from '@/types';
import { Badge } from './ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from './ui/dialog';
import { formatAPRRange, getRiskLevelColor, getChainColor } from '@/lib/utils';
import { InfoIcon, AlertTriangle, Target, FileText } from 'lucide-react';

interface PoolDetailDialogProps {
  pool: Pool | null;
  isOpen: boolean;
  onClose: () => void;
  poolContent?: string; // 收益池文件的正文内容
}

export function PoolDetailDialog({ pool, isOpen, onClose, poolContent }: PoolDetailDialogProps) {
  if (!pool) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span>{pool.name}</span>
            <div 
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getRiskLevelColor(pool.risk)}`}
              style={pool.risk === '极高风险' ? {
                backgroundColor: '#dc2626',
                color: '#fef2f2',
                borderColor: '#b91c1c',
                borderWidth: '1px'
              } : undefined}
            >
              {pool.risk}
            </div>
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {pool.protocol.name} - {pool.type}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* 基本信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">收益范围</h4>
              <div className="text-lg font-mono text-green-600">
                {formatAPRRange(pool.aprRange.low, pool.aprRange.high)}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Token</h4>
              <div className="font-mono font-medium text-gray-900">
                {pool.token}
              </div>
            </div>
          </div>

          {/* 所属链 */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">所属链</h4>
            <div className="flex flex-wrap gap-2">
              {pool.chain.map((chain, index) => (
                <Badge key={index} className={`${getChainColor(chain)}`}>
                  {chain}
                </Badge>
              ))}
            </div>
          </div>

          {/* 适用市场 */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">适用市场</h4>
            <div className="flex flex-wrap gap-2">
              {pool.market.map((market, index) => (
                <Badge key={index} variant="secondary">
                  {market}
                </Badge>
              ))}
            </div>
          </div>

          {/* 底层收益 */}
          {pool.underlying && pool.underlying.trim() !== '' && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <InfoIcon className="w-4 h-4 text-blue-500" />
                底层收益
              </h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div 
                  className="text-gray-700 text-sm prose prose-sm max-w-none" 
                  dangerouslySetInnerHTML={{ __html: pool.underlying }}
                />
              </div>
            </div>
          )}

          {/* 风险提示 */}
          {pool.danger && pool.danger.trim() !== '' && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                风险提示
              </h4>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div 
                  className="text-gray-700 text-sm prose prose-sm max-w-none" 
                  dangerouslySetInnerHTML={{ __html: pool.danger }}
                />
              </div>
            </div>
          )}

          {/* 适用场景 */}
          {pool.scenarios && pool.scenarios.trim() !== '' && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-green-500" />
                适用场景
              </h4>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div 
                  className="text-gray-700 text-sm prose prose-sm max-w-none" 
                  dangerouslySetInnerHTML={{ __html: pool.scenarios }}
                />
              </div>
            </div>
          )}

          {/* 备注说明 */}
          {pool.remark && pool.remark.trim() !== '' && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" />
                备注说明
              </h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div 
                  className="text-gray-700 text-sm prose prose-sm max-w-none" 
                  dangerouslySetInnerHTML={{ __html: pool.remark }}
                />
              </div>
            </div>
          )}

          {/* 附加说明 */}
          {poolContent && poolContent.trim() && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-500" />
                附加说明
              </h4>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="text-gray-700 text-sm whitespace-pre-wrap">
                  {poolContent}
                </div>
              </div>
            </div>
          )}

          {/* 协议信息 */}
          <div className="border-t pt-4 space-y-2">
            <h4 className="font-semibold text-gray-900">协议信息</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">协议名称：</span>
                <span className="font-medium">{pool.protocol.name}</span>
              </div>
              {pool.protocol.nickname && (
                <div>
                  <span className="text-gray-500">简称：</span>
                  <span className="font-medium">@{pool.protocol.nickname}</span>
                </div>
              )}
              {pool.protocol.description && (
                <div className="md:col-span-2">
                  <span className="text-gray-500">描述：</span>
                  <span className="font-medium">{pool.protocol.description}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}