'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 记录错误到控制台或错误追踪服务
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4 max-w-md mx-auto">
        {/* 错误图标和标题 */}
        <div className="mb-8">
          <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-6" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            出现错误
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            抱歉，页面加载时遇到了问题。请尝试刷新页面或返回首页。
          </p>
          
          {/* 开发环境显示错误详情 */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left mb-6">
              <h3 className="text-sm font-medium text-red-800 mb-2">错误详情（开发模式）:</h3>
              <p className="text-xs text-red-700 font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  错误ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={reset}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              重试
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                返回首页
              </Button>
            </Link>
          </div>
        </div>

        {/* 故障排除建议 */}
        <div className="bg-white rounded-lg shadow-sm border p-6 text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            故障排除建议
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• 检查网络连接是否正常</p>
            <p>• 尝试刷新页面或清除浏览器缓存</p>
            <p>• 如果问题持续，请稍后再试</p>
            <p>• 可以尝试使用搜索功能查找内容</p>
          </div>
        </div>

        {/* 联系信息 */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            如果问题持续存在，请{' '}
            <Link href="/request" className="text-blue-600 hover:underline">
              联系我们
            </Link>
          </p>
          <p className="mt-2">
            我们将尽快解决此问题
          </p>
        </div>

        {/* 返回按钮 */}
        <div className="mt-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回上一页
          </Button>
        </div>
      </div>
    </div>
  );
}