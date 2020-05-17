export default () => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = '0bf5fcce-3e32-4da7-9da7-7cf8b0236b23';

  (function () {
    const d = document;
    const s = d.createElement('script');

    s.src = 'https://client.crisp.chat/l.js';
    s.async = 1;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();
};
