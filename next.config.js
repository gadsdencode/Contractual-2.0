import { fileURLToPath } from 'url';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Custom Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(process.cwd(), './src');
      config.module.rules.push({
        test: /node_modules\/node-gyp-build/,
        use: 'null-loader',
      });
    }

    // Disable Wallaby.js during production builds
    if (process.env.NODE_ENV === 'production') {
      config.resolve.alias['wallabyjs.console-ninja'] = false;
    }

    // Clear Webpack cache on build failures (optional)
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [fileURLToPath(import.meta.url)], // Convert import.meta.url to file path
      },
    };

    return config;
  },

  // Optionally, you can add more Next.js configurations here
  reactStrictMode: true, // Enable React Strict Mode for better error detection
};

export default nextConfig;