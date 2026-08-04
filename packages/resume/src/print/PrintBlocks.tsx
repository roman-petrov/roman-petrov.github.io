import type { Block } from "../Content";

import { Blocks } from "../components";
import styles from "./PrintBlocks.module.scss";

export type PrintBlocksProps = { blocks: Block[] };

export const PrintBlocks = ({ blocks }: PrintBlocksProps) => (
  <Blocks blocks={blocks} classes={{ label: styles.label, lead: styles.lead, list: styles.list, pull: styles.pull }} />
);
