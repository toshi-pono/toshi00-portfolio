import path from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@use "${path.resolve(__dirname, 'src/styles/variables.scss')}" as *;`,
  },
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
