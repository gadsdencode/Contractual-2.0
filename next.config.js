/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Convert import.meta.url to __filename equivalent
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _dirname = dirname(__filename);

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename] // Use __filename instead of module.uri
      },
      cacheDirectory: path.resolve(process.cwd(), '.next/cache'),
      store: 'pack',
      version: '1'
    };
    return config;
  }
};

export default nextConfig;
