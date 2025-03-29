import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/hello",
        destination: "/",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
