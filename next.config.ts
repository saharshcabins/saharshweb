import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ prevents type errors from breaking the build
  },

  trailingSlash: true,
};

export default nextConfig;
