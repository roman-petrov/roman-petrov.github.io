import { CommandRegistry } from "./CommandRegistry";
import { Log } from "./Log";

const second = 1000;

const find = (name: string) => CommandRegistry.find(command => command.name === name);

const elapsed = (started: number) => `${((performance.now() - started) / second).toFixed(1)}s`;

const help = () => {
  const width = Math.max(...CommandRegistry.map(command => command.name.length));

  return CommandRegistry.map(command => `  ${command.name.padEnd(width)}  ${command.description}`).join(`\n`);
};

const run = async (name: string, indent = ``): Promise<number> => {
  const command = find(name);

  if (command === undefined) {
    Log.line(Log.red(`Unknown command: ${name}`));

    return 1;
  }

  const started = performance.now();
  Log.line(`${indent}${Log.cyan(command.label)}`);
  const code = `run` in command ? await command.run() : await sequence(command.children, `${indent}  `);
  const mark = code === 0 ? Log.green(`✔`) : Log.red(`✘`);
  Log.line(`${indent}${mark} ${Log.dim(`${command.label} ${elapsed(started)}`)}`);

  return code;
};

const sequence = async (names: readonly string[], indent: string) => {
  for (const name of names) {
    const code = await run(name, indent);

    if (code !== 0) {
      return code;
    }
  }

  return 0;
};

export const Runner = { help, run };
