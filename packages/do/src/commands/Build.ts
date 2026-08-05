import type { Command } from "../Command";

import { Resume } from "../build/Resume";

export const Build: Command = {
  description: `Build the site, print sheet, PDF, OG image, and Roman_Petrov_CV.md.`,
  label: `🏗️ Build`,
  name: `build`,
  run: Resume.build,
};
