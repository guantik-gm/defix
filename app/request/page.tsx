'use client';

import React, { useState } from 'react';
import { ArrowLeft, Send, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { RequestType, RiskLevel } from '@/types';

interface FormData {
  type: RequestType;
  poolName: string;
  protocolName: string;
  officialWebsite: string;
  chain: string[];
  token: string;
  investmentType: string;
  expectedAPR: string;
  riskLevel: RiskLevel;
  contactEmail: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  type: RequestType.POOL_INCLUSION,
  poolName: '',
  protocolName: '',
  officialWebsite: '',
  chain: [],
  token: '',
  investmentType: '',
  expectedAPR: '',
  riskLevel: RiskLevel.MEDIUM,
  contactEmail: '',
  additionalInfo: '',
};

const availableChains = [
  'Ethereum', 'BSC', 'Polygon', 'Arbitrum', 'Optimism', 
  'Avalanche', 'Fantom', 'Solana', 'Base', 'Linea'
];

const investmentTypes = [
  '流动性挖矿', '单币质押', '借贷协议', 'DEX交易', 
  '合成资产', '保险协议', '衍生品', '跨链桥', '其他'
];

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

  // 处理链选择
  const toggleChain = (chain: string) => {
    setFormData(prev => ({
      ...prev,
      chain: prev.chain.includes(chain)
        ? prev.chain.filter(c => c !== chain)
        : [...prev.chain, chain]
    }));
  };

  // 验证表单
  const validateForm = (): string[] => {
    const errors: string[] = [];
    
    if (!formData.poolName.trim()) errors.push('收益池名称是必填项');
    if (!formData.protocolName.trim()) errors.push('协议名称是必填项');
    if (!formData.officialWebsite.trim()) errors.push('官方网站是必填项');
    if (formData.chain.length === 0) errors.push('请至少选择一个区块链');
    if (!formData.token.trim()) errors.push('Token是必填项');
    if (!formData.investmentType.trim()) errors.push('投资类型是必填项');
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
              向我们推荐优质的 DeFi 收益池项目，我们的专业团队将进行调研分析
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
                    {type === RequestType.POOL_INCLUSION ? '收益池收录' : 
                     type === RequestType.PROTOCOL_ANALYSIS ? '协议分析' : 
                     type === RequestType.DATA_CORRECTION ? '数据纠错' : '其他反馈'}
                  </button>
                ))}
              </div>
            </div>

            {/* 基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  收益池名称 *
                </label>
                <Input
                  type="text"
                  value={formData.poolName}
                  onChange={(e) => handleInputChange('poolName', e.target.value)}
                  placeholder="例如：Compound USDC"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  协议名称 *
                </label>
                <Input
                  type="text"
                  value={formData.protocolName}
                  onChange={(e) => handleInputChange('protocolName', e.target.value)}
                  placeholder="例如：Compound"
                  required
                />
              </div>
            </div>

            {/* 官方网站 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                官方网站 *
              </label>
              <Input
                type="url"
                value={formData.officialWebsite}
                onChange={(e) => handleInputChange('officialWebsite', e.target.value)}
                placeholder="https://compound.finance"
                required
              />
            </div>

            {/* 区块链选择 */}
            <div>
              <label className="block text-base sm:text-sm font-medium text-gray-700 mb-3 sm:mb-2">
                支持的区块链 *
              </label>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2">
                {availableChains.map((chain) => (
                  <button
                    key={chain}
                    type="button"
                    onClick={() => toggleChain(chain)}
                    className={`px-3 py-2 sm:py-1 text-sm rounded-lg sm:rounded-full border transition-colors touch-target ${
                      formData.chain.includes(chain)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    {chain}
                  </button>
                ))}
              </div>
              {formData.chain.length > 0 && (
                <div className="mt-3 sm:mt-2 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                  已选择：{formData.chain.join(', ')}
                </div>
              )}
            </div>

            {/* Token 和投资类型 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Token *
                </label>
                <Input
                  type="text"
                  value={formData.token}
                  onChange={(e) => handleInputChange('token', e.target.value)}
                  placeholder="例如：USDC、ETH、BTC"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  投资类型 *
                </label>
                <select
                  value={formData.investmentType}
                  onChange={(e) => handleInputChange('investmentType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">请选择投资类型</option>
                  {investmentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* APR 和风险等级 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  预期 APR
                </label>
                <Input
                  type="text"
                  value={formData.expectedAPR}
                  onChange={(e) => handleInputChange('expectedAPR', e.target.value)}
                  placeholder="例如：5-8%、10%+"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  风险等级评估
                </label>
                <select
                  value={formData.riskLevel}
                  onChange={(e) => handleInputChange('riskLevel', e.target.value as RiskLevel)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={RiskLevel.LOW}>低风险</option>
                  <option value={RiskLevel.MEDIUM}>中风险</option>
                  <option value={RiskLevel.HIGH}>高风险</option>
                  <option value={RiskLevel.VERY_HIGH}>极高风险</option>
                </select>
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

            {/* 补充信息 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                补充信息
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="请提供更多关于该项目的信息，如：特殊机制、创新点、团队背景等"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
                  </>
                ) : (
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
            <p>1. <strong>初步筛选</strong>：我们将在 1-2 个工作日内对项目进行初步评估</p>
            <p>2. <strong>深度调研</strong>：通过初步筛选的项目将进入深度调研阶段（3-5个工作日）</p>
            <p>3. <strong>报告发布</strong>：调研完成后将发布调研报告和分析报告</p>
            <p>4. <strong>平台收录</strong>：符合标准的项目将正式收录到平台</p>
          </div>
        </div>
      </div>
    </div>
  );
}