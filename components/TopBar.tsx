import { site } from '@/content/site';
import { EmailLink } from './EmailLink';
import styles from './TopBar.module.css';

export function TopBar() {
  return (
    <nav className={styles.bar} aria-label="Contact">
      <EmailLink className={styles.link}>write me an email</EmailLink>
      <a className={styles.link} href={site.links.cv}>
        get my cv
      </a>
      <a className={styles.link} href={site.links.linkedin} target="_blank" rel="noreferrer">
        connect on linkedin
      </a>
    </nav>
  );
}
