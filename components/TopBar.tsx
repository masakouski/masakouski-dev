import { site } from '@/content/site';
import { EmailAddress } from './EmailAddress';
import styles from './TopBar.module.css';

export function TopBar() {
  return (
    <nav className={styles.bar} aria-label="Contact">
      <span className={styles.left}>
        <a className={styles.link} href={site.links.cv}>
          get my cv
        </a>
        <a className={styles.link} href={site.links.linkedin} target="_blank" rel="noreferrer">
          connect on linkedin
        </a>
      </span>
      <EmailAddress />
    </nav>
  );
}
