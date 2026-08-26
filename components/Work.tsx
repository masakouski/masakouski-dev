import { work } from '@/content/work';
import { SectionHead } from './SectionHead';
import styles from './Work.module.css';

export function Work() {
  return (
    <section className={styles.section} aria-labelledby="work">
      <SectionHead num="01" title="Selected work" aside={`${work.length} engagements`} />

      {work.map((job) => (
        <article className={styles.row} key={job.id}>
          <div className={styles.meta}>
            <strong>{job.company}</strong>
            {job.client}
            <br />
            {job.period}
            <div className={styles.metricWrap}>
              <span className={styles.metric}>{job.metric}</span>
            </div>
          </div>

          <div className={styles.body}>
            <p>{job.summary}</p>
            <ul className={styles.points}>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {job.stack.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
