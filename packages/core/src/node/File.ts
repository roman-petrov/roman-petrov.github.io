import { copyFile, readFile, writeFile } from "node:fs/promises";

const copy = async (from: string, to: string) => copyFile(from, to);

const read = async (path: string) => readFile(path, `utf8`);

const write = async (path: string, text: string) => writeFile(path, text, `utf8`);

export const File = { copy, read, write };
