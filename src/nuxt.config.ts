export default defineNuxtConfig({
  css: [
    '~/assets/css/global.scss'
  ],

  plugins: [
  ],

  components: true,

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
    githubPat: 'unset',
    public: {
      googleAnalyticsId: 'unset',
      apiBaseUrl: 'unset',
      web3formsAccessKey: 'unset'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: false
  }
})
