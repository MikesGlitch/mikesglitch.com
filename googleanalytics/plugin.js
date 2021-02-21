import Vue from 'vue'
import VueGtag from "vue-gtag";

export default async (ctx, inject) => {
  const runtimeConfig = ctx.$config && ctx.$config.googleAnalytics || {}
  const moduleOptions = <%= serialize(options) %>
  const options = {...moduleOptions, ...runtimeConfig}

  Vue.use(VueGtag, {
    config: {
      ...options
    },
    enabled: !ctx.isDev
  }, ctx.app.router)
}
