/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_TEMPLATE: 'american-tradesman',
  },
};

module.exports = nextConfig;
