import path from 'path'

import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

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

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default nextConfig
