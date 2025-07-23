import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FilterOptions, SearchFilters, RiskLevel } from '@/types';

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
              onClick={() => setIsExpanded(!isExpanded)}
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
              {/* 区块链过滤 */}
              <MultiSelectFilter
                label="区块链"
                options={filters.chains}
                selectedValues={tempFilters.chain || []}
                onChange={(values) => handleFilterChange('chain', values.length > 0 ? values : undefined)}
              />

              {/* 风险等级过滤 */}
              <MultiSelectFilter
                label="风险等级"
                options={filters.risks}
                selectedValues={tempFilters.risk || []}
                onChange={(values) => handleFilterChange('risk', values.length > 0 ? values : undefined)}
              />

              {/* 投资类型过滤 */}
              <MultiSelectFilter
                label="投资类型"
                options={filters.types}
                selectedValues={tempFilters.type || []}
                onChange={(values) => handleFilterChange('type', values.length > 0 ? values : undefined)}
              />

              {/* Token过滤 */}
              <MultiSelectFilter
                label="Token"
                options={filters.tokens}
                selectedValues={tempFilters.token || []}
                onChange={(values) => handleFilterChange('token', values.length > 0 ? values : undefined)}
              />
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

// 多选过滤器组件
interface MultiSelectFilterProps {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const MultiSelectFilter: React.FC<MultiSelectFilterProps> = ({
  label,
  options,
  selectedValues,
  onChange
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-1">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option);
          return (
            <Button
              key={option}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => {
                const newValues = isSelected
                  ? selectedValues.filter(v => v !== option)
                  : [...selectedValues, option];
                onChange(newValues);
              }}
            >
              {option}
            </Button>
          );
        })}
      </div>
    </div>
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