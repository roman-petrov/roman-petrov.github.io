import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores([`dist`, `.build`, `**/*.module.scss.d.ts`]),
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat[`jsx-runtime`],
  reactHooks.configs.flat.recommended,
  perfectionist.configs[`recommended-natural`],
  prettier,
  {
    languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
    plugins: { "@stylistic": stylistic, "unused-imports": unusedImports },
    rules: {
      "@stylistic/quotes": [`error`, `backtick`, { avoidEscape: true }],
      "@typescript-eslint/consistent-type-definitions": [`error`, `type`],
      "@typescript-eslint/consistent-type-imports": [`error`, { fixStyle: `inline-type-imports` }],
      "curly": [`error`, `all`],
      "react/jsx-filename-extension": [`error`, { extensions: [`.tsx`] }],
      "react/self-closing-comp": `error`,
      "unused-imports/no-unused-imports": `error`,
    },
    settings: { react: { version: `detect` } },
  },
  { extends: [tseslint.configs.disableTypeChecked], files: [`**/*.js`] },
);
