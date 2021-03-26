import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (ctx) => {
  if (process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID) {
    Vue.use(VueGtag, {
      config: {
        id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID
      },
      appName: 'mikesglitch',
      pageTrackerScreenviewEnabled: true,
      enabled: true
    }, ctx.app.router)
  }
}
