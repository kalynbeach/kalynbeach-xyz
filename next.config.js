/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uawmx9axdaxaqhm1.public.blob.vercel-storage.com"
      }
    ],
  },
};

module.exports = nextConfig;
