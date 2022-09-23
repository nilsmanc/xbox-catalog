/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['store-images.s-microsoft.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig
