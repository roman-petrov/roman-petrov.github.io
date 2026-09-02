import type { Command } from "../Command";

import { Resume } from "../build";

export const Build: Command = {
  description: `Build the site, PDF, OG image, and Roman_Petrov_CV.md.`,
  label: `🏗️ Build`,
  name: `build`,
  run: Resume.build,
};
