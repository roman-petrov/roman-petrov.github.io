import { Ico } from "../components";
import styles from "./Contact.module.scss";

export type ContactProps = { href?: string; icon: string; value: string };

export const Contact = ({ href, icon, value }: ContactProps) => {
  const body = (
    <>
      <Ico>{icon}</Ico>
      <span className={styles.value}>{value}</span>
    </>
  );

  return href === undefined ? (
    <span className={styles.root}>{body}</span>
  ) : (
    <a className={styles.root} href={href}>
      {body}
    </a>
  );
};
