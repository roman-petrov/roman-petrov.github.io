import { Ico } from "../components";
import { Content } from "../Content";
import styles from "./PrintHero.module.scss";

export const PrintHero = () => (
  <header className={styles.root}>
    <div className={styles.copy}>
      <h1 className={styles.name}>{Content.meta.name}</h1>
      <p className={styles.kicker}>
        <span className={styles.slash}>{`//`}</span>
        {` ${Content.meta.role}:`}
        <span className={styles.tagline}>{Content.meta.tagline}</span>
      </p>
      <ul className={styles.contacts}>
        {Content.contacts.map(({ href, icon, label, value }) => (
          <li key={label}>
            {href === undefined ? (
              <span className={styles.contact}>
                <Ico>{icon}</Ico>
                <span>{value}</span>
              </span>
            ) : (
              <a className={styles.contact} href={href}>
                <Ico>{icon}</Ico>
                <span>{value}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
    <img
      alt={Content.meta.name}
      className={styles.photo}
      height={160}
      src={`./assets/${Content.meta.photo}`}
      width={160}
    />
  </header>
);
