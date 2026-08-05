import type { Section } from "../Content";

import { SiteBlocks } from "./SiteBlocks";
import { SiteReveal } from "./SiteReveal";
import { SiteSection } from "./SiteSection";

export type SiteGroupsProps = { section: Section };

export const SiteGroups = ({ section }: SiteGroupsProps) => (
  <SiteSection icon={section.icon} id={section.id} title={section.title}>
    <SiteReveal>
      <SiteBlocks blocks={section.blocks ?? []} />
    </SiteReveal>
  </SiteSection>
);
