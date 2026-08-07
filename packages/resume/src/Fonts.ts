// cspell:word wght

type Face = { family: string; file: string; pkg: string; weight: string };

const faces: Face[] = [
  { family: `Inter`, file: `inter-latin-wght-normal.woff2`, pkg: `@fontsource-variable/inter`, weight: `100 900` },
  {
    family: `JetBrains Mono`,
    file: `jetbrains-mono-latin-500-normal.woff2`,
    pkg: `@fontsource/jetbrains-mono`,
    weight: `500`,
  },
];

const href = (file: string) => `./assets/fonts/${file}`;

const css = (files: string[]) =>
  faces
    .map(({ family, weight }, index) =>
      [
        `@font-face {`,
        `  font-family: "${family}";`,
        `  font-style: normal;`,
        `  font-weight: ${weight};`,
        `  font-display: swap;`,
        `  src: url("${href(files[index] ?? ``)}") format("woff2");`,
        `}`,
      ].join(`\n`),
    )
    .join(`\n\n`);

export const Fonts = { css, faces, href };
