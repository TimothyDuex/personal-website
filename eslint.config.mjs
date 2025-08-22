import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier", // Must be last to override conflicting rules
      "plugin:prettier/recommended",
    ],
    plugins: [
      // ... other plugins
      "simple-import-sort",
      "prettier",
    ],
    rules: {
      "prettier/prettier": "error", // Ensures Prettier formatting issues are reported as errors
    },
  }),
];

export default eslintConfig;
