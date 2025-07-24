import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '提交收录请求 | DeFi收益池聚合平台',
  description: '向我们推荐优质的DeFi收益池项目，专业团队将进行深度调研和风险分析。支持各类DeFi协议和收益策略。',
  keywords: ['DeFi收录', '项目推荐', '收益池推荐', '协议分析', 'DeFi投资', '项目申请', '收益策略'],
  openGraph: {
    title: '提交收录请求 | DeFi收益池聚合平台',
    description: '向我们推荐优质的DeFi收益池项目，专业团队将进行深度调研和风险分析。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '提交收录请求 | DeFi收益池聚合平台',
    description: '向我们推荐优质的DeFi收益池项目，专业团队将进行深度调研和风险分析。',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}