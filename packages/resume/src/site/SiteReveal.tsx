import type { CSSProperties, ElementType, ReactNode } from "react";

import { _ } from "@cv/core";

import styles from "./SiteReveal.module.scss";

export type SiteRevealProps = { children: ReactNode; cn?: string; index?: number; tag?: ElementType };

export const SiteReveal = ({ children, cn, index = 0, tag: Tag = `div` }: SiteRevealProps) => (
  <Tag className={_.cn(styles.root, cn)} style={{ "--i": index } as CSSProperties}>
    {children}
  </Tag>
);
