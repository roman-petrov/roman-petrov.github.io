import { Process } from "@cv/core/node";

import type { CommandRun } from "./Command";

import { Root } from "./Root";

const interactive = async (command: string[]) => Process.interactive(Root, command);

const tool =
  (name: string, args: string[]): CommandRun =>
  async () =>
    Process.captured(Root, [`bun`, `x`, name, ...args]);

export const Run = { interactive, tool };
