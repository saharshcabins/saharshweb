import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.istockphoto.com", "imgs.search.brave.com", "plus.unsplash.com", "images.unsplash.com"],
  },
  output: "export",
  experimental: {
    optimizeCss: false, // disable critters usage
  },
};

export default nextConfig;
