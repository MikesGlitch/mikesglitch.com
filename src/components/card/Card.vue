<template>
  <div class="bg-gray-light dark:bg-gray-dark h-full flex flex-col" :class="{ 'group': title || description }">
    <div class="card__tabs">
      <slot name="tabs" />
    </div>
    <div class="card__image">
      <slot name="image" />
      <slot name="image-label" />
    </div>
    <div class="p-4 flex-1">
      <h5 v-if="title" class="font-bold group-hover:underline underline-offset-4 group-hover:text-hotpink">
        {{ title }}
      </h5>
      <span v-if="description" class="text-sm">{{ description }}</span>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: undefined
  },
  description: {
    type: String,
    required: false,
    default: undefined
  }
})
</script>
