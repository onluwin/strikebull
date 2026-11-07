// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://onluwin.github.io/strikebull/
// When a custom domain (e.g. strikebull.ch) is connected:
//   SITE = 'https://strikebull.ch' and BASE = '/'
const SITE = 'https://onluwin.github.io';
const BASE = '/strikebull';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // legal pages are noindex, keep them out of the sitemap
      filter: (page) => !/\/(impressum|datenschutz)\/$/.test(page),
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-CH', en: 'en', ru: 'ru' },
      },
    }),
  ],
});
