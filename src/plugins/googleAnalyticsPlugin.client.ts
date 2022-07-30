import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  if (config.public.googleAnalyticsId) {
    const router = useRouter()

    nuxtApp.vueApp.use(VueGtag, {
      config: {
        id: config.public.googleAnalyticsId
      },
      appName: 'mikesglitch',
      pageTrackerScreenviewEnabled: true,
      enabled: true
    }, router)
  }
})
