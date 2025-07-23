import { GetServerSideProps } from 'next';
import { DataLoader } from '@/lib/dataLoader';

export default function Sitemap() {
  // This component is never rendered - it's only used to generate the sitemap
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const pools = await DataLoader.loadAllPools();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
    
    const staticPages = [
      {
        url: baseUrl,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0
      },
      {
        url: `${baseUrl}/request`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
      }
    ];

    // 添加所有收益池的详情页面
    const poolPages = pools.map(pool => ({
      url: `${baseUrl}/pool/${encodeURIComponent(pool.slug)}`,
      lastmod: new Date(pool.updatedAt).toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.8
    }));

    const allPages = [...staticPages, ...poolPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(sitemap);
    res.end();

    return {
      props: {}
    };
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    
    // 返回基本的sitemap
    const baseSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(baseSitemap);
    res.end();

    return {
      props: {}
    };
  }
};