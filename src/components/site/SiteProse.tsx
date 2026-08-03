import type { Block } from "../../Content";

import { Blocks, Cn } from "../index";
import { SiteBlockClasses } from "./SiteBlocks";
import motion from "./SiteMotion.module.scss";
import styles from "./SiteProse.module.scss";
import surface from "./SiteSurface.module.scss";

export type SiteProseProps = { blocks: Block[] };

/** Narrative card: same blocks as the print sheet, with the bullet list laid out in columns. */
export const SiteProse = ({ blocks }: SiteProseProps) => (
  <div className={Cn(styles.root, motion.reveal, surface.glass)}>
    <Blocks blocks={blocks} classes={{ ...SiteBlockClasses, list: Cn(SiteBlockClasses.list, styles.columns) }} />
  </div>
);
