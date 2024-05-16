/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    NEXT_PUBLIC_MICROCMS_API_KEY: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  },
};

export default nextConfig;
