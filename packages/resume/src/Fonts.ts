// cspell:word wght

type Face = { family: string; file: string; pkg: string; weight: string };

const faces: Face[] = [
  {
    family: `Inter Tight`,
    file: `inter-tight-latin-wght-normal.woff2`,
    pkg: `@fontsource-variable/inter-tight`,
    weight: `100 900`,
  },
  {
    family: `JetBrains Mono`,
    file: `jetbrains-mono-latin-500-normal.woff2`,
    pkg: `@fontsource/jetbrains-mono`,
    weight: `500`,
  },
];

const href = (file: string) => `./assets/fonts/${file}`;

const rule = ({ family, file, weight }: Face) =>
  [
    `@font-face {`,
    `  font-family: "${family}";`,
    `  font-style: normal;`,
    `  font-weight: ${weight};`,
    `  font-display: swap;`,
    `  src: url("${href(file)}") format("woff2");`,
    `}`,
  ].join(`\n`);

const css = faces.map(rule).join(`\n\n`);

const files = faces.map(({ file }) => file);

export const Fonts = { css, faces, files, href };
