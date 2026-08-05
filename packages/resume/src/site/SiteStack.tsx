import { Ico, Inline } from "../components";
import { Content } from "../Content";
import { SiteBlocks } from "./SiteBlocks";
import { SiteReveal } from "./SiteReveal";
import { SiteSection } from "./SiteSection";
import styles from "./SiteStack.module.scss";

export const SiteStack = () => {
  const { blocks, icon, id, title } = Content.section(`stack`);

  return (
    <SiteSection icon={icon} id={id} title={title}>
      <div className={styles.root}>
        <SiteReveal>
          <SiteBlocks blocks={blocks ?? []} />
        </SiteReveal>
        <div className={styles.aside}>
          {Content.facts.map(({ icon, label, text }, index) => (
            <SiteReveal cn={styles.mini} index={index} key={label}>
              <p className={styles.label}>
                <Ico>{icon}</Ico>
                {` ${label}`}
              </p>
              <p className={styles.text}>
                <Inline text={text ?? ``} />
              </p>
            </SiteReveal>
          ))}
        </div>
      </div>
    </SiteSection>
  );
};
