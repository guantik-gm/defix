/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  staticPageGenerationTimeout: 120,
  async rewrites() {
    return [
      {
        source: '/web3/:path*',
        destination: '/web3/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/web3/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;