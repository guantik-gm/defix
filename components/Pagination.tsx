import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PaginationInfo } from '@/types';

interface PaginationProps extends PaginationInfo {
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  limit,
  total,
  totalPages,
  onPageChange,
  className = ""
}) => {
  if (totalPages <= 1) return null;

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  const getVisiblePages = () => {
    const delta = 2; // 当前页前后显示的页数
    const pages: (number | 'ellipsis')[] = [];
    
    // 始终显示第一页
    pages.push(1);
    
    if (page - delta > 2) {
      pages.push('ellipsis');
    }
    
    // 显示当前页附近的页数
    const start = Math.max(2, page - delta);
    const end = Math.min(totalPages - 1, page + delta);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (page + delta < totalPages - 1) {
      pages.push('ellipsis');
    }
    
    // 始终显示最后一页
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    // 去重
    return pages.filter((page, index, arr) => 
      arr.indexOf(page) === index && page !== 1 || index === 0
    );
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}>
      {/* 显示信息 */}
      <div className="text-sm text-muted-foreground">
        显示第 <span className="font-medium">{startItem}</span> 到{' '}
        <span className="font-medium">{endItem}</span> 条，共{' '}
        <span className="font-medium">{total}</span> 条结果
      </div>

      {/* 分页控件 */}
      <div className="flex items-center gap-1">
        {/* 首页 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          className="h-8 w-8 p-0"
        >
          <ChevronsLeft className="h-4 w-4" />
          <span className="sr-only">首页</span>
        </Button>

        {/* 上一页 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">上一页</span>
        </Button>

        {/* 页码 */}
        <div className="flex items-center gap-1">
          {visiblePages.map((pageNum, index) => (
            <React.Fragment key={index}>
              {pageNum === 'ellipsis' ? (
                <span className="px-3 py-1 text-sm text-muted-foreground">...</span>
              ) : (
                <Button
                  variant={pageNum === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPageChange(pageNum)}
                  className="h-8 min-w-[32px] px-2"
                >
                  {pageNum}
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 下一页 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">下一页</span>
        </Button>

        {/* 末页 */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          className="h-8 w-8 p-0"
        >
          <ChevronsRight className="h-4 w-4" />
          <span className="sr-only">末页</span>
        </Button>
      </div>
    </div>
  );
};

// 简化版分页组件（用于移动端）
export const SimplePagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  className = ""
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        上一页
      </Button>

      <span className="px-4 py-2 text-sm">
        第 {page} 页，共 {totalPages} 页
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        下一页
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};