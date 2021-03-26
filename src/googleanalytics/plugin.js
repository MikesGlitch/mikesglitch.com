import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (ctx) => {
  let enableAnalytics = false
  if (process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID) {
    enableAnalytics = true
  }

  if (enableAnalytics) {
    Vue.use(VueGtag, {
      config: {
        id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID
      },
      pageTrackerScreenviewEnabled: true,
      enabled: true
    }, ctx.app.router)
  }
}
