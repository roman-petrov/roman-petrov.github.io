import { createHash } from "node:crypto";
import path from "node:path";

const file = (name: string, data: string | Uint8Array) => {
  const hash = createHash(`sha256`).update(data).digest(`base64url`).slice(0, 8);
  const extension = path.extname(name);

  return `${path.basename(name, extension)}.${hash}${extension}`;
};

export const Hash = { file };
