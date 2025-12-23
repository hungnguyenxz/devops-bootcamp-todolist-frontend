/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: 'http://18.234.149.53:5000/api',
  },
}

module.exports = nextConfig
