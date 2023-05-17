/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
