<template>
  <h2 class="font-bold" :class="sizeClass">
    {{ heading }}
    <slot />
  </h2>
</template>

<script lang="ts" setup>
defineProps({
  heading: {
    type: String,
    required: false,
    default: ''
  },
  sizeClass: {
    type: String,
    required: false,
    default: 'text-2xl'
  }
})
</script>
