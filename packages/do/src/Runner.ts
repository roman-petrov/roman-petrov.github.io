import type { CommandOutcome, CommandRun } from "./Command";

import { CommandRegistry } from "./CommandRegistry";
import { Log } from "./Log";

const last = `└─ `;

type Frame = { connector: string; indent: string };

const find = (name: string) => CommandRegistry.find(command => command.name === name);

const seconds = (started: number) => {
  const second = 1000;

  return `${String(Math.round((performance.now() - started) / second))}s`;
};

const nest = ({ connector, indent }: Frame) => {
  const bar = `│  `;
  const space = `   `;

  return connector === `` ? indent : `${indent}${connector === last ? space : bar}`;
};

const outcome = async (run: CommandRun): Promise<CommandOutcome> => {
  try {
    return await run();
  } catch (error) {
    return { exitCode: 1, output: String(error) };
  }
};

const execute = async (name: string, frame: Frame): Promise<number> => {
  const command = find(name);

  if (command === undefined) {
    Log.line(Log.red(`Unknown command: ${name}`));

    return 1;
  }

  const head = `${frame.indent}${frame.connector}${Log.cyan(command.label)}`;

  if (!(`run` in command)) {
    Log.line(head);

    return children(command.children, nest(frame));
  }

  Log.write(`${head}… `);
  const started = performance.now();
  const { exitCode, output } = await outcome(command.run);
  Log.line(`${exitCode === 0 ? `✅` : `❌`} ${Log.dim(seconds(started))}`);

  if (exitCode !== 0) {
    Log.line(`\n${Log.red(`❌ Error running ${command.name}.`)}\n`);
    Log.line(output === `` ? `` : `${output}\n`);
  }

  return exitCode;
};

const children = async (names: readonly string[], indent: string) => {
  const branch = `├─ `;
  const known = names.filter(name => find(name) !== undefined);

  for (const [index, name] of known.entries()) {
    const code = await execute(name, { connector: index === known.length - 1 ? last : branch, indent });

    if (code !== 0) {
      return code;
    }
  }

  return 0;
};

const help = () => {
  const width = Math.max(...CommandRegistry.map(command => command.name.length));

  return CommandRegistry.map(command => `  ${command.name.padEnd(width)}  ${command.description}`).join(`\n`);
};

const run = async (name: string) => {
  const started = performance.now();
  const code = await execute(name, { connector: ``, indent: `` });

  if (code === 0) {
    Log.line(`\n✅ Done in ${Log.green(seconds(started))}\n`);
  }

  return code;
};

export const Runner = { help, run };
