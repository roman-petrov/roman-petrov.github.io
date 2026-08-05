import type { FactsItemsProps } from "../components";

import { Facts } from "../components";
import styles from "./PrintFacts.module.scss";

export type PrintFactsProps = FactsItemsProps;

export const PrintFacts = ({ items }: PrintFactsProps) => <Facts classes={styles} items={items} />;
