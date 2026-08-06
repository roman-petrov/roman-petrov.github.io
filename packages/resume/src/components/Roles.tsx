import { _ } from "@cv/core";

import styles from "./Roles.module.scss";

export type RolesProps = { items: string[]; size: `sm` | `xs` };

export const Roles = ({ items, size }: RolesProps) => (
  <p className={_.cn(styles.root, styles[size])}>
    {items.map(item => (
      <span className={styles.role} key={item}>
        {item}
      </span>
    ))}
  </p>
);
