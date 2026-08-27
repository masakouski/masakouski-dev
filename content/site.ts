export const site = {
  url: 'https://masakouski.dev',
  name: 'Dzmitry Masakouski',
  role: 'Senior Frontend Engineer',
  location: 'Warsaw, PL',
  timezone: 'UTC+2',

  headline: {
    before: 'Software developer specializing in ',
    accent: 'frontend',
    after: '.',
  },

  lede:
    'Five years of production frontend in React, TypeScript and Angular — ' +
    'for clients in the UK, US, Denmark and Poland.',

  email: { user: 'dzmitry.masakouski', domain: 'gmail.com' },

  links: {
    linkedin: 'https://www.linkedin.com/in/dzmitry-masakouski/',
    github: 'https://github.com/masakouski',
    cv: '/cv/dzmitry-masakouski-cv.pdf',
  },

  seo: {
    description:
      'Senior frontend engineer in Warsaw. Five years of React, TypeScript and ' +
      'Angular in production for clients in the UK, US, Denmark and Poland. ' +
      'Available for B2B contracts.',
  },
} as const;

export const specs = [
  { label: 'Status', value: 'Open to B2B contracts', live: true },
  { label: 'Base', value: 'Warsaw, Poland' },
  { label: 'Remote', value: 'EU & US time zones' },
  { label: 'Core', value: 'React · TypeScript · Vite' },
] as const;
