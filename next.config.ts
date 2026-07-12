import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files. `output: "export"` makes
  // `next build` produce a fully static `out/` directory we can ship.
  output: "export",

  // Disable Next.js image optimization — it requires a server (sharp).
  // For a static export we serve images directly.
  images: { unoptimized: true },

  // Add trailing slash so deep routes don't 404 on GitHub Pages.
  // (Pages serves `/foo` from `/foo.html` or `/foo/index.html`.)
  trailingSlash: true,

  // We're a public portfolio — don't strip TypeScript errors silently.
  // The original config had ignoreBuildErrors: true, which let real
  // bugs ship. Tighten that up.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },

  // No basePath — site is at the GitHub Pages root.
  // If you later move it to user.github.io/portfolio/ set
  // basePath: "/portfolio" here.
};

export default nextConfig;
