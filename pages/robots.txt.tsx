import { GetServerSideProps } from 'next';

export default function Robots() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin or sensitive pages if any
# Disallow: /admin
# Disallow: /api

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  res.write(robotsTxt);
  res.end();

  return {
    props: {}
  };
};