import type { Command } from "../Command";

import { Run } from "../Run";

export const StylelintFix: Command = {
  description: `Fix SCSS issues.`,
  label: `🖌️ Stylelint fix`,
  name: `stylelint-fix`,
  run: Run.tool(`stylelint`, [`--fix`, `--max-warnings=0`, `**/*.scss`]),
};
