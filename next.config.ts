import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Docker multi-stage builds — produces a self-contained output
  // in .next/standalone that can run without the full node_modules tree.
  output: "standalone",
};

export default nextConfig;
