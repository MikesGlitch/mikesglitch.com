<template>
    <button class="button" type="button" @click="onClick">
      <slot></slot>
    </button>
</template>

<script lang="ts" setup>
const emit = defineEmits<{(e: 'click'): void}>()

const onClick = () => emit('click')
</script>
<!-- 
<style scoped>
.button {
  background: var(--gray-8);
  border-color: var(--gray-7);
  color: var(--gray-0);
  margin-left: auto;
  padding: 0.4rem 0.5rem;
}
</style> -->
