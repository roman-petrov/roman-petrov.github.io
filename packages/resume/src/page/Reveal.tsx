import type { CSSProperties, ElementType, ReactNode } from "react";

import { _ } from "@cv/core";

import styles from "./Reveal.module.scss";

export type RevealProps = { children: ReactNode; cn?: string; index?: number; tag?: ElementType };

export const Reveal = ({ children, cn, index = 0, tag: Tag = `div` }: RevealProps) => (
  <Tag className={_.cn(styles.root, cn)} style={{ "--i": index } as CSSProperties}>
    {children}
  </Tag>
);
