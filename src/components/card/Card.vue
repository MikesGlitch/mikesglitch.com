<template>
  <div class="bg-gray-light dark:bg-gray-medium-default hover:text-hotpink h-full">
    <div class="card__tabs">
      <slot name="tabs" />
    </div>
    <div class="card__image">
      <slot name="image" />
      <slot name="image-label" />
    </div>
    <div class="p-4">
      <h5 class="font-bold">
        {{ title }}
      </h5>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
