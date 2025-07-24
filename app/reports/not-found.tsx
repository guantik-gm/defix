import React from 'react';
import Link from 'next/link';
import { FileX, ArrowLeft, Search, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReportsNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <FileX className="w-24 h-24 mx-auto text-gray-400 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            报告未找到
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            抱歉，您访问的报告页面不存在或已被移除。可能是链接有误或报告正在更新中。
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
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

        <div className="bg-white rounded-lg shadow-sm border p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            寻找特定报告？
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• 在首页表格中点击"查看报告"链接</p>
            <p>• 确认报告链接地址是否正确</p>
            <p>• 该协议可能暂未发布相关报告</p>
            <p>• 报告可能正在更新或维护中</p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            如果您认为这是一个错误，请{' '}
            <Link href="/request" className="text-blue-600 hover:underline">
              联系我们
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}