import path from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  sassOptions: {
    additionalData: `@use "${path.resolve(__dirname, 'src/styles/variables.scss')}" as *;`,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
