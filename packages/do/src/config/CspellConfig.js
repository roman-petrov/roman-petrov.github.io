/** @type {import('cspell').CSpellSettings} */
export default {
  dictionaries: [`companies`, `misc`, `softwareTerms`, `npm`, `node`, `html`, `css`, `customWords`, `ru-ru`],
  dictionaryDefinitions: [{ name: `customWords`, path: `./.words.txt` }],
  enabledFileTypes: { "*": true },
  enableGlobDot: true,
  ignorePaths: [
    `.git`,
    `.vscode/**`,
    `**/node_modules/**`,
    `dist`,
    `.build`,
    `.jscpd`,
    `bun.lock`,
    `bun.lockb`,
    `*.pdf`,
    `*.png`,
    `Roman_Petrov_CV.md`,
  ],
  import: `@cspell/dict-ru_ru/cspell-ext.json`,
  language: `en_US`,
  useGitignore: true,
  version: `0.2`,
};
