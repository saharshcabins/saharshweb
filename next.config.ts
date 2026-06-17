import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "imgs.search.brave.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
