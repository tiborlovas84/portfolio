/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/request-access",
        destination: "/webflow/request-access.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

