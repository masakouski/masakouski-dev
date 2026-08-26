# masakouski.dev

Персональное портфолио. Next.js (App Router) + TypeScript, собирается в статику.

## Как это устроено

- `output: 'export'` в `next.config.mjs` — сборка кладёт готовые HTML в `out/`, сервер не нужен.
  Следствие: не работают server actions, route handlers, middleware и ISR. Для этого сайта они и не нужны.
- Netlify собирает `npm run build` и публикует `out/` (см. `netlify.toml`).
- Шрифт JetBrains Mono лежит в зависимостях (`@fontsource-variable/jetbrains-mono`) и раздаётся
  с нашего домена — ни одного запроса к Google в рантайме.
- Картинки не оптимизируются на лету (`images.unoptimized`). Готовь их заранее в webp/avif и клади в `public/`.

## Обновление контента

Вся текстовая часть лежит в `content/` — правишь объект, не вёрстку:

| Файл | Что там |
|---|---|
| `content/site.ts` | имя, заголовок, подводка, контакты, характеристики в hero, SEO-описание |
| `content/work.ts` | список проектов в секции 01 |
| `content/projects.ts` | карточки секции 02; `href: null` = пустой слот, рисуется пунктиром |
| `content/toolbox.ts` | группы стека в секции 03 |

## Команды

```bash
npm run dev        # локальная разработка
npm run build      # статическая сборка в out/
npm run preview    # посмотреть собранный out/ локально
npm run typecheck  # tsc --noEmit
```

## TODO

- [ ] Положить резюме в `public/cv/dzmitry-masakouski-cv.pdf` — ссылка на него уже есть в hero и футере
- [ ] Заполнить четыре слота в `content/projects.ts`
- [ ] Привязать домен masakouski.dev в Netlify
- [ ] OG-картинка
