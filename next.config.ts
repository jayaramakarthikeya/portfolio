import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === 'production'
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
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  output: "export",
  reactStrictMode: true,
}

export default nextConfig
