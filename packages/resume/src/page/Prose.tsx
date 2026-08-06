import type { Section as SectionData } from "../Content";

import { Blocks } from "../components";
import styles from "./Prose.module.scss";
import { Section } from "./Section";

export type ProseProps = { section: SectionData };

export const Prose = ({ section }: ProseProps) => (
  <Section icon={section.icon} id={section.id} title={section.title}>
    <div className={styles.root}>
      <Blocks blocks={section.blocks ?? []} />
    </div>
  </Section>
);
