# STRIKEBULL MMA Club Chur — Website

Одностраничный сайт клуба на [Astro](https://astro.build). Языки: 🇩🇪 `/` (основной), 🇬🇧 `/en/`, 🇷🇺 `/ru/`.

## Запуск

```bash
npm install      # один раз, ставит зависимости
npm run dev      # сайт на http://localhost:4321/strikebull/, обновляется при правках
npm run build    # готовые файлы для хостинга в папке dist/
npm run preview  # посмотреть собранную версию из dist/
```

## Где что править

| Что | Файл |
|---|---|
| Тексты на каждом языке | `src/i18n/de.json`, `en.json`, `ru.json` |
| Адрес, телефон, email, Instagram | `src/data/site.ts` → `club` |
| Расписание | `src/data/site.ts` → `schedule` |
| Цены | `src/data/site.ts` → `prices` (цифры) + `prices.plans` в JSON (названия) |
| Ключ формы Web3Forms | `src/data/site.ts` → `web3formsKey` |
| Фото и логотип | папка `images/` |
| Порядок блоков на странице | `src/components/HomePage.astro` |
| Цвета и шрифты | `src/styles/global.css` (`:root`) |

> Правишь текст в JSON — меняй его во **всех трёх** файлах, структура у них одинаковая.

## Форма заявки (Web3Forms)

1. Открыть https://web3forms.com → ввести email, куда должны приходить заявки.
2. Ключ придёт на почту — вставить его в `src/data/site.ts` вместо `YOUR_WEB3FORMS_ACCESS_KEY`.

Пока ключа нет, форма показывает ошибку и предлагает написать в WhatsApp.

## Публикация (GitHub Pages)

Сайт: **https://onluwin.github.io/strikebull/**

- Каждый Push в `main` автоматически собирает и публикует сайт (`.github/workflows/deploy.yml`). Статус — вкладка **Actions** на GitHub.
- Один раз нужно включить: репозиторий → **Settings → Pages → Source: GitHub Actions**.
- Свой домен потом: в `astro.config.mjs` поставить `SITE = 'https://домен'` и `BASE = '/'`, затем добавить домен в Settings → Pages → Custom domain.

## Перед запуском сайта (чек-лист)

- [ ] Ключ Web3Forms
- [ ] **Отзывы** — сейчас выдуманные заглушки. Заменить на настоящие или убрать `<Reviews />` из `HomePage.astro`
- [ ] **Цены** — сейчас примерные (кроме 2 бесплатных пробных)
- [ ] FAQ: возраст (сейчас «с 14 лет») — проверить
- [ ] Impressum: имя председателя Verein
- [ ] Datenschutz: хостинг и данные Web3Forms
- [ ] Логотип в хорошем качестве (сейчас 150×150)
- [ ] Домен → поменять `SITE` в `astro.config.mjs`
