/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: 'http://100.48.87.40:5000/api',
  },
}

module.exports = nextConfig
