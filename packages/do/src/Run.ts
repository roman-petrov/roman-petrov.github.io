import { Process } from "@cv/core/node";

import type { CommandRun } from "./Command";

import { Root } from "./Root";

const tool =
  (name: string, args: string[]): CommandRun =>
  async () =>
    Process.captured(Root, [`bun`, `x`, name, ...args]);

export const Run = { tool };
