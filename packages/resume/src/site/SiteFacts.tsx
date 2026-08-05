import type { FactsItemsProps } from "../components";

import { Facts } from "../components";
import styles from "./SiteFacts.module.scss";

export const SiteFacts = ({ items }: FactsItemsProps) => <Facts classes={styles} items={items} />;
