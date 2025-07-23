import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Custom500() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>服务器错误 - DeFi收益池聚合平台</title>
        <meta name="description" content="服务器出现了一些问题，请稍后再试。" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <Card>
            <CardContent className="p-8 text-center">
              {/* 500 图标 */}
              <div className="mb-6">
                <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
              </div>

              {/* 标题和描述 */}
              <h1 className="text-2xl font-bold text-foreground mb-2">
                服务器错误
              </h1>
              <p className="text-muted-foreground mb-8">
                抱歉，服务器出现了一些问题。我们正在努力修复，请稍后再试。
              </p>

              {/* 操作按钮 */}
              <div className="space-y-3">
                <Button onClick={handleRefresh} className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  刷新页面
                </Button>
                
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    <Home className="h-4 w-4 mr-2" />
                    返回首页
                  </Button>
                </Link>
              </div>

              {/* 帮助信息 */}
              <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
                <p>问题仍然存在？请</p>
                <Link href="/request" className="text-primary hover:underline">
                  联系我们
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}