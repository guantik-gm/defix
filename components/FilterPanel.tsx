'use client';

import React, { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FilterOptions } from '@/types';
import { RiskLevel } from '@/types';
import { trackPoolEvent } from '@/lib/analytics';

interface FilterPanelProps {
  filters: FilterOptions;
  activeFilters: {
    chains: string[];
    risks: RiskLevel[];
    types: string[];
    tokens: string[];
    markets: string[];
    aprRange: { min: number; max: number };
  };
  onFiltersChange: (filters: FilterPanelProps['activeFilters']) => void;
  className?: string;
}

export function FilterPanel({
  filters,
  activeFilters,
  onFiltersChange,
  className = ""
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 更新过滤器
  const updateFilters = (key: keyof FilterPanelProps['activeFilters'], value: any) => {
    onFiltersChange({
      ...activeFilters,
      [key]: value
    });
  };

  // 切换单选过滤器
  const toggleFilter = (key: 'chains' | 'risks' | 'types' | 'tokens' | 'markets', value: string) => {
    const currentValues = activeFilters[key] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    updateFilters(key, newValues);
    
    // 追踪筛选事件
    trackPoolEvent.filterPools(key, value);
  };

  // 清空所有过滤器
  const clearAllFilters = () => {
    onFiltersChange({
      chains: [],
      risks: [],
      types: [],
      tokens: [],
      markets: [],
      aprRange: { min: 0, max: 1 }
    });
  };

  // 计算活跃过滤器数量
  const activeFilterCount = 
    activeFilters.chains.length +
    activeFilters.risks.length +
    activeFilters.types.length +
    activeFilters.tokens.length +
    activeFilters.markets.length +
    (activeFilters.aprRange.min > 0 || activeFilters.aprRange.max < 1 ? 1 : 0);

  return (
    <div className={`relative ${className}`}>
      {/* 过滤器触发按钮 */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full sm:w-auto"
      >
        <Filter className="h-4 w-4" />
        <span className="hidden sm:inline">过滤器</span>
        <span className="sm:hidden">筛选</span>
        {activeFilterCount > 0 && (
          <Badge variant="default" className="ml-1 px-1.5 py-0.5 text-xs">
            {activeFilterCount}
          </Badge>
        )}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* 移动端遮罩层 */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 sm:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* 过滤器面板 */}
      {isOpen && (
        <div className={`
          fixed inset-x-0 bottom-0 z-50 sm:absolute sm:top-full sm:left-0 sm:bottom-auto sm:inset-x-auto
          w-full sm:w-80 max-h-[80vh] sm:max-h-none overflow-y-auto
          bg-white border rounded-t-xl sm:rounded-lg shadow-lg p-4 sm:mt-2
          filter-panel-mobile sm:filter-panel
          ${isOpen ? 'open' : ''}
        `}>
          {/* 移动端顶部拖拽指示器 */}
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden" />
          
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 text-lg sm:text-base">过滤选项</h3>
            <div className="flex items-center gap-2">
              {activeFilterCount > 0 && (
                <Button variant="link" size="sm" onClick={clearAllFilters} className="text-gray-500 p-0 h-auto text-sm">
                  清空全部
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(false)} 
                className="p-2 h-auto hover:bg-gray-100 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-4">
            {/* 区块链过滤 */}
            <div>
              <label className="text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2 block">区块链</label>
              <div className="flex flex-wrap gap-2">
                {filters.chains.map((chain) => (
                  <button
                    key={chain}
                    onClick={() => toggleFilter('chains', chain)}
                    className={`px-3 py-2 sm:py-1 text-sm sm:text-xs rounded-full border transition-colors touch-target ${
                      activeFilters.chains.includes(chain)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    {chain}
                  </button>
                ))}
              </div>
            </div>

            {/* 风险等级过滤 */}
            <div>
              <label className="text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2 block">风险等级</label>
              <div className="flex flex-wrap gap-2">
                {filters.risks.map((risk) => (
                  <button
                    key={risk}
                    onClick={() => toggleFilter('risks', risk)}
                    className={`px-3 py-2 sm:py-1 text-sm sm:text-xs rounded-full border transition-colors touch-target ${
                      activeFilters.risks.includes(risk as RiskLevel)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    {risk}
                  </button>
                ))}
              </div>
            </div>

            {/* 投资类型过滤 */}
            <div>
              <label className="text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2 block">投资类型</label>
              <div className="flex flex-wrap gap-2">
                {filters.types.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleFilter('types', type)}
                    className={`px-3 py-2 sm:py-1 text-sm sm:text-xs rounded-full border transition-colors touch-target ${
                      activeFilters.types.includes(type)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 代币过滤 */}
            <div>
              <label className="text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2 block">代币</label>
              <div className="flex flex-wrap gap-2 max-h-32 sm:max-h-24 overflow-y-auto">
                {filters.tokens.map((token) => (
                  <button
                    key={token}
                    onClick={() => toggleFilter('tokens', token)}
                    className={`px-3 py-2 sm:py-1 text-sm sm:text-xs rounded-full border transition-colors touch-target ${
                      activeFilters.tokens.includes(token)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    {token}
                  </button>
                ))}
              </div>
            </div>

            {/* 适用市场过滤 */}
            <div>
              <label className="text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2 block">适用市场</label>
              <div className="flex flex-wrap gap-2">
                {filters.markets.map((market) => (
                  <button
                    key={market}
                    onClick={() => toggleFilter('markets', market)}
                    className={`px-3 py-2 sm:py-1 text-sm sm:text-xs rounded-full border transition-colors touch-target ${
                      activeFilters.markets.includes(market)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    {market}
                  </button>
                ))}
              </div>
            </div>

            {/* APR 范围过滤 */}
            <div>
              <label className="text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2 block">
                APR 范围 ({(activeFilters.aprRange.min * 100).toFixed(0)}% - {(activeFilters.aprRange.max * 100).toFixed(0)}%)
              </label>
              <div className="space-y-4 sm:space-y-2">
                <div className="flex items-center gap-3 sm:gap-2">
                  <span className="text-sm sm:text-xs text-gray-500 w-10 sm:w-8">最低</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={activeFilters.aprRange.min}
                    onChange={(e) => updateFilters('aprRange', {
                      ...activeFilters.aprRange,
                      min: parseFloat(e.target.value)
                    })}
                    className="flex-1 h-3 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer touch-target"
                  />
                  <span className="text-sm sm:text-xs text-gray-500 w-14 sm:w-12 text-right">
                    {(activeFilters.aprRange.min * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-2">
                  <span className="text-sm sm:text-xs text-gray-500 w-10 sm:w-8">最高</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={activeFilters.aprRange.max}
                    onChange={(e) => updateFilters('aprRange', {
                      ...activeFilters.aprRange,
                      max: parseFloat(e.target.value)
                    })}
                    className="flex-1 h-3 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer touch-target"
                  />
                  <span className="text-sm sm:text-xs text-gray-500 w-14 sm:w-12 text-right">
                    {(activeFilters.aprRange.max * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}