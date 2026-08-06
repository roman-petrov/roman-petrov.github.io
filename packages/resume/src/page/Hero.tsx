import { Assets } from "../Assets";
import { Content } from "../Content";
import { Contact } from "./Contact";
import { GithubAction } from "./GithubAction";
import styles from "./Hero.module.scss";
import { PdfAction } from "./PdfAction";

export const Hero = () => (
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
              <Contact href={href} icon={icon} value={value} />
            </li>
          ))}
        </ul>
        <div className={styles.cta}>
          <PdfAction size="lg" />
          <GithubAction size="lg" />
        </div>
      </div>
      <figure className={styles.photo}>
        <img alt={Content.meta.name} fetchPriority="high" height={320} src={Assets.href(Assets.webp)} width={320} />
      </figure>
    </div>
  </section>
);
