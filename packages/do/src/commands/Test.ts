import type { Command } from "../Command";

import { Run } from "../Run";

export const Test: Command = {
  description: `Run tests.`,
  label: `🧪 Test`,
  name: `test`,
  run: Run.tool(`vitest`, [`run`]),
};
