import type { useInlineState } from "./Inline.state";

export type InlineViewProps = ReturnType<typeof useInlineState>;

export const InlineView = ({ tokens }: InlineViewProps) => (
  <>
    {tokens.map((token, index) =>
      token.type === `link` ? (
        <a href={token.href} key={index}>
          {token.label}
        </a>
      ) : token.type === `bold` ? (
        <strong key={index}>{token.text}</strong>
      ) : (
        token.text
      ),
    )}
  </>
);
