import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['motion', 'gsap', '@react-three/fiber', 'three'],
  },
};

export default nextConfig;
