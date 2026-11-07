import de from './de.json';
import en from './en.json';
import ru from './ru.json';

export const languages = ['de', 'en', 'ru'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'de';

export type Dict = typeof de;
const dicts: Record<Lang, Dict> = { de, en, ru };

export const htmlLang: Record<Lang, string> = { de: 'de-CH', en: 'en', ru: 'ru' };
export const ogLocale: Record<Lang, string> = { de: 'de_CH', en: 'en_US', ru: 'ru_RU' };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

/** Site base path without trailing slash ('' at the domain root, '/strikebull' on GitHub Pages). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an absolute site path with the base: withBase('/sitemap-index.xml') */
export function withBase(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Build a localized URL: localize('en', '/impressum/') -> '<base>/en/impressum/' */
export function localize(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return withBase(lang === defaultLang ? clean : `/${lang}${clean}`);
}

/** Strip the language prefix from a pathname: '/en/impressum/' -> '/impressum/' */
export function stripLang(pathname: string): string {
  const match = pathname.match(/^\/(en|ru)(\/.*)?$/);
  return match ? match[2] || '/' : pathname;
}

export function getLang(param: string | undefined): Lang {
  return (languages as readonly string[]).includes(param ?? '') ? (param as Lang) : defaultLang;
}
