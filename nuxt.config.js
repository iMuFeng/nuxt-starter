module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WTS Web' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#157efb' },

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'nuxt-i18n'
  ],

  plugins: [
    {
      src: '~/plugins/axios',
      ssr: true
    },
    {
      src: '~/plugins/element-ui',
      ssr: true
    }
  ],

  router: {
    middleware: ['auth']
  },

  axios: {
    debug: true,
    proxy: true
  },

  proxy: {
    '/api/': { target: 'http://127.0.0.1:8080', pathRewrite: { '^/api/': '' }}
  },

  i18n: {
    locales: [{
      code: 'en',
      iso: 'en-US',
      name: 'English'
    }, {
      code: 'zh-cn',
      iso: 'zh-CN',
      name: '简体中文'
    }],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: require('./locales')
    }
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}

