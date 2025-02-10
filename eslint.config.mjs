import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

// jjj
module.exports = {
  parser: "@typescript-eslint/parser", // TypeScript হলে
  extends: ["next/core-web-vitals"],
  rules: {
    "no-console": "warn",
  },
};

export default eslintConfig;
