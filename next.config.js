/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '.', // cause static assets to resolve as './' instead of '/'
}

module.exports = nextConfig
