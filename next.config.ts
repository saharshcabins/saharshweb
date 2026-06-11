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
    domains: [
      "media.istockphoto.com",
      "imgs.search.brave.com",
      "plus.unsplash.com",
      "images.unsplash.com",
    ],
    quality: 75,
  },
};

export default nextConfig;
