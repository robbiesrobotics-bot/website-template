/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Serve public assets from this template's public directory
  env: {
    NEXT_PUBLIC_TEMPLATE: 'mri',
  },
};

module.exports = nextConfig;
