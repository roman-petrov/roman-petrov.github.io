import { Ico, Inline } from "../components";
import { Content } from "../Content";
import { SiteReveal } from "./SiteReveal";
import { SiteSection } from "./SiteSection";
import styles from "./SiteStack.module.scss";

export const SiteStack = () => {
  const [skills, ...rest] = Content.facts;

  return (
    <SiteSection icon={Content.stack.icon} id="stack" title={Content.stack.title}>
      <div className={styles.root}>
        <SiteReveal cn={styles.chips} tag="ul">
          {(skills.chips ?? []).map(chip => (
            <li className={styles.chip} key={chip}>
              {chip}
            </li>
          ))}
        </SiteReveal>
        <div className={styles.aside}>
          {rest.map(({ icon, label, text }, index) => (
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
