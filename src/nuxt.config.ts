import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'server',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.' },
      { charset: 'utf-8' },

      // Facebook
      { property: 'og:url', content: 'https://mikesglitch.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps' },
      { property: 'og:description', content: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.' },
      { property: 'og:image', content: 'https://mikesglitch.com/open-graph-image.png' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:domain', content: 'mikesglitch.com' },
      { name: 'twitter:url', content: 'https://mikesglitch.com/' },
      { name: 'twitter:title', content: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps' },
      { name: 'twitter:description', content: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.' },
      { name: 'twitter:image', content: 'https://mikesglitch.com/open-graph-image.png' },

      // Microsoft
      { name: 'msapplication-TileColor', content: '#ffd800' },
      { name: 'theme-color', content: '#ffd800' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: 'https://mikesglitch.com/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&amp;display=swap' },

      // favicons etc
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffd800' }
    ]
  },

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
