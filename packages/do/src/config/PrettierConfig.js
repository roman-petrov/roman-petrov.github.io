/** @type {import('prettier').Config} */
export default {
  arrowParens: `avoid`,
  endOfLine: `auto`,
  overrides: [{ files: [`*.{ts,tsx,js}`], options: { objectWrap: `collapse` } }],
  plugins: [`prettier-plugin-pkg`],
  printWidth: 120,
  proseWrap: `always`,
  quoteProps: `consistent`,
};
