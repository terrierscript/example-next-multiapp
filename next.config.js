// @ts-nocheck

const appendRootDir = (rule) => {
  if (!Array.isArray(rule?.include)) {
    return rule
  }
  rule.include = [...rule.include, __dirname]    
  return rule
}

module.exports = {
  webpack: (config) => {
    config.module.rules.map(rule => {
      if (Array.isArray(rule.oneOf)) {
        return {
          oneOf: rule.oneOf.map(rule => appendRootDir(rule))
        }
      }
      if (rule?.use?.loader !== "next-swc-loader") {
        return rule
      }
      return appendRootDir(rule)
    })
    return config
  }
}