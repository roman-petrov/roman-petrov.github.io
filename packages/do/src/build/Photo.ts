import path from "node:path";
import sharp from "sharp";

import { Paths } from "./Paths";

const removeBackground = async (input: Buffer) => {
  const channels = 4;
  const alpha = 3;
  const opaque = 255;
  const cutout = { softness: 18, threshold: 242 };
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { softness, threshold } = cutout;
  const pixels = new Uint8ClampedArray(data.buffer, data.byteOffset, data.byteLength);

  for (let i = 0; i < pixels.length; i += channels) {
    const red = pixels[i] ?? 0;
    const green = pixels[i + 1] ?? 0;
    const blue = pixels[i + 2] ?? 0;
    const whiteness = Math.min(red, green, blue);
    pixels[i + alpha] =
      whiteness >= threshold
        ? 0
        : whiteness >= threshold - softness
          ? Math.round((opaque * (threshold - whiteness)) / softness)
          : (pixels[i + alpha] ?? 0);
  }

  return sharp(Buffer.from(pixels), { raw: { channels, height: info.height, width: info.width } })
    .png()
    .toBuffer();
};

const render = async () => {
  const size = 480;
  const quality = 82;
  const pcb = `pcb.svg`;
  const crop = { sideOfWidth: 0.78, topOfHeight: 0.05 };
  const { Assets } = await import(`@cv/resume`);
  const source = path.join(Paths.root, Assets.photo);
  const { height, width } = await sharp(source).metadata();
  const side = Math.round(width * crop.sideOfWidth);
  const left = Math.round((width - side) / 2);
  const top = Math.round(height * crop.topOfHeight);

  const portrait = await sharp(source).extract({ height: side, left, top, width: side }).resize(size, size).toBuffer();

  const board = await sharp(path.join(Paths.srcAssets, pcb)).resize(size, size).png().toBuffer();

  await sharp(board)
    .composite([{ input: await removeBackground(portrait) }])
    .webp({ quality })
    .toFile(path.join(Paths.assets, Assets.webp));
};

export const Photo = { render };
