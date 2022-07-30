import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'server',

  // render: {
  //   fallback: {
  //     dist: false
  //   }
  // },

  css: [
    '~/assets/css/global.scss'
  ],

  plugins: [
  ],

  components: true,

  // content: {
  //   liveEdit: false
  // },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    serverGiphyApiKey: 'unset',
    serverGoogleApiKey: 'unset',
    memcachierServers: 'unset',
    memcacheUsername: 'unset',
    memcachePassword: 'unset',
    sendgridApiKey: 'unset',
    public: {
      googleAnalyticsId: 'unset',
      apiBaseUrl: 'unset'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: false
  }
})
