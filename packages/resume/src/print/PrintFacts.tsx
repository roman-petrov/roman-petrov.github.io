import { _ } from "@cv/core";

import type { FactsItemsProps } from "../components";

import { Facts } from "../components";
import styles from "./PrintFacts.module.scss";

export type PrintFactsProps = FactsItemsProps & { card?: boolean };

export const PrintFacts = ({ card = false, items }: PrintFactsProps) => (
  <Facts classes={{ ...styles, facts: _.cn(styles.facts, card && styles.card) }} items={items} />
);
