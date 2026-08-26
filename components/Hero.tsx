import { site, specs } from '@/content/site';
import { EmailLink } from './EmailLink';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        {site.headline.before}
        <em>{site.headline.accent}</em>
        {site.headline.after}
      </h1>

      <p className={styles.lede}>{site.lede}</p>

      <div className={styles.actions}>
        <EmailLink className={`${styles.btn} ${styles.btnFill}`}>Email</EmailLink>
        <a className={styles.btn} href={site.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className={styles.btn} href={site.links.cv}>
          CV — PDF
        </a>
        <span className={styles.sep} aria-hidden="true" />
        <a className={styles.plain} href={site.links.github} target="_blank" rel="noreferrer">
          github.com/masakouski
        </a>
      </div>

      <dl className={styles.specs}>
        {specs.map((spec) => (
          <div className={styles.spec} key={spec.label}>
            <dt>{spec.label}</dt>
            <dd>
              {'live' in spec && spec.live ? <span className={styles.dot} /> : null}
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
