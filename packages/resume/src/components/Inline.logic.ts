type InlineToken = { href?: string; label?: string; type: `link` } | { text: string; type: `bold` | `text` };

const end = (match?: RegExpExecArray) => (match === undefined ? 0 : match.index + match[0].length);

const plain = (text: string, from: number, to: number): InlineToken[] =>
  to > from ? [{ text: text.slice(from, to), type: `text` }] : [];

const marked = ({ bold, href, label }: Partial<Record<string, string>>): InlineToken =>
  bold === undefined ? { href, label, type: `link` } : { text: bold, type: `bold` };

const parse = (text: string): InlineToken[] => {
  const pattern = /\*\*(?<bold>.+?)\*\*|\[(?<label>[^\]]+)\]\((?<href>[^)\s]+)\)/gu;
  const matches = [...text.matchAll(pattern)];

  return [
    ...matches.flatMap((match, index) => [
      ...plain(text, end(matches[index - 1]), match.index),
      marked(match.groups ?? {}),
    ]),
    ...plain(text, end(matches.at(-1)), text.length),
  ];
};

export const InlineLogic = { parse };
