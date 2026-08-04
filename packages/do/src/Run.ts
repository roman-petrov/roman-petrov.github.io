import type { CommandRun } from "./Command";

import { Root } from "./Root";

const spawn = async (command: string[]) =>
  Bun.spawn(command, { cwd: Root, stdio: [`inherit`, `inherit`, `inherit`] }).exited;

const tool =
  (name: string, args: string[]): CommandRun =>
  async () =>
    spawn([`bun`, `x`, name, ...args]);

export const Run = { spawn, tool };
