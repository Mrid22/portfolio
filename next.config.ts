import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
