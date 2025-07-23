import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { VALIDATION_RULES } from '@/lib/constants';
import { isValidEmail } from '@/lib/utils';

interface FormData {
  poolName: string;
  protocolName: string;
  description: string;
  userEmail: string;
}

interface FormErrors {
  poolName?: string;
  protocolName?: string;
  description?: string;
  userEmail?: string;
  submit?: string;
}

export default function RequestPage() {
  const [formData, setFormData] = useState<FormData>({
    poolName: '',
    protocolName: '',
    description: '',
    userEmail: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState<string>('');

  // 验证表单
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 验证收益池名称
    if (!formData.poolName.trim()) {
      newErrors.poolName = '收益池名称为必填项';
    } else if (formData.poolName.length < VALIDATION_RULES.POOL_NAME.minLength) {
      newErrors.poolName = `收益池名称至少需要${VALIDATION_RULES.POOL_NAME.minLength}个字符`;
    } else if (formData.poolName.length > VALIDATION_RULES.POOL_NAME.maxLength) {
      newErrors.poolName = `收益池名称不能超过${VALIDATION_RULES.POOL_NAME.maxLength}个字符`;
    }

    // 验证协议名称
    if (!formData.protocolName.trim()) {
      newErrors.protocolName = '协议名称为必填项';
    } else if (formData.protocolName.length < VALIDATION_RULES.PROTOCOL_NAME.minLength) {
      newErrors.protocolName = `协议名称至少需要${VALIDATION_RULES.PROTOCOL_NAME.minLength}个字符`;
    } else if (formData.protocolName.length > VALIDATION_RULES.PROTOCOL_NAME.maxLength) {
      newErrors.protocolName = `协议名称不能超过${VALIDATION_RULES.PROTOCOL_NAME.maxLength}个字符`;
    }

    // 验证详细描述
    if (!formData.description.trim()) {
      newErrors.description = '详细描述为必填项';
    } else if (formData.description.length < VALIDATION_RULES.DESCRIPTION.minLength) {
      newErrors.description = `详细描述至少需要${VALIDATION_RULES.DESCRIPTION.minLength}个字符`;
    } else if (formData.description.length > VALIDATION_RULES.DESCRIPTION.maxLength) {
      newErrors.description = `详细描述不能超过${VALIDATION_RULES.DESCRIPTION.maxLength}个字符`;
    }

    // 验证邮箱（可选）
    if (formData.userEmail.trim() && !isValidEmail(formData.userEmail)) {
      newErrors.userEmail = '请输入有效的邮箱地址';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理输入变化
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // 清除对应字段的错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // 提交表单
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          poolName: formData.poolName.trim(),
          protocolName: formData.protocolName.trim(),
          description: formData.description.trim(),
          userEmail: formData.userEmail.trim() || undefined
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '提交失败');
      }

      setSubmitted(true);
      setRequestId(data.requestId || '');
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : '提交失败，请稍后重试'
      });
    } finally {
      setLoading(false);
    }
  };

  // 重新提交
  const handleReset = () => {
    setSubmitted(false);
    setRequestId('');
    setFormData({
      poolName: '',
      protocolName: '',
      description: '',
      userEmail: ''
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <>
        <Head>
          <title>提交成功 - DeFi收益池聚合平台</title>
          <meta name="description" content="您的收录请求已成功提交，我们将尽快处理" />
          <meta name="robots" content="noindex" />
        </Head>

        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 text-green-500">
                <CheckCircle className="h-16 w-16" />
              </div>
              <CardTitle className="text-xl">提交成功！</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                您的收录请求已成功提交，我们将尽快进行处理。
              </p>
              
              {requestId && (
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground mb-1">请求编号</p>
                  <p className="font-mono text-sm">{requestId}</p>
                </div>
              )}

              <div className="space-y-2">
                <Button 
                  onClick={handleReset} 
                  variant="outline" 
                  className="w-full"
                >
                  提交新的请求
                </Button>
                <Link href="/" className="block">
                  <Button className="w-full">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    返回首页
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>提交收录请求 - DeFi收益池聚合平台</title>
        <meta name="description" content="提交您希望收录的DeFi收益池信息，我们将进行专业的调研分析" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* 导航 */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回首页
              </Button>
            </Link>
            
            <h1 className="text-3xl font-bold text-foreground mb-2">
              提交收录请求
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              请填写您希望我们收录和分析的DeFi收益池信息。我们的专业团队将进行深度调研，并生成详细的分析报告。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>收录请求信息</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 收益池名称 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      收益池名称 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      value={formData.poolName}
                      onChange={(e) => handleInputChange('poolName', e.target.value)}
                      placeholder="例如: Uniswap V3 USDC/ETH LP"
                      className={errors.poolName ? 'border-red-500' : ''}
                      disabled={loading}
                    />
                    {errors.poolName && (
                      <p className="text-sm text-red-500">{errors.poolName}</p>
                    )}
                  </div>

                  {/* 协议名称 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      所属协议 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      value={formData.protocolName}
                      onChange={(e) => handleInputChange('protocolName', e.target.value)}
                      placeholder="例如: Uniswap, Compound, Aave"
                      className={errors.protocolName ? 'border-red-500' : ''}
                      disabled={loading}
                    />
                    {errors.protocolName && (
                      <p className="text-sm text-red-500">{errors.protocolName}</p>
                    )}
                  </div>

                  {/* 详细描述 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      详细描述 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="请详细描述该收益池的特点，包括：&#10;1. 收益机制（如流动性挖矿、借贷等）&#10;2. 主要风险点&#10;3. 适用的市场环境&#10;4. 任何其他重要信息"
                      className={`w-full px-3 py-2 border rounded-md min-h-[120px] resize-y ${
                        errors.description ? 'border-red-500' : 'border-input'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {formData.description.length}/{VALIDATION_RULES.DESCRIPTION.maxLength} 字符
                      </span>
                      <span>最少 {VALIDATION_RULES.DESCRIPTION.minLength} 字符</span>
                    </div>
                    {errors.description && (
                      <p className="text-sm text-red-500">{errors.description}</p>
                    )}
                  </div>

                  {/* 联系邮箱 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      联系邮箱 <span className="text-muted-foreground">(可选)</span>
                    </label>
                    <Input
                      type="email"
                      value={formData.userEmail}
                      onChange={(e) => handleInputChange('userEmail', e.target.value)}
                      placeholder="your@email.com"
                      className={errors.userEmail ? 'border-red-500' : ''}
                      disabled={loading}
                    />
                    <p className="text-xs text-muted-foreground">
                      留下邮箱以便我们在处理完成后通知您
                    </p>
                    {errors.userEmail && (
                      <p className="text-sm text-red-500">{errors.userEmail}</p>
                    )}
                  </div>

                  {/* 提交错误 */}
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3">
                      <p className="text-sm text-red-700">{errors.submit}</p>
                    </div>
                  )}

                  {/* 提交按钮 */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          提交请求
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* 说明信息 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">处理流程说明</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-foreground">请求评估</p>
                    <p>我们将评估您提交的收益池请求，确定调研优先级</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-foreground">深度调研</p>
                    <p>专业团队将对收益池进行全面分析，包括技术架构、风险评估等</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-foreground">报告发布</p>
                    <p>生成调研报告和分析报告，并在平台上发布供用户查看</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}