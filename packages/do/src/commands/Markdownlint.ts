import type { Command } from "../Command";

import { Run } from "../Run";

export const Markdownlint: Command = {
  description: `Check Markdown issues.`,
  label: `📄 Markdownlint`,
  name: `markdownlint`,
  run: Run.tool(`markdownlint`, [`.`]),
};
