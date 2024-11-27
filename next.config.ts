import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    //ppr: true,
    //reactCompiler: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
}

export default nextConfig
