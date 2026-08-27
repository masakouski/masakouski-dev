export type Engagement = {
  id: string;
  company: string;
  client: string;
  period: string;
  metric: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const work: Engagement[] = [
  {
    id: 'aleks',
    company: 'ALEKS',
    client: 'McGraw Hill',
    period: '2024 — 2025',
    metric: '25M+ students',
    summary:
      'Adaptive learning and assessment platform for math, chemistry, statistics ' +
      'and accounting. Large, mature codebase with substantial legacy surface.',
    points: [
      'Built a JSON → SQL ingestion pipeline: one ISBN creates a whole book record from arbitrarily nested content files.',
      'Solved the table-of-contents alignment algorithm — shift offsets and parent IDs across a hierarchy — and built a verification TOC to prove the outgoing payload was correct.',
      'Migrated a Salesforce query layer off a proprietary in-house scripting language onto JavaScript, plus the dialog interface around it.',
    ],
    stack: ['JavaScript', 'MySQL', 'REST', 'Jasmine', 'legacy framework'],
  },
  {
    id: 'diocesan',
    company: 'Diocesan',
    client: 'Multi-tenant SaaS',
    period: '2025 — present',
    metric: 'greenfield',
    summary:
      'A platform for religious organizations — a member-facing app plus a ' +
      'super-admin console. Built close to from scratch on Vite, React, ' +
      'TypeScript and Mantine with one other senior engineer.',
    points: [
      'Proposed the theming architecture the team adopted: palette in theme.ts, consumed through generated Mantine variables instead of a chain of CSS files.',
      'Built organizations, roles, message and form templates — including a constructor so templates change without engineering.',
      'Owned mobile alignment across the product: audited every screen against the specs and drove the fixes.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Mantine', 'TanStack Query', 'Storybook'],
  },
  {
    id: 'netcracker',
    company: 'Netcracker',
    client: 'O2 UK · Nuuday · core libs',
    period: '2021 — 2023',
    metric: '−2s load time',
    summary:
      'Three consecutive telecom engagements: a self-service customer platform, ' +
      'a CSR analytics dashboard, and the shared component libraries behind the ' +
      'product portfolio.',
    points: [
      'Cut roughly two seconds off application load by eliminating unused JavaScript from the bundle.',
      'Built core library functionality consumed by multiple downstream product teams.',
      'Found and fixed a critical backend bug across service boundaries in a microservice architecture.',
    ],
    stack: ['Angular', 'RxJS', 'NgRx', 'React', 'Redux Toolkit', 'Webpack'],
  },
];
