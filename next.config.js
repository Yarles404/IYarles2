/** @type {import('next').NextConfig} */

var assetPrefix = undefined;
if (process.env.ENVIRONMENT !== 'dev') {
  var cdkOutput = require('./cdk-outputs.json');
  assetPrefix = cdkOutput['IYarles2Stack']['websiteUrl'];
}


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  output: 'export',
  trailingSLash: true
}

module.exports = nextConfig
