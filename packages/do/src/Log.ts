const paint = (code: string) => (text: string) => `\u001B[${code}m${text}\u001B[0m`;

const line = (text: string) => {
  console.log(text);
};

export const Log = { cyan: paint(`36`), dim: paint(`2`), green: paint(`32`), line, red: paint(`31`) };
