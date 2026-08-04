import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier";
import checkFile from "eslint-plugin-check-file";
import perfectionist from "eslint-plugin-perfectionist";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";
import process from "node:process";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores([`dist`, `.build`, `.jscpd`, `**/*.module.scss.d.ts`]),
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat[`jsx-runtime`],
  reactHooks.configs.flat.recommended,
  perfectionist.configs[`recommended-natural`],
  prettier,
  {
    languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: process.cwd() } },
    plugins: { "@stylistic": stylistic, "check-file": checkFile, unicorn, "unused-imports": unusedImports },
    rules: {
      "@stylistic/quotes": [`error`, `backtick`, { avoidEscape: true }],
      "@typescript-eslint/consistent-type-definitions": [`error`, `type`],
      "@typescript-eslint/consistent-type-imports": [`error`, { fixStyle: `inline-type-imports` }],
      "@typescript-eslint/max-params": [`error`, { max: 5 }],
      "@typescript-eslint/no-magic-numbers": [`error`, { ignore: [-1, 0, 1, 2, 4, 8, 16, 24, 32] }],
      "check-file/folder-naming-convention": [`error`, { "**": `KEBAB_CASE` }],
      "curly": [`error`, `all`],
      "react/jsx-filename-extension": [`error`, { extensions: [`.tsx`] }],
      "react/self-closing-comp": `error`,
      "unicorn/filename-case": [`error`, { case: `pascalCase`, checkDirectories: false }],
      "unused-imports/no-unused-imports": `error`,
    },
    settings: { react: { version: `detect` } },
  },
  {
    files: [`**/index.*`, `**/*.config.*`, `**/*.yml.d.ts`],
    rules: { "unicorn/filename-case": [`error`, { case: `camelCase`, checkDirectories: false }] },
  },
  {
    files: [`**/*.test.ts`],
    plugins: { vitest },
    rules: {
      ...vitest.configs.all.rules,
      "vitest/max-expects": `off`,
      "vitest/prefer-expect-assertions": `off`,
      "vitest/prefer-lowercase-title": `off`,
    },
  },
  { extends: [tseslint.configs.disableTypeChecked], files: [`**/*.js`] },
);
