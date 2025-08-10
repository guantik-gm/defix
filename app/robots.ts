import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://defi.web3x.icu'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',  // 阻止爬取API端点
        '/_next/',  // 阻止爬取Next.js内部文件
        '/private/',  // 如果有私有页面
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}