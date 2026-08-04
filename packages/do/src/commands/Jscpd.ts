import type { Command } from "../Command";

import { Run } from "../Run";

export const Jscpd: Command = {
  description: `Find duplicated code.`,
  label: `📋 Jscpd`,
  name: `jscpd`,
  run: Run.tool(`jscpd`, []),
};
