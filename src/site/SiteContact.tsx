import { Ico } from "../components";
import styles from "./SiteContact.module.scss";

export type SiteContactProps = { href?: string; icon: string; value: string };

export const SiteContact = ({ href, icon, value }: SiteContactProps) => {
  const body = (
    <>
      <Ico>{icon}</Ico>
      <span>{value}</span>
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
