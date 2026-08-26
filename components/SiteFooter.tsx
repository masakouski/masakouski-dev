import { site } from '@/content/site';
import { EmailLink } from './EmailLink';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>{site.name}</span>
      <EmailLink className={styles.link}>Email</EmailLink>
      <a className={styles.link} href={site.links.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a className={styles.link} href={site.links.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a className={styles.link} href={site.links.cv}>
        CV
      </a>
      <span className={styles.end}>Warsaw</span>
    </footer>
  );
}
