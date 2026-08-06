import type { Section as SectionData } from "../Content";

import { Blocks } from "../components";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export type GroupsProps = { section: SectionData };

export const Groups = ({ section }: GroupsProps) => (
  <Section icon={section.icon} id={section.id} title={section.title}>
    <Reveal>
      <Blocks blocks={section.blocks ?? []} />
    </Reveal>
  </Section>
);
