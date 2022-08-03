<template>
  <NuxtLink
    :to="href"
    :title="title"
    :external="true"
    target="_blank"
    rel="noopener"
    class="group inline-flex gap-2 items-center"
  >
    <slot name="icon" />
    <span class="group-hover:text-hotpink group-hover:underline group-hover:underline-offset-4">{{ text }}</span>
    <IconExternalLink class="h-4 w-4 text-auto min-w-[1rem] group-hover:text-hotpink" />
  </NuxtLink>
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
