const paint = (code: string) => (text: string) => `\u001B[${code}m${text}\u001B[0m`;

const cyan = paint(`36`);
const dim = paint(`2`);
const green = paint(`32`);
const red = paint(`31`);

export const Terminal = { cyan, dim, green, red };
