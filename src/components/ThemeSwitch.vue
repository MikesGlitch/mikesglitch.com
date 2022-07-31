<template>
  <div>
    <ClientOnly>
      <!-- Client-only because the value of the themes are set in onmounted (client side).
    There will always be a mismatch between client and server render -->
      <button
        class="p-2 border rounded border-white hover:border-hotpink bg-gray-dark hover:bg-gray-medium-default text-white"
        type="button"
        @click="onToggle"
      >
        <div class="flex gap-2 align-middle justify-center">
          <IconMoon class="w-4 h-4 my-auto fill-yellow" />
          <span style="width: 5ch">{{ isLightTheme ? "Light" : "Dark" }}</span>
        </div>
      </button>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isLightTheme: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emit = defineEmits<{(e: 'toggle-theme'): void }>()

const onToggle = () => emit('toggle-theme')
</script>
