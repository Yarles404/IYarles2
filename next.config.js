/** @type {import('next').NextConfig} */

var cdkOutput = require('./cdk-outputs.json');
var bucketUrl = cdkOutput['stack-name']['bucket-url'];

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: bucketUrl, // cause static assets to resolve as './' instead of '/'
}

module.exports = nextConfig
