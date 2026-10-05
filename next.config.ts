import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  allowedDevOrigins: ["urging-peculiar-valium.ngrok-free.dev"],
  images: {
    remotePatterns: [{protocol: "https", hostname: "**"}],
  },
};

export default nextConfig;
