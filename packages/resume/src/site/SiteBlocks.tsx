import { _ } from "@cv/core";

import type { Block } from "../Content";

import { Blocks } from "../components";
import styles from "./SiteBlocks.module.scss";
import { SiteFacts } from "./SiteFacts";

export type SiteBlocksProps = { blocks: Block[]; columns?: boolean };

export const SiteBlocks = ({ blocks, columns = false }: SiteBlocksProps) => (
  <Blocks
    blocks={blocks}
    classes={{
      label: styles.label,
      list: _.cn(styles.list, columns && styles.columns),
      project: styles,
      showcase: styles,
    }}
    facts={SiteFacts}
  />
);
