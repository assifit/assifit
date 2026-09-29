import type {NextConfig} from 'next';

// Set by the GitHub Pages workflow (e.g. "/assifit"); empty for local dev or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages
  output: 'export',
  basePath,
  // Export pages as folder/index.html so GitHub Pages serves clean URLs and RSC payloads resolve
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // The Next.js image optimizer needs a server; GitHub Pages only serves static files
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
