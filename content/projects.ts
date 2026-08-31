export type Project = {
  href: string | null;
  index: string;
  title: string;
  description?: string;
};

export const projects: Project[] = [
  {
    href: 'https://masakouski-playable-ads.netlify.app/',
    index: '01',
    title: 'Playable ads',
    description: 'A collection of playable ads, each built as a self-contained HTML5 mini-game.',
  },
  {
    href: 'https://picloud-project.web.app/feed',
    index: '02',
    title: 'PiCloud',
    description: 'An Instagram-inspired social network — feed, profiles and posts. Built in 2021.',
  },
  {
    href: 'https://thisisjustyourroom.netlify.app/',
    index: '03',
    title: 'This Is Just Your Room',
    description: 'A demo of the iPhone LiDAR sensor, made to find out what it can actually capture.',
  },
  {
    href: 'https://github.com/masakouski/masakouski-dev',
    index: '04',
    title: 'This site',
    description: 'Next.js with a static export, deployed on Netlify. Source on GitHub.',
  },
];
