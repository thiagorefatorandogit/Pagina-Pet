import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "warn",
      "@typescript-eslint/no-floating-promises": "off",
      "no-restricted-syntax": "off",
      "@typescript-eslint/no-misused-promises": "off",
    },
  },
]);

export default eslintConfig;