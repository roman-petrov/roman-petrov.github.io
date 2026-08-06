import { _ } from "@cv/core";

import styles from "./Roles.module.scss";

export type RolesProps = { items: string[]; size: `sm` | `xs` };

export const Roles = ({ items, size }: RolesProps) => (
  <p className={styles.root}>
    {items.map(item => (
      <span className={_.cn(styles.role, styles[size])} key={item}>
        {item}
      </span>
    ))}
  </p>
);
