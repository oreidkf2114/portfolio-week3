import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/portfolio-week3' : '',
  assetPrefix: isProd ? '/portfolio-week3/' : '',
  images: { unoptimized: true },
};

export default nextConfig;
