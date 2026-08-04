import type { Entry } from "../Content";

import { Inline } from "../components";
import { PrintBlocks } from "./PrintBlocks";
import styles from "./PrintEntry.module.scss";

export type PrintEntryProps = Entry;

export const PrintEntry = ({ blocks, date, link, title }: PrintEntryProps) => (
  <article className={styles.root}>
    <p className={styles.meta}>
      <span className={styles.date}>{date}</span>
      {link === undefined ? undefined : (
        <a className={styles.link} href={link.href}>
          {link.label}
        </a>
      )}
    </p>
    <h3 className={styles.title}>
      <Inline text={title} />
    </h3>
    <PrintBlocks blocks={blocks} />
  </article>
);
