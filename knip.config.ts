import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [`src/EntryClient.ts`, `src/EntryPrint.ts`, `src/EntrySite.ts`],
  ignoreDependencies: [`actions-up`, `@fontsource/inter-tight`, `@fontsource/jetbrains-mono`],
  ignoreExportsUsedInFile: true,
  ignoreIssues: { "**/*.module.scss.d.ts": [`exports`] },
};

export { config as default };
