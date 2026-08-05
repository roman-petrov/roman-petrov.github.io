import type { Section } from "../Content";

import { SiteBlocks } from "./SiteBlocks";
import styles from "./SiteProse.module.scss";
import { SiteReveal } from "./SiteReveal";
import { SiteSection } from "./SiteSection";

export type SiteProseProps = { section: Section };

export const SiteProse = ({ section }: SiteProseProps) => (
  <SiteSection icon={section.icon} id={section.id} title={section.title}>
    <SiteReveal cn={styles.root}>
      <SiteBlocks blocks={section.blocks ?? []} />
    </SiteReveal>
  </SiteSection>
);
