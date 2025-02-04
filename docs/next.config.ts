// import type { NextConfig } from "next";

import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: {
    renderer: 'katex',
    options: {
      macros: {
        '\\RR': '\\mathbb{R}',
      },
      strict: 'ignore',
    },
  },
  defaultShowCopyCode: true,
  contentDirBasePath: "/",
});

const nextConfig: NextConfig = withNextra({
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  reactStrictMode: false,
});

export default nextConfig;
