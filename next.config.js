/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn-icons-png.flaticon.com",
    //     pathname: "128/4494/4494488.png",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "cdn-icons-png.flaticon.com",
    //     pathname: "128/4494/4494488.png",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "cdn-icons-png.flaticon.com",
    //     pathname: "128/3670/3670124.png",
    //   },
    // ],
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
