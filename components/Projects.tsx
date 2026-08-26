import { projects } from '@/content/projects';
import { SectionHead } from './SectionHead';
import styles from './Projects.module.css';

export function Projects() {
  const filled = projects.filter((p) => p.href).length;

  return (
    <section className={styles.section}>
      <SectionHead
        num="01"
        title="Things I built on my own time"
        aside={filled ? `${filled} live` : `${projects.length} slots`}
      />

      <div className={styles.grid}>
        {projects.map((project) => {
          const body = (
            <>
              <span className={styles.kicker}>{project.kicker}</span>
              <span className={styles.title}>{project.title}</span>
              <span className={styles.desc}>{project.description}</span>
              <span className={styles.go}>{project.action ?? '→'}</span>
            </>
          );

          return project.href ? (
            <a className={styles.card} href={project.href} key={project.kicker} target="_blank" rel="noreferrer">
              {body}
            </a>
          ) : (
            <div className={`${styles.card} ${styles.slot}`} key={project.kicker}>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
