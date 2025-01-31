import path from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@use "${path.resolve(__dirname, 'src/styles/variables.scss')}";`,
  },
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
