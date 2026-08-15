/** @type {import('next').NextConfig} */
/**
 * Mathcraft — static export for GitHub Pages.
 * BASE_PATH must match the repo name (kept in sync with src/config/site.ts).
 */
const REPO_NAME = "mathcraft";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: `/${REPO_NAME}`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;