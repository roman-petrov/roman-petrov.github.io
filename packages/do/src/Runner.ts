import { _ } from "@cv/core";
import { Console, Terminal } from "@cv/core/node";

import type { CommandOutcome, CommandRun } from "./Command";

import { CommandRegistry } from "./CommandRegistry";

const last = `└─ `;

type Frame = { connector: string; indent: string };

const find = (name: string) => CommandRegistry.find(command => command.name === name);

const seconds = (started: number) => {
  const second = 1000;

  return `${String(_.round((performance.now() - started) / second, 0))}s`;
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
    Console.logLine(Terminal.red(`Unknown command: ${name}`));

    return 1;
  }

  const head = `${frame.indent}${frame.connector}${Terminal.cyan(command.label)}`;

  if (!(`run` in command)) {
    Console.logLine(head);

    return children(command.children, nest(frame));
  }

  Console.log(`${head}… `);
  const started = performance.now();
  const { exitCode, output } = await outcome(command.run);
  Console.logLine(`${exitCode === 0 ? `✅` : `❌`} ${Terminal.dim(seconds(started))}`);

  if (exitCode !== 0) {
    Console.logLine(`\n${Terminal.red(`❌ Error running ${command.name}.`)}\n`);
    Console.logLine(output === `` ? `` : `${output}\n`);
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
  const width = _.max(CommandRegistry.map(command => command.name.length)) ?? 0;

  return CommandRegistry.map(command => `  ${command.name.padEnd(width)}  ${command.description}`).join(`\n`);
};

const run = async (name: string) => {
  const started = performance.now();
  const code = await execute(name, { connector: ``, indent: `` });

  if (code === 0) {
    Console.logLine(`\n✅ Done in ${Terminal.green(seconds(started))}\n`);
  }

  return code;
};

export const Runner = { help, run };
