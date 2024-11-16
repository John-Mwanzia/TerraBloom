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
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "**",

      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "as1.ftcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "utfs.io",
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
