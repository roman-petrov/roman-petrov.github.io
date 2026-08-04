#!/usr/bin/env bun
import { Log } from "./Log";
import { Runner } from "./Runner";

const [, , name] = process.argv;

if (name === undefined || name === `--help` || name === `-h`) {
  Log.line(`Usage: do <command>\n\nCommands:\n${Runner.help()}\n`);
  process.exit(0);
}

process.exit(await Runner.run(name));
