import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "graceful-chocolate-74cf3f5835.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "graceful-chocolate-74cf3f5835.media.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "https", 
        hostname: "**.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "https", 
        hostname: "**.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here if needed
  },
};

export default nextConfig;
