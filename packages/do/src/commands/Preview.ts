import type { Command } from "../Command";

import { Resume } from "../build/Resume";
import { Run } from "../Run";

const port = `4173`;

const run = async () => {
  const code = await Resume.build();

  return code === 0 ? Run.spawn([`bun`, `x`, `--bun`, `serve`, `dist`, `-l`, port]) : code;
};

export const Preview: Command = {
  description: `Build and serve dist on port ${port}.`,
  label: `👀 Preview`,
  name: `preview`,
  run,
};
