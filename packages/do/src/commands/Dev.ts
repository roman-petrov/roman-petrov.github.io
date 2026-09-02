import { Console } from "@cv/core/node";
import { createServer } from "vite";

import type { Command } from "../Command";

import { Paths, Resume } from "../build";
import { Server } from "../Server";

const run = async () => {
  await Resume.prepare();
  Console.logLine(``);

  const server = await createServer({ logLevel: `info`, root: Paths.resume });

  await server.listen();
  server.printUrls();

  return Server.hold(server);
};

export const Dev: Command = { description: `Serve the site with hot reload.`, label: `⚡ Dev`, name: `dev`, run };
