import type { Command } from "../Command";

import { Run } from "../Run";

export const Stylelint: Command = {
  description: `Check SCSS issues.`,
  label: `🎨 Stylelint`,
  name: `stylelint`,
  run: Run.tool(`stylelint`, [`--max-warnings=0`, `**/*.scss`]),
};
