/** Composes class names, dropping the ones that are not set. */
export const Cn = (...names: (string | undefined)[]) => names.filter(name => name !== undefined).join(` `);
