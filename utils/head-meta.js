const LANG = 'en_US';
const TYPE = 'website';
// TODO: Replace this
const SITE_NAME = process.browser && window.location.host;
const URL = `${process.browser && window.location.origin}`;

export default ({ title, description, socialBanner }) => {
  return {
    title,
    description,
    meta: [
      // normal meta
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: SITE_NAME,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      // facebook meta
      {
        hid: 'locale',
        name: 'og:locale',
        content: LANG,
      },
      {
        hid: 'type',
        name: 'og:type',
        content: TYPE,
      },
      {
        hid: 'type',
        name: 'og:url',
        content: URL,
      },
      {
        hid: 'type',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'type',
        name: 'og:site_name',
        content: SITE_NAME,
      },
      {
        hid: 'type',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'image',
        name: 'og:image',
        content: socialBanner,
      },
      // twitter meta
      // mobile meta
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: title,
      },
    ],
  };
};
