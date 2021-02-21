import Vue from 'vue'
import VueGtag from "vue-gtag";

export default async (ctx, inject) => {
  console.log('in plugin')
  const runtimeConfig = ctx.$config && ctx.$config.googleAnalytics || {}
  const moduleOptions = <%= serialize(options) %>
  const options = {...moduleOptions, ...runtimeConfig}

  if (typeof options.asyncID === 'function') {
    options.id = await options.asyncID(ctx)
  }

  Vue.use(VueGtag, {
    config: {
      ...options
    }}, ctx.app.router)
}
