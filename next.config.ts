import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/ankaufsprofil", destination: "/#investment", permanent: true },
      {
        source: "/immobilie-verkaufen",
        destination: "/#immobilie-verkaufen",
        permanent: true,
      },
      {
        source: "/mehrfamilienhaus-verkaufen",
        destination: "/#mehrfamilienhaus-verkaufen",
        permanent: true,
      },
      {
        source: "/gewerbeimmobilie-verkaufen",
        destination: "/#gewerbeimmobilie-verkaufen",
        permanent: true,
      },
      {
        source: "/grundstueck-verkaufen",
        destination: "/#grundstueck-verkaufen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
