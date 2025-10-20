import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // prevents Vercel image optimization issues
  typescript: {
    ignoreBuildErrors: false, // ensures build halts on type errors
  },
};

export default nextConfig;