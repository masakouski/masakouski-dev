import { site, specs } from '@/content/site';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>{site.name}</h1>

      <p className={styles.tagline}>
        {site.headline.before}
        <em>{site.headline.accent}</em>
        {site.headline.after}
      </p>

      <p className={styles.lede}>{site.lede}</p>

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
