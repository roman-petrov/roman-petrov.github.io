import { Ico } from "../components";
import { Content } from "../Content";
import styles from "./PrintHero.module.scss";

export const PrintHero = () => (
  <header className={styles.root}>
    <div className={styles.id}>
      <img
        alt={Content.meta.name}
        className={styles.photo}
        height={160}
        src={`./assets/${Content.meta.photo}`}
        width={160}
      />
      <div>
        <h1 className={styles.name}>{Content.meta.name}</h1>
        <p className={styles.role}>{Content.meta.role}</p>
      </div>
    </div>
    <ul className={styles.contacts}>
      {Content.contacts.map(({ href, icon, label, value }) => (
        <li key={label}>
          <Ico>{icon}</Ico>
          <span className={styles.label}>{label}</span>
          {href === undefined ? (
            <span className={styles.value}>{value}</span>
          ) : (
            <a className={styles.value} href={href}>
              {value}
            </a>
          )}
        </li>
      ))}
    </ul>
  </header>
);
