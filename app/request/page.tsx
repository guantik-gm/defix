'use client';

import React, { useState } from 'react';
import { ArrowLeft, Send, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { RequestType } from '@/types';

interface FormData {
  type: RequestType;
  protocolName: string;
  officialWebsite: string;
  contactEmail: string;
  description?: string; // 仅用于数据纠错和其他反馈
}

const initialFormData: FormData = {
  type: RequestType.PROTOCOL_INCLUSION,
  protocolName: '',
  officialWebsite: '',
  contactEmail: '',
  description: '',
};


export default function RequestPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // 处理输入变化
  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };


  // 验证表单
  const validateForm = (): string[] => {
    const errors: string[] = [];
    
    if (formData.type === RequestType.PROTOCOL_INCLUSION) {
      if (!formData.protocolName.trim()) errors.push('协议名称是必填项');
      if (!formData.officialWebsite.trim()) errors.push('官方网站是必填项');
    }
    
    if (formData.type === RequestType.DATA_CORRECTION || formData.type === RequestType.OTHER_FEEDBACK) {
      if (!formData.description?.trim()) errors.push('问题描述是必填项');
    }
    
    if (!formData.contactEmail.trim()) errors.push('联系邮箱是必填项');
    
    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.contactEmail && !emailRegex.test(formData.contactEmail)) {
      errors.push('请输入有效的邮箱地址');
    }
    
    return errors;
  };

  // 提交表单
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setErrorMessage(errors.join('、'));
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData(initialFormData);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || '提交失败，请稍后重试');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      setSubmitStatus('error');
      setErrorMessage('网络错误，请检查连接后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              提交收录请求
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              推荐优质的 DeFi 协议项目，我们的 DeFi Research Agent 将自动完成详细调研分析
            </p>
          </div>
        </div>

        {/* 提交成功状态 */}
        {submitStatus === 'success' && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <h3 className="text-green-800 font-medium">提交成功！</h3>
                <p className="text-green-700 text-sm mt-1">
                  我们已收到您的请求，专业团队将在 3-7 个工作日内进行评估和调研。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 错误状态 */}
        {submitStatus === 'error' && errorMessage && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
              <div>
                <h3 className="text-red-800 font-medium">提交失败</h3>
                <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* 表单 */}
        <div className="bg-white rounded-lg shadow-sm border">
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
            {/* 请求类型 */}
            <div>
              <label className="block text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2">
                请求类型 *
              </label>
              <div className="grid grid-cols-2 sm:flex gap-2">
                {Object.values(RequestType).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleInputChange('type', type as RequestType)}
                    className={`px-3 sm:px-4 py-3 sm:py-2 text-sm sm:text-sm rounded-lg sm:rounded-full border transition-colors touch-target ${
                      formData.type === type
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    {type === RequestType.PROTOCOL_INCLUSION ? '协议收录' : 
                     type === RequestType.DATA_CORRECTION ? '数据纠错' : '其他反馈'}
                  </button>
                ))}
              </div>
            </div>

            {/* 协议收录表单 */}
            {formData.type === RequestType.PROTOCOL_INCLUSION && (
              <>
                {/* 协议信息 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      协议名称 *
                    </label>
                    <Input
                      type="text"
                      value={formData.protocolName}
                      onChange={(e) => handleInputChange('protocolName', e.target.value)}
                      placeholder="例如：Uniswap"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      官方网站 *
                    </label>
                    <Input
                      type="url"
                      value={formData.officialWebsite}
                      onChange={(e) => handleInputChange('officialWebsite', e.target.value)}
                      placeholder="https://uniswap.org"
                      required
                    />
                  </div>
                </div>

                {/* 联系邮箱 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系邮箱 *
                  </label>
                  <Input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    我们将通过此邮箱与您联系，告知评估结果
                  </p>
                </div>

                {/* DeFi Research Agent 提示 */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-blue-800 font-medium text-sm">DeFi Research Agent 智能调研</h3>
                      <p className="text-blue-700 text-sm mt-1">
                        我们的 AI 智能代理将自动收集协议的详细信息，包括：代币经济学、安全审计、团队背景、技术架构、投资机会等。
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 数据纠错和其他反馈表单 */}
            {(formData.type === RequestType.DATA_CORRECTION || formData.type === RequestType.OTHER_FEEDBACK) && (
              <>
                {/* X链接指引 */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenovenRule" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-gray-800 font-medium text-sm">联系我们</h3>
                      <p className="text-gray-700 text-sm mt-1">
                        对于数据纠错和其他反馈，您也可以直接通过 X (Twitter) 联系我们：
                        <a 
                          href="https://x.com/defixplatform" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                        >
                          @defixplatform
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 联系邮箱 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系邮箱 *
                  </label>
                  <Input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* 问题描述 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    问题描述 *
                  </label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="请详细描述您发现的问题或想要反馈的内容"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </>
            )}


            {/* 提交按钮 */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    提交中...
                  </>                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    提交请求
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* 说明信息 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-800 font-medium mb-2">审核流程说明</h3>
          <div className="text-blue-700 text-sm space-y-1">
            <p>1. <strong>智能收集</strong>：DeFi Research Agent 将自动收集协议的详细信息</p>
            <p>2. <strong>深度分析</strong>：AI 系统将进行全面的风险评估和技术分析</p>
            <p>3. <strong>报告生成</strong>：自动生成调研报告和分析报告</p>
            <p>4. <strong>平台收录</strong>：符合标准的项目将正式收录到平台</p>
          </div>
        </div>
      </div>
    </div>
  );
}