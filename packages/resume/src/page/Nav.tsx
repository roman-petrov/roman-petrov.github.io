import type { CSSProperties } from "react";

import { Content } from "../Content";
import styles from "./Nav.module.scss";
import { PdfAction } from "./PdfAction";
import { ThemeToggle } from "./ThemeToggle";
import { Timelines } from "./Timelines";

export const Nav = () => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <a className={styles.brand} href="#top">
        <span className={styles.mark}>RP</span>
        <span className={styles.name}>{Content.meta.name}</span>
      </a>
      <nav className={styles.links}>
        {Content.sections.map(({ id, title }) => (
          <a href={`#${id}`} key={id} style={{ "--section-timeline": Timelines.name(id) } as CSSProperties}>
            {title}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <ThemeToggle />
        <PdfAction />
      </div>
    </div>
  </header>
);
