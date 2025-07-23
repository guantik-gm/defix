import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MultiSelect } from '@/components/ui/multi-select';
import { FilterOptions, SearchFilters, RiskLevel } from '@/types';
import { event } from '@/lib/analytics';

interface FilterPanelProps {
  filters: FilterOptions;
  activeFilters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  className?: string;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  activeFilters,
  onFiltersChange,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tempFilters, setTempFilters] = useState<SearchFilters>(activeFilters);

  useEffect(() => {
    setTempFilters(activeFilters);
  }, [activeFilters]);

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...tempFilters, [key]: value };
    setTempFilters(newFilters);
    onFiltersChange(newFilters);
    
    // 追踪过滤器使用事件
    event({
      action: 'filter_change',
      category: 'user_interaction',
      label: key,
      value: Array.isArray(value) ? value.length : (value ? 1 : 0)
    });
  };

  const handleMultiSelectChange = (
    key: keyof SearchFilters,
    value: string,
    currentValues: string[] = []
  ) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    handleFilterChange(key, newValues.length > 0 ? newValues : undefined);
  };

  const clearAllFilters = () => {
    const clearedFilters: SearchFilters = {};
    setTempFilters(clearedFilters);
    onFiltersChange(clearedFilters);
    
    // 追踪清除所有过滤器事件
    event({
      action: 'clear_all_filters',
      category: 'user_interaction',
      label: 'filter_panel',
      value: activeFilterCount
    });
  };

  const getActiveFilterCount = () => {
    return Object.keys(activeFilters).filter(key => {
      const value = activeFilters[key as keyof SearchFilters];
      return value !== undefined && value !== null && value !== '';
    }).length;
  };

  const activeFilterCount = getActiveFilterCount();

  return (
    <Card className={className}>
      <CardContent className="p-4">
        {/* 过滤器标题和切换按钮 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="font-medium">筛选条件</span>
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="h-5">
                {activeFilterCount}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="h-8 px-2 text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                清除
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsExpanded(!isExpanded);
                // 追踪过滤器面板展开/收起事件
                event({
                  action: isExpanded ? 'collapse_filters' : 'expand_filters',
                  category: 'user_interaction',
                  label: 'filter_panel'
                });
              }}
              className="h-8 px-2"
            >
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>

        {/* 过滤器内容 */}
        <div className={`grid gap-4 transition-all duration-200 ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 overflow-hidden'}`}>
          <div className="min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 区块链过滤 - 单选 */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">区块链</label>
                <Select
                  value={tempFilters.chain?.[0] || ""}
                  onValueChange={(value) => {
                    handleFilterChange('chain', value ? [value] : undefined);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="选择区块链" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">全部</SelectItem>
                    {filters.chains.map((chain) => (
                      <SelectItem key={chain} value={chain}>
                        {chain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 风险等级过滤 - 单选 */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">风险等级</label>
                <Select
                  value={tempFilters.risk?.[0] || ""}
                  onValueChange={(value) => {
                    handleFilterChange('risk', value ? [value as RiskLevel] : undefined);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="选择风险等级" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">全部</SelectItem>
                    {filters.risks.map((risk) => (
                      <SelectItem key={risk} value={risk}>
                        {risk}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 投资类型过滤 - 多选 */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">投资类型</label>
                <MultiSelect
                  options={filters.types.map(type => ({ label: type, value: type }))}
                  selected={tempFilters.type || []}
                  onChange={(values) => handleFilterChange('type', values.length > 0 ? values : undefined)}
                  placeholder="选择投资类型"
                />
              </div>

              {/* Token过滤 - 多选 */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Token</label>
                <MultiSelect
                  options={filters.tokens.map(token => ({ label: token, value: token }))}
                  selected={tempFilters.token || []}
                  onChange={(values) => handleFilterChange('token', values.length > 0 ? values : undefined)}
                  placeholder="选择Token"
                />
              </div>
            </div>

            {/* APR范围过滤 */}
            <div className="mt-4 pt-4 border-t">
              <RangeFilter
                label="APR收益范围"
                min={filters.aprRange.min}
                max={filters.aprRange.max}
                value={[tempFilters.aprMin || filters.aprRange.min, tempFilters.aprMax || filters.aprRange.max]}
                onChange={([min, max]) => {
                  handleFilterChange('aprMin', min !== filters.aprRange.min ? min : undefined);
                  handleFilterChange('aprMax', max !== filters.aprRange.max ? max : undefined);
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


// 范围过滤器组件
interface RangeFilterProps {
  label: string;
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const RangeFilter: React.FC<RangeFilterProps> = ({
  label,
  min,
  max,
  value,
  onChange
}) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (index: 0 | 1, newValue: string) => {
    const numValue = parseFloat(newValue) || (index === 0 ? min : max);
    const newRange: [number, number] = [...localValue];
    newRange[index] = numValue;
    
    // 确保最小值不大于最大值
    if (index === 0 && newRange[0] > newRange[1]) {
      newRange[1] = newRange[0];
    } else if (index === 1 && newRange[1] < newRange[0]) {
      newRange[0] = newRange[1];
    }
    
    setLocalValue(newRange);
    onChange(newRange);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <input
            type="number"
            placeholder="最小值"
            value={localValue[0]}
            onChange={(e) => handleChange(0, e.target.value)}
            className="w-full px-2 py-1 text-xs border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            min={min}
            max={max}
            step="0.01"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="最大值"
            value={localValue[1]}
            onChange={(e) => handleChange(1, e.target.value)}
            className="w-full px-2 py-1 text-xs border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            min={min}
            max={max}
            step="0.01"
          />
        </div>
      </div>
      <div className="text-xs text-gray-500">
        {(localValue[0] * 100).toFixed(2)}% - {(localValue[1] * 100).toFixed(2)}%
      </div>
    </div>
  );
};