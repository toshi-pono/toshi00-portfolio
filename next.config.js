/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import "styles/variables.scss";
    `,
    includePaths: [path.join(__dirname, 'src')],
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
