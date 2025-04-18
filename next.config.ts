import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
