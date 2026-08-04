import type { Command } from "../Command";

import { Run } from "../Run";

export const Prettier: Command = {
  description: `Check formatting.`,
  label: `✨ Prettier`,
  name: `prettier`,
  run: Run.tool(`prettier`, [`--check`, `.`]),
};
