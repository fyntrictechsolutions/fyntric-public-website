import type { NextConfig } from "next";

/**
 * The site is exported as plain static files and served by GitHub Pages
 * from the root of the custom domain, so the base path is empty by default.
 * Set NEXT_PUBLIC_BASE_PATH (e.g. "/fyntric-public-website") only when serving
 * it from a sub-path such as https://<user>.github.io/<repo>/.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  
   allowedDevOrigins: ["10.117.202.237"],

  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
