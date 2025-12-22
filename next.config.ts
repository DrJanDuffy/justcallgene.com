import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Fix workspace root warning
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
