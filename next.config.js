/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["umc-7th-miggi.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
