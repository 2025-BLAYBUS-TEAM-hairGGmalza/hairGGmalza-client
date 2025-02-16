import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Vercel 및 Netlify에서 SSR 및 API 핸들러 지원
  async redirects() {
    return [
      {
        source: "/(.*)",
        destination: "https://haertz.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
