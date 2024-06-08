/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "**",
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

module.exports = nextConfig;
