import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/flutter-developer-portfolio',
  assetPrefix: '/flutter-developer-portfolio',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
