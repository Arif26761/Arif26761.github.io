import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (user site → served from root, no basePath).
 * `images.unoptimized` is required because there is no image optimization
 * server in a static export.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Emit `out/<route>/index.html` so GitHub Pages serves clean URLs.
  trailingSlash: true,
};

export default nextConfig;
