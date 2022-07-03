

/**
 * @return {import('next').NextConfig}
 * @param appMode {string}
 */
const appendConfig = (appMode) => {
  switch (appMode) {
    case "SUBAPP":
      return {
        distDir: ".next-subapp",
        redirects: async () => ([{
          source: "/mainapp/:path*",
          destination: "/subapp",
          permanent: false,
        }])
      }
    default:
      return {
        redirects: async () => ([{
          source: "/subapp/:path*",
          destination: "/mainapp",
          permanent: false,
        }])
      }
  }
}

/**
 * @type {import('next').NextConfig}
 */
const baseAppConfig = {
  pageExtensions: ["tsx","ts", "page.tsx", "page.ts"]
}

/**
 * @return {import('next').NextConfig}
 */
module.exports = () => {
  const appMode = process.env.APP_MODE ?? ""
  const config = appendConfig(appMode)
  return {
    ...baseAppConfig,
    ...config
  }
}