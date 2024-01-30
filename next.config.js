/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kkb-sounds.s3.us-west-1.amazonaws.com"
      }
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  experimental: {
    ppr: true,
  },
};

module.exports = nextConfig;
