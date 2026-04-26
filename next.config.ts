import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    // unoptimized: true,
    domains: [
      "media.istockphoto.com",
      "imgs.search.brave.com",
      "plus.unsplash.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
