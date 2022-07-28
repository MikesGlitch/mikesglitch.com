import { Vue } from 'vue'
import VueGtag from 'vue-gtag'

export default (ctx) => {
  const config = useRuntimeConfig()
  if (config.public.googleAnalyticsId) {
    Vue.use(VueGtag, {
      config: {
        id: config.public.googleAnalyticsId
      },
      appName: 'mikesglitch',
      pageTrackerScreenviewEnabled: true,
      enabled: true
    }, ctx.app.router)
  }
}
