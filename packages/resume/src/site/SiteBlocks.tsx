import type { Block } from "../Content";

import { Blocks } from "../components";
import styles from "./SiteBlocks.module.scss";
import { SiteFacts } from "./SiteFacts";

export type SiteBlocksProps = { blocks: Block[] };

export const SiteBlocks = ({ blocks }: SiteBlocksProps) => (
  <Blocks
    blocks={blocks}
    classes={{ label: styles.label, list: styles.list, project: styles, showcase: styles }}
    facts={SiteFacts}
  />
);
