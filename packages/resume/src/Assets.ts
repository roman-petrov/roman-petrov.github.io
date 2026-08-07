import { Content } from "./Content";

const photo = Content.meta.photo;

const webp = `photo.webp`;

const favicon = `favicon.svg`;

const href = (file: string) => `./assets/${file}`;

export const Assets = { favicon, href, photo, webp };
