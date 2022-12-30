/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack'
    })
    return config
  },
  images: {
    domains: ['127.0.0.1', 'developers.elementor.com'] // TODO elementor is temporary. Use local source  for loading placeholder instead.
  },
}

module.exports = nextConfig
