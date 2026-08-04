export type Command =
  | { children: readonly string[]; description: string; label: string; name: string }
  | { description: string; label: string; name: string; run: CommandRun };

export type CommandRun = () => number | Promise<number>;
