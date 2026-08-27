import { projects } from '@/content/projects';
import { SectionHead } from './SectionHead';
import styles from './Projects.module.css';

export function Projects() {
  const live = projects.filter((project) => project.href).length;

  return (
    <section className={styles.section}>
      <SectionHead
        num="01"
        title="Things I built on my own time"
        aside={live ? `${live} live` : undefined}
      />

      <div className={styles.grid}>
        {projects.map((project) => {
          const body = (
            <>
              <span className={styles.index}>{project.index}</span>
              <span className={styles.title}>{project.title}</span>
              {project.description ? <span className={styles.desc}>{project.description}</span> : null}
              <span className={styles.go}>{project.href ? 'Open →' : 'to be added'}</span>
            </>
          );

          return project.href ? (
            <a
              className={styles.card}
              href={project.href}
              key={project.index}
              target="_blank"
              rel="noreferrer"
            >
              {body}
            </a>
          ) : (
            <div className={`${styles.card} ${styles.empty}`} key={project.index}>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
