import type { Entry } from "../Content";

import { Inline } from "../components";
import { PrintBlocks } from "./PrintBlocks";
import styles from "./PrintEntry.module.scss";

export type PrintEntryProps = Entry;

export const PrintEntry = ({ blocks, date, link, title }: PrintEntryProps) => (
  <article className={styles.root}>
    <div className={styles.meta}>
      <p className={styles.date}>{date}</p>
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
      <PrintBlocks blocks={blocks} />
    </div>
  </article>
);
