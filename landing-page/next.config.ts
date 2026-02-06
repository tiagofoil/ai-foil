import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://ai-foil-blog.vercel.app/blog',
      },
      {
        source: '/blog/:path*',
        destination: 'https://ai-foil-blog.vercel.app/blog/:path*',
      },
    ]
  }
};

export default nextConfig;
