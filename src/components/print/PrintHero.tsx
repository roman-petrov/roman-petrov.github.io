import { Contacts, Meta } from "../../Content";
import { Ico } from "../index";
import styles from "./PrintHero.module.scss";

/** Contact card at the top of the sheet: photo, name, role and the contact grid. */
export const PrintHero = () => (
  <header className={styles.root}>
    <div className={styles.id}>
      <img alt={Meta.name} className={styles.photo} height={160} src={`./assets/${Meta.photo}`} width={160} />
      <div>
        <h1 className={styles.name}>{Meta.name}</h1>
        <p className={styles.role}>{Meta.role}</p>
      </div>
    </div>
    <ul className={styles.contacts}>
      {Contacts.map(({ href, icon, label, value }) => (
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
