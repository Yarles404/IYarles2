/** @type {import('next').NextConfig} */

var cdkOutput = require('./cdk-outputs.json');
var bucketWebsiteUrl = cdkOutput['IYarles2Stack']['websiteUrl'];
console.log(bucketWebsiteUrl);

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: bucketWebsiteUrl,
}

module.exports = nextConfig
