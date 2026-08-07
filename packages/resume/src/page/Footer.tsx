import { Content } from "../Content";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.inner}>
      <p className={styles.note}>{`© ${String(new Date().getFullYear())} ${Content.meta.name}`}</p>
    </div>
  </footer>
);
