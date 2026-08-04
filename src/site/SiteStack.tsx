import { Ico, Inline, Stagger } from "../components";
import { Content } from "../Content";
import { _ } from "../core";
import motion from "./SiteMotion.module.scss";
import { SiteSection } from "./SiteSection";
import styles from "./SiteStack.module.scss";
import surface from "./SiteSurface.module.scss";
import text from "./SiteText.module.scss";

export const SiteStack = () => {
  const [skills, ...rest] = Content.facts;

  return (
    <SiteSection icon={Content.stack.icon} id="stack" title={Content.stack.title}>
      <div className={styles.root}>
        <ul className={_.cn(styles.chips, motion.reveal)}>
          {(skills?.chips ?? []).map((chip, index) => (
            <li className={styles.chip} key={chip} style={Stagger(index)}>
              {chip}
            </li>
          ))}
        </ul>
        <div className={styles.aside}>
          {rest.map(({ icon, label, text: body }, index) => (
            <div className={_.cn(styles.mini, surface.glass, motion.reveal)} key={label} style={Stagger(index)}>
              <p className={_.cn(text.label, styles.label)}>
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
