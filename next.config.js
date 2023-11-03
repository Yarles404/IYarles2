/** @type {import('next').NextConfig} */

var assetPrefix = undefined;
if (process.env.ENVIRONMENT !== 'dev') {
  var cdkOutput = require('./cdk-outputs.json');
  assetPrefix = cdkOutput['IYarles2Stack']['websiteUrl'];
}


const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig
