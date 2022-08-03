<template>
  <NuxtLink :to="to" :title="title" :external="false" class="group inline-flex gap-2 items-center shrink">
    <div class="group-hover:text-hotpink group-hover:underline group-hover:underline-offset-4">
      <span v-if="text" class="group-hover:text-hotpink group-hover:underline group-hover:underline-offset-4">{{ text }}</span>
      <slot />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  to: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false,
    default: undefined
  }
})

</script>
