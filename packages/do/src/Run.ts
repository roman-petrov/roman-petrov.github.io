import type { CommandOutcome, CommandRun } from "./Command";

import { Root } from "./Root";

const captured = async (command: string[]): Promise<CommandOutcome> => {
  const child = Bun.spawn(command, { cwd: Root, stderr: `pipe`, stdout: `pipe` });

  const [stderr, stdout, exitCode] = await Promise.all([
    new Response(child.stderr).text(),
    new Response(child.stdout).text(),
    child.exited,
  ]);

  return {
    exitCode,
    output: [stderr, stdout]
      .filter(text => text !== ``)
      .join(`\n`)
      .trim(),
  };
};

const interactive = async (command: string[]): Promise<CommandOutcome> => ({
  exitCode: await Bun.spawn(command, { cwd: Root, stdio: [`inherit`, `inherit`, `inherit`] }).exited,
  output: ``,
});

const tool =
  (name: string, args: string[]): CommandRun =>
  async () =>
    captured([`bun`, `x`, name, ...args]);

export const Run = { interactive, tool };
