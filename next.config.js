/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: 'http://100.25.119.23:5000/api',
  },
}

module.exports = nextConfig
