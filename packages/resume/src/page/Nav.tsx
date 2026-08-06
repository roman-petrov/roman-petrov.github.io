import { Content } from "../Content";
import styles from "./Nav.module.scss";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <a className={styles.brand} href="#top">
        <span className={styles.mark}>RP</span>
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
