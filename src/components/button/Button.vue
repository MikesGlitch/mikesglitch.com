<template>
  <button
    class="py-1.5 px-4 border rounded dark:border-white hover:border-hotpink dark:hover:border-hotpink dark:bg-gray-dark bg-white dark:hover:bg-gray-medium"
    type="button"
    @click="onClick"
  >
    <span v-if="label">
      {{ label }}
    </span>
    <slot />
  </button>
</template>

<script lang="ts" setup>

defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  }
})

const emit = defineEmits<{(e: 'click'): void }>()

const onClick = () => emit('click')
</script>
