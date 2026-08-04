import { useInlineState } from "./Inline.state";
import { InlineView } from "./Inline.view";

export type InlineProps = { text: string };

export const Inline = (props: InlineProps) => <InlineView {...useInlineState(props)} />;
