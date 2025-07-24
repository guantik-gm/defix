import React from 'react';
import Link from 'next/link';
import { Home, Search, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4 max-w-md mx-auto">
        {/* 404 图标和标题 */}
        <div className="mb-8">
          <div className="text-6xl sm:text-8xl font-bold text-gray-300 mb-4">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            页面未找到
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            抱歉，您访问的页面不存在或已被移除。可能是链接有误或页面正在维护中。
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                <Home className="w-4 h-4 mr-2" />
                返回首页
              </Button>
            </Link>
            <Link href="/?search=">
              <Button variant="outline" className="w-full sm:w-auto">
                <Search className="w-4 h-4 mr-2" />
                搜索收益池
              </Button>
            </Link>
          </div>
        </div>

        {/* 快速导航 */}
        <div className="bg-white rounded-lg shadow-sm border p-6 text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            快速导航
          </h3>
          <div className="space-y-3">
            <Link 
              href="/" 
              className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              • 浏览所有收益池项目
            </Link>
            <Link 
              href="/request" 
              className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              • 提交新项目收录请求
            </Link>
            <div className="text-gray-600 text-sm pt-2">
              • 查看项目调研报告和分析
            </div>
            <div className="text-gray-600 text-sm">
              • 使用高级过滤和搜索功能
            </div>
          </div>
        </div>

        {/* 帮助信息 */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            如果您认为这是一个错误，请{' '}
            <Link href="/request" className="text-blue-600 hover:underline">
              联系我们
            </Link>
          </p>
          <p className="mt-2">
            或尝试使用搜索功能查找您需要的内容
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