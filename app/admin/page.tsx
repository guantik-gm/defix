'use client';

import React, { useState, useEffect } from 'react';
import { Users, MessageSquare, Settings, BarChart3, ArrowLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AdminStats {
  totalRequests: number;
  pendingRequests: number;
  protocolInclusions: number;
  dataCorrections: number;
  otherFeedback: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<AdminStats>({
    totalRequests: 0,
    pendingRequests: 0,
    protocolInclusions: 0,
    dataCorrections: 0,
    otherFeedback: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    
    // 页面聚焦时自动刷新数据
    const handleFocus = () => {
      fetchStats();
    };
    
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/requests');
      const result = await response.json();
      
      if (result.success && result.data) {
        const requests = result.data;
        setStats({
          totalRequests: requests.length,
          pendingRequests: requests.filter((r: any) => r.status === 'pending').length,
          protocolInclusions: requests.filter((r: any) => r.type === 'protocol_inclusion').length,
          dataCorrections: requests.filter((r: any) => r.type === 'data_correction').length,
          otherFeedback: requests.filter((r: any) => r.type === 'other_feedback').length,
        });
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: '总请求数',
      value: stats.totalRequests,
      icon: MessageSquare,
      color: 'bg-blue-500',
    },
    {
      title: '待处理',
      value: stats.pendingRequests,
      icon: Users,
      color: 'bg-orange-500',
    },
    {
      title: '协议收录',
      value: stats.protocolInclusions,
      icon: BarChart3,
      color: 'bg-green-500',
    },
    {
      title: '数据纠错',
      value: stats.dataCorrections,
      icon: Settings,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏 */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                管理后台
              </h1>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchStats}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <RotateCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                刷新
              </Button>
            </div>
            <p className="text-base sm:text-lg text-gray-600">
              管理用户请求和系统设置
            </p>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.title} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {loading ? '-' : card.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${card.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 快速操作 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">快速操作</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/admin/requests">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <MessageSquare className="w-8 h-8 text-blue-500 mb-2" />
                <h3 className="font-medium text-gray-900">请求管理</h3>
                <p className="text-sm text-gray-600">查看和处理用户请求</p>
              </div>
            </Link>
            
            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer opacity-50">
              <BarChart3 className="w-8 h-8 text-green-500 mb-2" />
              <h3 className="font-medium text-gray-900">数据统计</h3>
              <p className="text-sm text-gray-600">查看详细统计报告（即将上线）</p>
            </div>
            
            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer opacity-50">
              <Settings className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="font-medium text-gray-900">系统设置</h3>
              <p className="text-sm text-gray-600">配置系统参数（即将上线）</p>
            </div>
          </div>
        </div>

        {/* 最近活动 */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">系统状态</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-800">Supabase 数据库</span>
              <span className="text-green-600 font-medium">
                {loading ? '检查中...' : '正常运行'}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-blue-800">API 服务</span>
              <span className="text-blue-600 font-medium">正常运行</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}