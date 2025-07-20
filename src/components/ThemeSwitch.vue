<template>
  <div>
    <ClientOnly>
      <button
        class="relative inline-flex items-center justify-center w-12 h-12 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 rounded-xl transition-all duration-300 group"
        type="button"
        @click="onToggle"
        :title="isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'"
      >
        <!-- Sun Icon -->
        <svg
          v-if="isLightTheme"
          class="w-5 h-5 text-yellow-600 group-hover:text-yellow-700 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>

        <!-- Moon Icon -->
        <svg
          v-else
          class="w-5 h-5 text-white dark:text-yellow-400 group-hover:text-gray-100 dark:group-hover:text-yellow-300 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      </button>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isLightTheme: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emit = defineEmits<{ (e: "toggle-theme"): void }>();

const onToggle = () => emit("toggle-theme");
</script>
