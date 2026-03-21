/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/composite-emalya",
        destination: "/facettes-composites-naturelles",
        permanent: true,
      },
      {
        source: "/facettes-ceramique",
        destination: "/facettes-ceramiques-premium",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
