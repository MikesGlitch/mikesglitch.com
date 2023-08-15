<template>
  <button
    class="py-1.5 px-4 border rounded focus:outline-none dark:border-white active:dark:border-hotpink focus:dark:border-hotpink active:border-hotpink focus:border-hotpink hover:border-hotpink dark:hover:border-hotpink dark:bg-gray-dark bg-gray-dark dark:hover:bg-gray-medium text-white"
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
