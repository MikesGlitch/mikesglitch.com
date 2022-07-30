<template>
  <button
    class="p-2 border rounded border-white"
    type="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits<{(e: 'click'): void }>()

const onClick = () => emit('click')
</script>
