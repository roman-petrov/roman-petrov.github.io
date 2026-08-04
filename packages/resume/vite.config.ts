import { createHash } from "node:crypto";
import { relative } from "node:path";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

const generateScopedName = (name: string, fileName: string) => {
  const seed = `${relative(import.meta.dirname, fileName)}${name}`;
  const hash = createHash(`sha256`).update(seed).digest(`base64url`).slice(0, 4);

  return `${name}_${hash}`;
};

export default defineConfig({
  build: { target: `esnext` },
  css: { modules: { generateScopedName, localsConvention: `camelCaseOnly` } },
  logLevel: `warn`,
  plugins: [sassDts({ enabledMode: [`production`], esmExport: true, legacyFileFormat: true })],
  ssr: { noExternal: [`@cv/core`] },
});
