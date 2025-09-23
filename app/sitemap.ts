import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://defi.web3x.icu'
  
  // 基础页面 (移除admin)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/request`,
      lastModified: new Date(),
    },
  ]

  try {
    const poolRoutes: MetadataRoute.Sitemap = []

    // 唯一数据源：扫描研究文件夹
    const researchDir = path.join(process.cwd(), 'web3', 'protocol', 'research')
    if (fs.existsSync(researchDir)) {
      const researchFiles = fs.readdirSync(researchDir)
      
      // 生成 research 页面URL
      researchFiles
        .filter(file => file.endsWith('.md'))
        .forEach(file => {
          const slug = file.replace('.md', '')
          
          if (slug && slug !== 'admin') {
            poolRoutes.push({
              url: `${baseUrl}/reports/research/${slug}`,
              lastModified: new Date(),
            })
          }
        })
      
      // 生成 analysis 页面URL
      researchFiles
        .filter(file => file.endsWith('.html'))
        .forEach(file => {
          const slug = file.replace('.html', '')
          
          if (slug && slug !== 'admin') {
            poolRoutes.push({
              url: `${baseUrl}/reports/analysis/${slug}`,
              lastModified: new Date(),
            })
          }
        })
    }

    return [...staticRoutes, ...poolRoutes]

  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticRoutes
  }
}