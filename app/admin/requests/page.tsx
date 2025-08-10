'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Eye, CheckCircle, XCircle, Clock, Filter, Search, Download, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface Request {
  id: string;
  type: 'protocol_inclusion' | 'data_correction' | 'other_feedback';
  protocol_name?: string;
  official_website?: string;
  contact_email: string;
  description?: string;
  status: 'pending' | 'in_review' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

const RequestTypeLabels = {
  protocol_inclusion: '协议收录',
  data_correction: '数据纠错',
  other_feedback: '其他反馈'
};

const StatusLabels = {
  pending: '待处理',
  in_review: '审核中',
  approved: '已通过',
  rejected: '已拒绝'
};

const StatusColors = {
  pending: 'bg-orange-100 text-orange-800',
  in_review: 'bg-blue-100 text-blue-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800'
};

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/requests');
      const result = await response.json();
      
      if (result.success && result.data) {
        setRequests(result.data.sort((a: Request, b: Request) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        ));
      }
    } catch (error) {
      console.error('Failed to fetch requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateRequestStatus = async (requestId: string, newStatus: Request['status']) => {
    setUpdating(requestId);
    try {
      const response = await fetch('/api/requests', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: requestId,
          status: newStatus
        }),
      });

      if (response.ok) {
        setRequests(prev => prev.map(req => 
          req.id === requestId 
            ? { ...req, status: newStatus, updated_at: new Date().toISOString() }
            : req
        ));
      }
    } catch (error) {
      console.error('Failed to update request status:', error);
    } finally {
      setUpdating(null);
    }
  };

  const deleteRequest = async (requestId: string) => {
    setDeleting(requestId);
    try {
      console.log('开始删除请求:', requestId);
      
      const response = await fetch('/api/requests', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: requestId
        }),
      });

      console.log('删除API响应状态:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('删除API响应数据:', result);
        
        setRequests(prev => prev.filter(req => req.id !== requestId));
        setDeleteConfirm(null);
      } else {
        const errorResult = await response.json();
        console.error('删除失败 - 服务器响应:', errorResult);
        alert(`删除失败: ${errorResult.message || '未知错误'}`);
      }
    } catch (error) {
      console.error('删除请求时发生错误:', error);
      alert('删除失败，请检查网络连接');
    } finally {
      setDeleting(null);
    }
  };

  const filteredRequests = requests.filter(request => {
    const matchesFilter = filter === 'all' || request.status === filter;
    const matchesSearch = !search || 
      request.protocol_name?.toLowerCase().includes(search.toLowerCase()) ||
      request.contact_email.toLowerCase().includes(search.toLowerCase()) ||
      request.description?.toLowerCase().includes(search.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const exportToCSV = () => {
    const csv = [
      ['ID', '类型', '协议名称', '联系邮箱', '状态', '创建时间'].join(','),
      ...filteredRequests.map(req => [
        req.id,
        RequestTypeLabels[req.type],
        req.protocol_name || '',
        req.contact_email,
        StatusLabels[req.status],
        new Date(req.created_at).toLocaleString('zh-CN')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `requests_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 导航栏 */}
        <div className="mb-6">
          <Link href="/admin">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回管理后台
            </Button>
          </Link>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                请求管理
              </h1>
              <p className="text-gray-600 mt-1">
                共 {filteredRequests.length} 条请求
              </p>
            </div>
            
            <Button onClick={exportToCSV} variant="outline" className="mt-4 sm:mt-0">
              <Download className="w-4 h-4 mr-2" />
              导出 CSV
            </Button>
          </div>
        </div>

        {/* 筛选和搜索 */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="搜索协议名称、邮箱或描述..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">全部状态</option>
                <option value="pending">待处理</option>
                <option value="in_review">审核中</option>
                <option value="approved">已通过</option>
                <option value="rejected">已拒绝</option>
              </select>
            </div>
          </div>
        </div>

        {/* 请求列表 */}
        <div className="bg-white rounded-lg shadow-sm border">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">加载中...</p>
            </div>
          ) : filteredRequests.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              暂无请求记录
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      类型
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      详情
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      联系邮箱
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      状态
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      创建时间
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {RequestTypeLabels[request.type]}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {request.type === 'protocol_inclusion' ? (
                            <>
                              <div className="font-medium">{request.protocol_name}</div>
                              <div className="text-gray-500 truncate max-w-xs">{request.official_website}</div>
                            </>
                          ) : (
                            <div className="text-gray-900 max-w-xs truncate">
                              {request.description}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.contact_email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${StatusColors[request.status]}`}>
                          {StatusLabels[request.status]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(request.created_at).toLocaleString('zh-CN')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedRequest(request)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          
                          {request.status === 'pending' && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateRequestStatus(request.id, 'in_review')}
                                disabled={updating === request.id}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                <Clock className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateRequestStatus(request.id, 'approved')}
                                disabled={updating === request.id}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateRequestStatus(request.id, 'rejected')}
                                disabled={updating === request.id}
                                className="text-red-600 hover:text-red-700"
                              >
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          
                          {request.status === 'in_review' && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateRequestStatus(request.id, 'approved')}
                                disabled={updating === request.id}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateRequestStatus(request.id, 'rejected')}
                                disabled={updating === request.id}
                                className="text-red-600 hover:text-red-700"
                              >
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setDeleteConfirm(request.id)}
                            disabled={deleting === request.id}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 详情弹窗 */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    请求详情
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedRequest(null)}
                  >
                    关闭
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">请求类型</label>
                    <p className="text-sm text-gray-900">{RequestTypeLabels[selectedRequest.type]}</p>
                  </div>
                  
                  {selectedRequest.protocol_name && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">协议名称</label>
                      <p className="text-sm text-gray-900">{selectedRequest.protocol_name}</p>
                    </div>
                  )}
                  
                  {selectedRequest.official_website && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">官方网站</label>
                      <p className="text-sm text-gray-900">
                        <a href={selectedRequest.official_website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedRequest.official_website}
                        </a>
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">联系邮箱</label>
                    <p className="text-sm text-gray-900">{selectedRequest.contact_email}</p>
                  </div>
                  
                  {selectedRequest.description && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">描述</label>
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedRequest.description}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">状态</label>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${StatusColors[selectedRequest.status]}`}>
                      {StatusLabels[selectedRequest.status]}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">创建时间</label>
                      <p className="text-sm text-gray-900">
                        {new Date(selectedRequest.created_at).toLocaleString('zh-CN')}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">更新时间</label>
                      <p className="text-sm text-gray-900">
                        {new Date(selectedRequest.updated_at).toLocaleString('zh-CN')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 删除确认对话框 */}
        {deleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    确认删除
                  </h3>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  您确定要删除这个请求吗？此操作无法撤销。
                </p>
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setDeleteConfirm(null)}
                  disabled={deleting === deleteConfirm}
                >
                  取消
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteRequest(deleteConfirm)}
                  disabled={deleting === deleteConfirm}
                >
                  {deleting === deleteConfirm ? '删除中...' : '确认删除'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}