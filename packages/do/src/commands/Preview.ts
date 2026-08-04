import type { Command } from "../Command";

import { Resume } from "../build/Resume";
import { Run } from "../Run";

const port = `4173`;

const run = async () => {
  const built = await Resume.build();

  return built.exitCode === 0 ? Run.interactive([`bun`, `x`, `--bun`, `serve`, `dist`, `-l`, port]) : built;
};

export const Preview: Command = {
  description: `Build and serve dist on port ${port}.`,
  label: `👀 Preview`,
  name: `preview`,
  run,
};
