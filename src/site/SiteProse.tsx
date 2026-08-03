import type { Block } from "../Content";

import { Blocks } from "../components";
import { _ } from "../core";
import { SiteBlockClasses } from "./SiteBlockClasses";
import motion from "./SiteMotion.module.scss";
import styles from "./SiteProse.module.scss";
import surface from "./SiteSurface.module.scss";

export type SiteProseProps = { blocks: Block[] };

export const SiteProse = ({ blocks }: SiteProseProps) => (
  <div className={_.cn(styles.root, motion.reveal, surface.glass)}>
    <Blocks blocks={blocks} classes={{ ...SiteBlockClasses, list: _.cn(SiteBlockClasses.list, styles.columns) }} />
  </div>
);
