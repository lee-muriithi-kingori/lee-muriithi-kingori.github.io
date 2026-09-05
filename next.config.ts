import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel manages its own output — standalone is self-host/Docker only
  // and breaks Vercel builds. Pages CI rewrites this line to "export".
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
