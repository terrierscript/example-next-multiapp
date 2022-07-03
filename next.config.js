

const subAppConfig = () => {
  /**
   * @type {import('next').NextConfig}
   */
  return {
    distDir: ".next-subapp"
  }
}

/**
 * @type {import('next').NextConfig}
 */
const baseAppConfig = {
}

module.exports = () => {
  const appMode = process.env.APP_MODE
  if (appMode === "SUBAPP") {
    return {
      ...baseAppConfig,
      ...subAppConfig
    }
  }
  /**
   * @type {import('next').NextConfig}
   */
  return {
    ...baseAppConfig
  }
}