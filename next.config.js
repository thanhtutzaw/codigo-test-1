/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nft.fluffyhugs.io',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
