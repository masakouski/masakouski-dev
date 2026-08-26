export type Project = {
  /** null = слот-заглушка: рендерится пунктиром и без ссылки */
  href: string | null;
  kicker: string;
  title: string;
  description: string;
  action?: string;
};

export const projects: Project[] = [
  {
    href: null,
    kicker: 'Slot 01',
    title: 'Playable ad',
    description: 'Заглушка — сюда пойдёт демка на Cocos Creator, когда будет ссылка.',
  },
  {
    href: null,
    kicker: 'Slot 02',
    title: 'Сайт, который ты сделал',
    description: 'Заглушка — URL и одно предложение описания.',
  },
  {
    href: null,
    kicker: 'Slot 03',
    title: 'Эксперимент',
    description: 'Заглушка — демо компонента, маленький инструмент, что угодно с URL.',
  },
  {
    href: null,
    kicker: 'Slot 04',
    title: 'Исходники сайта',
    description: 'Заглушка — ссылка на репозиторий masakouski-dev.',
  },
];
