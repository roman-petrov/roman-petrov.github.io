import type { Section as SectionData } from "../Content";

import { Blocks } from "../components";
import { Section } from "./Section";

export type GroupsProps = { section: SectionData };

export const Groups = ({ section }: GroupsProps) => (
  <Section icon={section.icon} id={section.id} title={section.title}>
    <Blocks blocks={section.blocks ?? []} />
  </Section>
);
