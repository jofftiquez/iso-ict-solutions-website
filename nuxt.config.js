import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  env: {
    FIREBASE_TOKEN: process.env.FIREBASE_TOKEN,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    NODE_ENV: process.env.NODE_ENV,
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: 'Sample Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-media-query-mixin.js',
    '~/plugins/is-mobile.js',
    { src: '~plugins/crisp.js', mode: 'client' },
    { src: '~/plugins/vue-analytics.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['vue-scrollto/nuxt', { duration: 300 }],
    // { src: '~/plugins/ga.js', mode: 'client' },
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        // NOTE: These colors are MYCURE defaults
        light: {
          primary: '#009688',
          secondary: '#2196f3',
          accent: '#ffeb3b',
          error: '#f44336',
          warning: '#ffc107',
          info: '#03a9f4',
          success: '#4caf50'
        },
        dark: {
          primary: '#2e9fdf',
          accent: '#7fad33',
          secondary: '#616161',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#ff5252',
          success: colors.green.accent3,
        },
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
