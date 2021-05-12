export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'MikesGlitch.com | Build stuff, learn things, share the XP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Michael is a software developer focused on the delivery of highly scalable, performance and tested applications.' },
      { charset: 'utf-8' },

      // Facebook
      { property: 'og:url', content: 'https://mikesglitch.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'MikesGlitch.com | Build apps, learn, share the XP' },
      { property: 'og:description', content: 'Michael is a software developer focused on the delivery of highly scalable, performance and tested applications.' },
      { property: 'og:image', content: 'https://mikesglitch.com/open-graph-image.png' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:domain', content: 'mikesglitch.com' },
      { name: 'twitter:url', content: 'https://mikesglitch.com/' },
      { name: 'twitter:title', content: 'MikesGlitch.com | Build apps, learn, share the XP' },
      { name: 'twitter:description', content: 'Michael is a software developer focused on the delivery of highly scalable, performance and tested applications.' },
      { name: 'twitter:image', content: 'https://mikesglitch.com/open-graph-image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&amp;display=swap' }
    ]
  },

  render: {
    fallback: false
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  content: {
    liveEdit: false
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '~/googleanalytics/module.js'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content'
  ],

  // Server Middleware
  serverMiddleware: {
    '/api': '~/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: false
  }
}
