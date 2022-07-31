<template>
  <a
    :title="title"
    :href="href"
    target="_blank"
    rel="noopener"
    class="flex gap-2 items-center hover:text-hotpink hover:underline hover:underline-offset-4"
  >
    <slot name="icon" />
    <span>{{ text }}</span>
    <IconExternalLink class="h-4 w-4 text-white" />
  </a>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

</script>
