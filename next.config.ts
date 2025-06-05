import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  plugins: [require("@tailwindcss/typography")],
};

export default nextConfig;
