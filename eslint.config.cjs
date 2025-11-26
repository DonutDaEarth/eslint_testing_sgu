const js = require("@eslint/js");
const globals = require("globals");
const security = require("eslint-plugin-security");
const securityNode = require("eslint-plugin-security-node");

module.exports = [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,ts}"],
    ignores: [],
    plugins: {
      security,
      "security-node": securityNode,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "security/detect-eval-with-expression": "error",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-non-literal-regexp": "warn",
      "security/detect-object-injection": "warn",
      "security/detect-unsafe-regex": "error",

      "security-node/detect-child-process": "error",
      "security-node/detect-crlf": "warn",
      "security-node/detect-improper-exception-handling": "warn",
      "security-node/detect-unhandled-async-errors": "warn",
    },
  },
];
