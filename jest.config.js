module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "src/**/*.jsx", "!**/node_modules/**"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  setupTestFrameworkScriptFile: "./setupTest.js",
};
