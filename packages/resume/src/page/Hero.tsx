import { Content } from "../Content";
import { Contact } from "./Contact";
import styles from "./Hero.module.scss";
import { LinkedInButton } from "./LinkedInButton";
import { PdfButton } from "./PdfButton";

export type HeroProps = { photo: string };

export const Hero = ({ photo }: HeroProps) => (
  <section className={styles.root} id="top">
    <div className={styles.glow} />
    <div className={styles.inner}>
      <figure className={styles.photo}>
        <img
          alt={`${Content.meta.name}, ${Content.meta.role}`}
          fetchPriority="high"
          height={240}
          src={photo}
          width={240}
        />
      </figure>
      <div className={styles.copy}>
        <h1 className={styles.name}>{Content.meta.name}</h1>
        <div className={styles.grid}>
          <div className={styles.lead}>
            <p className={styles.role}>{Content.meta.role}</p>
            <p className={styles.tagline}>
              <span>{`//`}</span>
              {` ${Content.meta.tagline}`}
              <span className={styles.caret} />
            </p>
          </div>
          <ul className={styles.contacts}>
            {Content.contacts.map(({ href, icon, label, value }) => (
              <li key={label}>
                <Contact href={href} icon={icon} value={value} />
              </li>
            ))}
          </ul>
          <div className={styles.cta}>
            <PdfButton />
            <LinkedInButton />
          </div>
        </div>
      </div>
    </div>
  </section>
);
