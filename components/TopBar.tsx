import { site } from '@/content/site';
import styles from './TopBar.module.css';

export function TopBar() {
  return (
    <header className={styles.bar}>
      <b className={styles.name}>{site.name}</b>
      <span>{site.role}</span>
      <span>
        {site.location} · {site.timezone}
      </span>
    </header>
  );
}
