import { TopBar } from '@/components/TopBar';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Projects } from '@/components/Projects';
import { Toolbox } from '@/components/Toolbox';
import { SiteFooter } from '@/components/SiteFooter';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.wrap}>
      <TopBar />
      <main id="main">
        <Hero />
        <Projects />
        <Work />
        <Toolbox />
      </main>
      <SiteFooter />
    </div>
  );
}
