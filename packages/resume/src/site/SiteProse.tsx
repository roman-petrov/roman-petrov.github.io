import type { Block } from "../Content";

import { SiteBlocks } from "./SiteBlocks";
import styles from "./SiteProse.module.scss";
import { SiteReveal } from "./SiteReveal";

export type SiteProseProps = { blocks: Block[] };

export const SiteProse = ({ blocks }: SiteProseProps) => (
  <SiteReveal cn={styles.root}>
    <SiteBlocks blocks={blocks} columns />
  </SiteReveal>
);
