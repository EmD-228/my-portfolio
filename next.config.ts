import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
