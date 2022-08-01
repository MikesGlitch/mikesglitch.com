import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig> {
  scrollBehavior () {
    return { top: 0 }
  }
}
