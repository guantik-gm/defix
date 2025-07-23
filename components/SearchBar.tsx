import React, { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { debounce } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "搜索收益池或协议名称...",
  value = "",
  onChange,
  onSearch,
  className = "",
  disabled = false
}) => {
  const [localValue, setLocalValue] = useState(value);

  // 防抖搜索
  const debouncedSearch = useCallback(
    debounce((searchValue: string) => {
      onSearch?.(searchValue);
    }, 300),
    [onSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange?.(newValue);
    debouncedSearch(newValue);
  };

  const handleClear = () => {
    setLocalValue("");
    onChange?.("");
    onSearch?.("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch?.(localValue);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          value={localValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          className="pl-10 pr-10"
        />
        {localValue && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 hover:bg-transparent"
            onClick={handleClear}
            disabled={disabled}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">清除搜索</span>
          </Button>
        )}
      </div>
    </div>
  );
};