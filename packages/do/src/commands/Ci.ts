import type { Command } from "../Command";

export const Ci: Command = {
  children: [`test`, `lint`, `build`],
  description: `Run tests, all checks, and the production build.`,
  label: `🔁 CI`,
  name: `ci`,
};
