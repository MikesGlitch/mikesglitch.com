export default defineNuxtConfig({
  css: ["~/assets/css/global.scss"],

  plugins: [],

  components: true,
  compatibilityDate: "2025-07-20",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image"],

  runtimeConfig: {
    serverGiphyApiKey: "unset",
    serverGoogleApiKey: "unset",
    memcachierServers: "unset",
    memcacheUsername: "unset",
    memcachePassword: "unset",
    sendgridApiKey: "unset",
    githubPat: "unset",
    public: {
      googleAnalyticsId: "unset",
      useClarityAnalytics: false,
      apiBaseUrl: "unset",
      web3formsAccessKey: "unset",
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: false,
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
  },
});
