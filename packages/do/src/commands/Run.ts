import { Console } from "@cv/core/node";
import { preview } from "vite";

import type { Command } from "../Command";

import { Paths } from "../build/Paths";
import { Resume } from "../build/Resume";
import { Server } from "../Server";

const run = async () => {
  const built = await Resume.build();

  if (built.exitCode !== 0) {
    return built;
  }

  Console.logLine(``);

  const server = await preview({ logLevel: `info`, root: Paths.resume });

  server.printUrls();

  return Server.hold(server);
};

export const Run: Command = { description: `Build everything and preview dist.`, label: `🚀 Run`, name: `run`, run };
