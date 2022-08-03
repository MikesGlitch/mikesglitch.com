<template>
  <div>
    <!-- Additional div wrapper for classes to take effect on the element. Useful for mobile classes hidden sm:block.
    This is because NuxtLink doesn't take a class name when slotting -->
    <NuxtLink v-slot="{ navigate }" custom :to="to">
      <Button :title="title" :label="text" @click="navigate" />
    </NuxtLink>
  </div>
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
