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
        hostname: "**", // Allow any HTTPS domain for production
      },
    ],
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here if needed
  },
};

export default nextConfig;
