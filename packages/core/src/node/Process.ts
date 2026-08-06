export type ProcessResult = { exitCode: number; output: string };

const captured = async (cwd: string, command: string[]): Promise<ProcessResult> => {
  const child = Bun.spawn(command, { cwd, stderr: `pipe`, stdout: `pipe` });

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

export const Process = { captured };
