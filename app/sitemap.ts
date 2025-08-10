import { MetadataRoute } from 'next'
import { parsePools, parseProtocols } from '@/lib/file-data-parser'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://defi.web3x.icu'
  
  // 基础页面
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/request`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  try {
    // 获取所有收益池数据
    const pools = await parsePools()
    const protocols = await parseProtocols()

    // 生成收益池相关的动态路由
    const poolRoutes: MetadataRoute.Sitemap = []

    // 为每个协议生成研究和分析报告页面
    protocols.forEach(protocol => {
      // 研究报告页面
      poolRoutes.push({
        url: `${baseUrl}/reports/research/${protocol.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })

      // 分析报告页面
      poolRoutes.push({
        url: `${baseUrl}/reports/analysis/${protocol.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })
    })

    // 检查实际存在的研究报告文件
    const researchDir = path.join(process.cwd(), 'web3', 'protocol', 'research')
    if (fs.existsSync(researchDir)) {
      const researchFiles = fs.readdirSync(researchDir)
      researchFiles
        .filter(file => file.endsWith('.md'))
        .forEach(file => {
          const slug = file.replace('.md', '')
          poolRoutes.push({
            url: `${baseUrl}/reports/research/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
          })
        })
    }

    return [...staticRoutes, ...poolRoutes]

  } catch (error) {
    console.error('Error generating sitemap:', error)
    // 出错时返回基础路由
    return staticRoutes
  }
}