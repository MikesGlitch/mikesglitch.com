<template>
  <div
    class="modern-card h-full flex flex-col group"
    :class="{ 'cursor-pointer': title || description }"
  >
    <div class="card__tabs">
      <slot name="tabs" />
    </div>
    <div class="card__image">
      <slot name="image" />
      <slot name="image-label" />
    </div>
    <div class="p-6 md:p-8 flex-1 flex flex-col">
      <h5
        v-if="title"
        class="text-xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-3"
      >
        {{ title }}
      </h5>
      <p
        v-if="description"
        class="text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1"
      >
        {{ description }}
      </p>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: undefined,
  },
  description: {
    type: String,
    required: false,
    default: undefined,
  },
});
</script>
