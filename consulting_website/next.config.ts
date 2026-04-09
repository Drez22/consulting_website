import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/consulting",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
