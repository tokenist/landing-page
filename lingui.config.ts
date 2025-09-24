/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "vi"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src", "app", "components", "lib"],
      exclude: ["**/node_modules/**"],
    },
  ],
  format: "po",
  formatOptions: {
    lineNumbers: false,
  },
  compileNamespace: "es",
  runtimeConfigModule: {
    i18n: "@lingui/core",
    Trans: "@lingui/react",
  },
}