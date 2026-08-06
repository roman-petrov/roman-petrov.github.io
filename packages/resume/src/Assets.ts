import { Content } from "./Content";

const photo = Content.meta.photo;

const webp = photo.replace(/\.[^.]+$/u, `.webp`);

const href = (file: string) => `./assets/${file}`;

export const Assets = { href, photo, webp };
