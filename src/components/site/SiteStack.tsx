import { Facts } from "../../Content";
import { Cn, Ico, Inline, Stagger } from "../index";
import motion from "./SiteMotion.module.scss";
import { SiteSection } from "./SiteSection";
import styles from "./SiteStack.module.scss";
import surface from "./SiteSurface.module.scss";
import text from "./SiteText.module.scss";

/** Skills, languages and hobbies become a site-only section that the print sheet lays out differently. */
export const SiteStack = () => {
  const [skills, ...rest] = Facts;

  return (
    <SiteSection icon={skills?.icon ?? ``} id="stack" title={`Stack & interests`}>
      <div className={styles.root}>
        <ul className={Cn(styles.chips, motion.reveal)}>
          {(skills?.chips ?? []).map((chip, index) => (
            <li className={styles.chip} key={chip} style={Stagger(index)}>
              {chip}
            </li>
          ))}
        </ul>
        <div className={styles.aside}>
          {rest.map(({ icon, label, text: body }, index) => (
            <div className={Cn(styles.mini, surface.glass, motion.reveal)} key={label} style={Stagger(index)}>
              <p className={Cn(text.label, styles.label)}>
                <Ico>{icon}</Ico>
                {` ${label}`}
              </p>
              <p className={styles.text}>
                <Inline text={body ?? ``} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </SiteSection>
  );
};
