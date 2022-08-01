<template>
  <h2 class="text-xl font-bold">
    {{ heading }}
  </h2>
</template>

<script lang="ts" setup>
defineProps({
  heading: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
