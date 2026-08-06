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
      <figure className={styles.photo}>
        <img alt={Content.meta.name} fetchPriority="high" height={240} src={Assets.href(Assets.webp)} width={240} />
      </figure>
      <div className={styles.copy}>
        <h1 className={styles.name}>{Content.meta.name}</h1>
        <p className={styles.role}>{Content.meta.role}</p>
        <p className={styles.tagline}>
          <span className={styles.slash}>{`//`}</span>
          {` ${Content.meta.tagline}`}
          <span className={styles.caret} />
        </p>
        <div className={styles.meta}>
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
      </div>
    </div>
  </section>
);
