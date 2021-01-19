<template>
  <NuxtLink class="font-bold text-grey-900 hover:text-purple-500 transition transition-color duration-200 flex align-middle items-center pr-5" :to="to">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
