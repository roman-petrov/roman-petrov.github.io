import { Content } from "../Content";
import styles from "./Nav.module.scss";
import { ThemeToggle } from "./ThemeToggle";

export type NavProps = { photo: string };

export const Nav = ({ photo }: NavProps) => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <a className={styles.brand} href="#top">
        <span className={styles.badge}>
          <span className={styles.mark}>RP</span>
          <img alt="" aria-hidden className={styles.face} height={32} src={photo} width={32} />
        </span>
        <span className={styles.name}>{Content.meta.name}</span>
      </a>
      <nav className={styles.links}>
        {Content.sections.map(({ id, title }) => (
          <a href={`#${id}`} key={id}>
            {title}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <ThemeToggle />
      </div>
    </div>
  </header>
);
