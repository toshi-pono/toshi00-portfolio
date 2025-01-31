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
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://toshi00.dev/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
