export type Command =
  | { children: readonly string[]; description: string; label: string; name: string }
  | { description: string; label: string; name: string; run: CommandRun };

export type CommandOutcome = { exitCode: number; output: string };

export type CommandRun = () => Promise<CommandOutcome>;
