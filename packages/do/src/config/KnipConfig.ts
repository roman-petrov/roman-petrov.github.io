import type { KnipConfig as Config } from "knip";

const config: Config = {
  ignoreDependencies: [`vitest`],
  ignoreExportsUsedInFile: true,
  ignoreIssues: { "**/*.module.scss.d.ts": [`exports`] },
  workspaces: {
    ".": { entry: [`*.config.js`, `vitest.config.ts`], ignoreDependencies: [`actions-up`] },
    "packages/do": {
      cspell: [`src/config/CspellConfig.js`],
      entry: [`src/config/*.{js,ts}`, `src/**/*.test.ts`],
      ignoreDependencies: [`jscpd`, `markdownlint-cli`],
      prettier: [`src/config/PrettierConfig.js`],
      stylelint: [`src/config/StylelintConfig.js`],
    },
    "packages/resume": {
      entry: [`src/Entry*.{ts,tsx}`, `src/**/*.test.ts`],
      ignoreDependencies: [`@fontsource/inter-tight`, `@fontsource/jetbrains-mono`],
    },
  },
};

export { config as KnipConfig };
