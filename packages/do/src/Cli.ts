#!/usr/bin/env bun
import { Console } from "@cv/core/node";

import { Runner } from "./Runner";

const [, , name] = process.argv;

if (name === undefined || name === `--help` || name === `-h`) {
  Console.logLine(`Usage: do <command>\n\nCommands:\n${Runner.help()}\n`);
  process.exit(0);
}

process.exit(await Runner.run(name));
