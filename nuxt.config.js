import pkg from './package'

/* eslint-disable-next-line */
const path = require('path');

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', sizes: 'any', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300,700&display=swap'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/gsap-scrollmagic', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias['~ScrollMagic'] = path.join(
        process.cwd(),
        'node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
      )
      config.resolve.alias['~animation.gsap'] = path.join(
        process.cwd(),
        'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
      )
    }
  },
  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
