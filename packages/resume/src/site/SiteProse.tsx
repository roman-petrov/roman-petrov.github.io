import { _ } from "@cv/core";

import type { Block } from "../Content";

import { Blocks } from "../components";
import motion from "./SiteMotion.module.scss";
import styles from "./SiteProse.module.scss";
import surface from "./SiteSurface.module.scss";
import text from "./SiteText.module.scss";

export type SiteProseProps = { blocks: Block[] };

export const SiteProse = ({ blocks }: SiteProseProps) => (
  <div className={_.cn(styles.root, motion.reveal, surface.glass)}>
    <Blocks blocks={blocks} classes={{ ...text, list: _.cn(text.list, styles.columns) }} />
  </div>
);
