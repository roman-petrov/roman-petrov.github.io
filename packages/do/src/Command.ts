import type { ProcessResult } from "@cv/core/node";

export type Command =
  | { children: readonly string[]; description: string; label: string; name: string }
  | { description: string; label: string; name: string; run: CommandRun };

export type CommandOutcome = ProcessResult;

export type CommandRun = () => Promise<CommandOutcome>;
