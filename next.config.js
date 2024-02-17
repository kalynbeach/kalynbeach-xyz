const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

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

module.exports = withBundleAnalyzer(nextConfig);
