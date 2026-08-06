import type { ViteDevServer } from "vite";

import type { CommandOutcome } from "./Command";

const hold = async (server: ViteDevServer): Promise<CommandOutcome> => {
  await new Promise<void>(resolve => {
    const stop = () => {
      void server.close().finally(() => resolve());
    };

    process.once(`SIGINT`, stop);
    process.once(`SIGTERM`, stop);
  });

  return { exitCode: 0, output: `` };
};

export const Server = { hold };
