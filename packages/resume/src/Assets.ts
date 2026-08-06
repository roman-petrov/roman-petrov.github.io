import { Content } from "./Content";

const photo = Content.meta.photo;

const webp = `photo.webp`;

const href = (file: string) => `./assets/${file}`;

export const Assets = { href, photo, webp };
