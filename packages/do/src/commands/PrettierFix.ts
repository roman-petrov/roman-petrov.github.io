import type { Command } from "../Command";

import { Run } from "../Run";

export const PrettierFix: Command = {
  description: `Fix formatting.`,
  label: `🪄 Prettier fix`,
  name: `prettier-fix`,
  run: Run.tool(`prettier`, [`--write`, `.`]),
};
