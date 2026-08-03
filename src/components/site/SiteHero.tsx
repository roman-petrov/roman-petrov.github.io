import { Contacts, Meta } from "../../Content";
import { Cn, Ico } from "../index";
import { SiteActionSize, SiteGithubLink, SitePdfLink } from "./SiteActions";
import styles from "./SiteHero.module.scss";
import layout from "./SiteLayout.module.scss";

const contactBody = (icon: string, value: string) => (
  <>
    <Ico>{icon}</Ico>
    <span>{value}</span>
  </>
);

export const SiteHero = () => (
  <section className={styles.root} id="top">
    <div aria-hidden="true" className={styles.glow} data-parallax />
    <div className={Cn(styles.inner, layout.wrap)}>
      <div>
        <p className={styles.kicker}>
          <span className={styles.slash}>{`//`}</span>
          {` ${Meta.role}`}
          <span aria-hidden="true" className={styles.caret} />
        </p>
        <h1 className={styles.name}>{Meta.name}</h1>
        <p className={styles.tagline}>{Meta.tagline}</p>
        <ul className={styles.contacts}>
          {Contacts.map(({ href, icon, label, value }) => (
            <li key={label}>
              {href === undefined ? (
                <span aria-label={label} className={styles.pill}>
                  {contactBody(icon, value)}
                </span>
              ) : (
                <a aria-label={label} className={styles.pill} href={href}>
                  {contactBody(icon, value)}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.cta}>
          <SitePdfLink cn={SiteActionSize.lg} />
          <SiteGithubLink cn={SiteActionSize.lg} />
        </div>
      </div>
      <figure className={styles.photo}>
        <img alt={Meta.name} height={320} src={`./assets/${Meta.photo}`} width={320} />
      </figure>
    </div>
    <a aria-label="Scroll to profile" className={styles.cue} href="#profile">
      <span aria-hidden="true" />
    </a>
  </section>
);
