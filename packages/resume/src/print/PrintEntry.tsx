import type { Entry } from "../Content";

import { Inline, Roles } from "../components";
import { PrintBlocks } from "./PrintBlocks";
import styles from "./PrintEntry.module.scss";

export type PrintEntryProps = Entry;

export const PrintEntry = ({ blocks, date, link, roles, title }: PrintEntryProps) => (
  <article className={styles.root}>
    <header className={styles.head}>
      <div className={styles.line}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <Inline text={title} />
        </h3>
        {link === undefined ? undefined : (
          <span className={styles.source}>
            <a className={styles.link} href={link.href}>
              {link.label}
            </a>
          </span>
        )}
      </div>
      {roles === undefined ? undefined : <Roles classes={styles} items={roles} />}
    </header>
    <PrintBlocks blocks={blocks} />
  </article>
);
