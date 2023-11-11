/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nft.fluffyhugs.io', 'thz.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nft.fluffyhugs.io',
        port: '',
        pathname: '/',
      },
    ],
  }
}

module.exports = nextConfig
