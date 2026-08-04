import type { Command } from "../Command";

import { Run } from "../Run";

export const Knip: Command = {
  description: `Find unused files, exports, and dependencies.`,
  label: `🧹 Knip`,
  name: `knip`,
  run: Run.tool(`knip`, []),
};
