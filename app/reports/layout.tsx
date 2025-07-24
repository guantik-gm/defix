import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | DeFi收益池聚合平台',
    default: '报告中心 | DeFi收益池聚合平台',
  },
  description: '专业的DeFi收益池调研报告和分析报告，为投资者提供深度的项目分析和风险评估。',
  keywords: ['DeFi报告', '调研报告', '分析报告', '风险评估', '收益池分析', 'Web3投资'],
  openGraph: {
    title: '报告中心 | DeFi收益池聚合平台',
    description: '专业的DeFi收益池调研报告和分析报告，为投资者提供深度的项目分析和风险评估。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '报告中心 | DeFi收益池聚合平台',
    description: '专业的DeFi收益池调研报告和分析报告，为投资者提供深度的项目分析和风险评估。',
  },
};

export default function ReportsLayout({
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