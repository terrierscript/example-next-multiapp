// @ts-nocheck

const appendRootDir = (rule) => {
  if (Array.isArray(rule?.include) && !rule?.include?.includes(__dirname)) {
    rule.include?.push(__dirname)
  }
  return rule
}

const appendIncludeRules = (rule) => {
  if (Array.isArray(rule.oneOf)) {
    return {
      oneOf: rule.oneOf.map(rule => appendRootDir(rule))
    }
  }
  if (rule?.use?.loader !== "next-swc-loader") {
    return rule
  }
  return appendRootDir(rule)
}

module.exports = {
  webpack: (config) => {
    config.module.rules.map(rule => {
      return appendIncludeRules(rule)
    })
    return config
  }
}