module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "src/**/*.test.ts"],
  plugins: ["react-refresh", "@typescript-eslint", "react-hooks"],
  globals: {
    React: "readonly",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": ["error"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-irregular-whitespace": "warn",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-unneeded-ternary": "warn",
  },
};
