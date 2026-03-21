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
      {
        source: "/blog/composite-ou-ceramique",
        destination: "/blog/facettes-composites-vs-ceramiques",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
