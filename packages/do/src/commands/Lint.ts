import type { Command } from "../Command";

export const Lint: Command = {
  children: [`tsc`, `eslint`, `prettier`, `stylelint`, `cspell`, `knip`, `markdownlint`, `jscpd`],
  description: `Run every checker.`,
  label: `🛡️ Lint`,
  name: `lint`,
};
