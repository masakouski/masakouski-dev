import styles from './SectionHead.module.css';

export function SectionHead({ num, title, aside }: { num: string; title: string; aside?: string }) {
  return (
    <div className={styles.head}>
      <span className={styles.num}>{num}</span>
      <h2 className={styles.title}>{title}</h2>
      {aside ? <span className={styles.aside}>{aside}</span> : null}
    </div>
  );
}
