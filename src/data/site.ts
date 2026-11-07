/**
 * Club facts — edit here, it updates all three languages at once.
 * Texts (translations) live in src/i18n/*.json.
 */

export const club = {
  name: 'STRIKEBULL MMA Club',
  legalName: 'Strikebull MMA Chur',
  street: 'Masanserstrasse 205',
  zip: '7000',
  city: 'Chur',
  venue: 'Turnhalle Schulheim Chur',
  phone: '+41 79 903 25 32',
  phoneHref: '+41799032532',
  whatsapp: '41799032532', // digits only, used for wa.me links
  email: 'strikebull@mail.ch',
  instagram: 'https://www.instagram.com/strikebull_mma_club_chur_/',
  instagramHandle: '@strikebull_mma_club_chur_',
  coachingSince: 2014,
};

/** Training sessions. `day` keys map to i18n `days.*`. */
export const schedule = [
  { day: 'tue', start: '18:30', end: '20:00' },
  { day: 'fri', start: '18:30', end: '20:00' },
] as const;

/**
 * Web3Forms access key — get one for free at https://web3forms.com
 * (enter the email that should receive the requests, the key arrives by mail).
 * Requests currently go to: nikitagurzhiy1@gmail.com
 */
export const web3formsKey = '19c7d5c0-6b84-4afa-b7b9-886514c2d010';

/**
 * Prices — PLACEHOLDERS except the free trial. Confirm with the club.
 * `key` maps to i18n `prices.plans.*`.
 */
export const prices = [
  { key: 'trial', amount: null, featured: false },
  { key: 'single', amount: 25, featured: false },
  { key: 'month', amount: 90, featured: true },
  { key: 'year', amount: 900, featured: false },
] as const;

export const mapsQuery = encodeURIComponent(`${club.venue}, ${club.street}, ${club.zip} ${club.city}`);
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
