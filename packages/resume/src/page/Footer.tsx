import { Content } from "../Content";
import styles from "./Footer.module.scss";
import { GithubAction } from "./GithubAction";
import { PdfAction } from "./PdfAction";

export const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.inner}>
      <div className={styles.actions}>
        <PdfAction />
        <GithubAction />
      </div>
      <p className={styles.note}>{`© ${String(new Date().getFullYear())} ${Content.meta.name}`}</p>
    </div>
  </footer>
);
