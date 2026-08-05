import { mkdir, rm } from "node:fs/promises";

const ensure = async (path: string) => mkdir(path, { recursive: true });

const remove = async (path: string) => rm(path, { force: true, recursive: true });

export const Directory = { ensure, remove };
