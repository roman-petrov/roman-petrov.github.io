import { Content } from "../Content";
import styles from "./Principle.module.scss";

export const Principle = () => {
  const { formula, meaning } = Content.meta.principle;

  return (
    <figcaption className={styles.root}>
      <p className={styles.formula}>
        <span>{formula[0]}</span>
        <span className={styles.eq}>=</span>
        <span>{formula[1]}</span>
      </p>
      <p className={styles.meaning}>
        <span>{meaning[0]}</span>
        <span className={styles.eq}>=</span>
        <span>{meaning[1]}</span>
      </p>
    </figcaption>
  );
};
