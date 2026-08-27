export type Project = {
  href: string | null;
  index: string;
  title: string;
  description?: string;
};

export const projects: Project[] = [
  { href: null, index: '01', title: 'Playable ad' },
  { href: null, index: '02', title: 'Web project' },
  { href: null, index: '03', title: 'Experiment' },
  { href: null, index: '04', title: 'This site' },
];
