import { toolbox } from '@/content/toolbox';
import { SectionHead } from './SectionHead';
import styles from './Toolbox.module.css';

export function Toolbox() {
  return (
    <section className={styles.section}>
      <SectionHead num="03" title="Toolbox" />
      <div className={styles.grid}>
        {toolbox.map((group) => (
          <div key={group.group}>
            <h3 className={styles.groupName}>{group.group}</h3>
            <p className={styles.items}>{group.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
