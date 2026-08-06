import { Assets } from "../Assets";
import { Content } from "../Content";
import actions from "./SiteAction.module.scss";
import { SiteContact } from "./SiteContact";
import { SiteGithubAction } from "./SiteGithubAction";
import styles from "./SiteHero.module.scss";
import { SitePdfAction } from "./SitePdfAction";

export const SiteHero = () => (
  <section className={styles.root} id="top">
    <div className={styles.glow} />
    <div className={styles.inner}>
      <div>
        <h1 className={styles.name}>{Content.meta.name}</h1>
        <p className={styles.kicker}>
          <span className={styles.slash}>{`//`}</span>
          {` ${Content.meta.role}:`}
          <span className={styles.tagline}>{Content.meta.tagline}</span>
          <span className={styles.caret} />
        </p>
        <ul className={styles.contacts}>
          {Content.contacts.map(({ href, icon, label, value }) => (
            <li key={label}>
              <SiteContact href={href} icon={icon} value={value} />
            </li>
          ))}
        </ul>
        <div className={styles.cta}>
          <SitePdfAction cn={actions.lg} />
          <SiteGithubAction cn={actions.lg} />
        </div>
      </div>
      <figure className={styles.photo}>
        <img alt={Content.meta.name} fetchPriority="high" height={320} src={Assets.href(Assets.webp)} width={320} />
      </figure>
    </div>
  </section>
);
