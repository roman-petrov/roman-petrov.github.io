import type { ReactNode } from "react";

/** `**bold**` or `[label](href)`; URLs may not contain whitespace or a closing parenthesis. */
const pattern = /\*\*(?<bold>.+?)\*\*|\[(?<label>[^\]]+)\]\((?<href>[^)\s]+)\)/gu;

const parse = (text: string) => {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(pattern)) {
    const { bold, href, label } = match.groups ?? {};

    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    nodes.push(
      bold === undefined ? (
        <a href={href} key={match.index}>
          {label}
        </a>
      ) : (
        <strong key={match.index}>{bold}</strong>
      ),
    );

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
};

export type InlineProps = { text: string };

/** Renders the markdown subset used in content. */
export const Inline = ({ text }: InlineProps) => <>{parse(text)}</>;
