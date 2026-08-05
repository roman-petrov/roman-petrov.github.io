const paint = (code: string) => (text: string) => `\u001B[${code}m${text}\u001B[0m`;

export const Terminal = { cyan: paint(`36`), dim: paint(`2`), green: paint(`32`), red: paint(`31`) };
