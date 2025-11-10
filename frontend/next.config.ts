import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers() {
    // Required by FHEVM for secure encrypted operations
    // Note: Base Account SDK may warn about this header, but it's necessary for FHEVM functionality
    // This warning doesn't affect wallet connection or core functionality
    return Promise.resolve([
      {
        source: '/',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ]);
  }
};

export default nextConfig;

