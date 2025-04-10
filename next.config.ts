import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/LiPoWeRaDPortfolio",
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  output: "export", 
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
