import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-week3',
  assetPrefix: '/portfolio-week3/',
  images: { unoptimized: true },
};

export default nextConfig;
