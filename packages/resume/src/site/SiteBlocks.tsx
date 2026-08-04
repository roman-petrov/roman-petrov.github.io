import { _ } from "@cv/core";

import type { Block } from "../Content";

import { Blocks } from "../components";
import styles from "./SiteBlocks.module.scss";

export type SiteBlocksProps = { blocks: Block[]; columns?: boolean };

export const SiteBlocks = ({ blocks, columns = false }: SiteBlocksProps) => (
  <Blocks
    blocks={blocks}
    classes={{
      label: styles.label,
      lead: styles.lead,
      list: _.cn(styles.list, columns && styles.columns),
      pull: styles.pull,
    }}
  />
);
