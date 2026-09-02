import { readFile, writeFile } from "node:fs/promises";

const read = async (path: string) => readFile(path, `utf8`);

const write = async (path: string, text: string) => writeFile(path, text, `utf8`);

export const File = { read, write };
