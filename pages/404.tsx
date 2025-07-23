import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>页面未找到 - DeFi收益池聚合平台</title>
        <meta name="description" content="抱歉，您访问的页面不存在。" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <Card>
            <CardContent className="p-8 text-center">
              {/* 404 图标 */}
              <div className="mb-6">
                <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground">404</span>
                </div>
              </div>

              {/* 标题和描述 */}
              <h1 className="text-2xl font-bold text-foreground mb-2">
                页面未找到
              </h1>
              <p className="text-muted-foreground mb-8">
                抱歉，您访问的页面不存在或已被移动。
              </p>

              {/* 操作按钮 */}
              <div className="space-y-3">
                <Link href="/">
                  <Button className="w-full">
                    <Home className="h-4 w-4 mr-2" />
                    返回首页
                  </Button>
                </Link>
                
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    搜索收益池
                  </Button>
                </Link>
                
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  返回上一页
                </Button>
              </div>

              {/* 帮助信息 */}
              <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
                <p>如果您认为这是一个错误，请</p>
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