import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "public_html",
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ prevents type errors from breaking the build
  },
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};

export default nextConfig;
