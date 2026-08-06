import { _ } from "@cv/core";

import styles from "./Lead.module.scss";
import { Roles } from "./Roles";

export type LeadProps = {
  date?: string;
  href?: string;
  roles?: string[];
  size: `lg` | `md`;
  title: string;
  titleAs?: `h3` | `span`;
};

export const Lead = ({ date, href, roles, size, title, titleAs = `span` }: LeadProps) => (
  <div className={_.cn(styles.root, styles[size])}>
    {date === undefined ? undefined : <span className={styles.date}>{date}</span>}
    {href === undefined ? (
      titleAs === `h3` ? (
        <h3 className={styles.title}>{title}</h3>
      ) : (
        <span className={styles.title}>{title}</span>
      )
    ) : titleAs === `h3` ? (
      <h3 className={styles.title}>
        <a href={href}>{title}</a>
      </h3>
    ) : (
      <a className={styles.title} href={href}>
        {title}
      </a>
    )}
    {roles === undefined ? undefined : (
      <div className={styles.roles}>
        <Roles items={roles} size={size === `lg` ? `sm` : `xs`} />
      </div>
    )}
  </div>
);
