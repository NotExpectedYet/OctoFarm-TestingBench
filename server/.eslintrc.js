//ESLINT CONFIG
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "max-len": [
      "error",
      {
        code: 300,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    "global-require": "off",
    quotes: ["error", "double"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
