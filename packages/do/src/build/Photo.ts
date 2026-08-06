import path from "node:path";
import sharp from "sharp";

import { Paths } from "./Paths";

const quality = 82;

const render = async () => {
  const { Assets } = await import(`@cv/resume`);

  await sharp(path.join(Paths.srcAssets, Assets.photo)).webp({ quality }).toFile(path.join(Paths.assets, Assets.webp));
};

export const Photo = { render };
