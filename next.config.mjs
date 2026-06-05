/** @type {import("next").NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/portfolio" : "";

const nextConfig = {
  ...(isGithubPages
    ? {
        basePath,
        output: "export",
        trailingSlash: true,
      }
    : {
        async redirects() {
          return [
            {
              source: "/request-access",
              destination: "/webflow/request-access.html",
              permanent: false,
            },
          ];
        },
      }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
