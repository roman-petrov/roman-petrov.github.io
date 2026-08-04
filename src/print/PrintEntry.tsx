import type { Entry } from "../Content";

import { Blocks, Inline } from "../components";
import { _ } from "../core";
import styles from "./PrintEntry.module.scss";
import text from "./PrintText.module.scss";

export type PrintEntryProps = Entry;

export const PrintEntry = ({ blocks, current, date, link, title }: PrintEntryProps) => (
  <article className={styles.root}>
    <div className={styles.meta}>
      <p className={_.cn(styles.date, current === true && styles.isNow)}>{date}</p>
      {link === undefined ? undefined : (
        <a className={styles.link} href={link.href}>
          {link.label}
        </a>
      )}
    </div>
    <div className={styles.body}>
      <h3 className={styles.title}>
        <Inline text={title} />
      </h3>
      <Blocks blocks={blocks} classes={text} />
    </div>
  </article>
);
