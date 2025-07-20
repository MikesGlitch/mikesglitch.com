<template>
  <div
    class="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200/50 dark:border-neutral-700/50"
  >
    <nav class="container mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink class="nav-logo group" to="/">
        <div class="flex items-center gap-2">
          <span class="text-xl font-bold">
            <span
              class="text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
              >Mikes</span
            ><span class="gradient-text">Glitch</span>
          </span>
        </div>
      </NuxtLink>

      <!-- Navigation Links (Hidden for now, can be uncommented later) -->
      <!-- <div class="hidden md:flex items-center gap-8">
        <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
        <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
        <NuxtLink to="/videos" class="nav-link">Videos</NuxtLink>
      </div> -->

      <!-- Right Side -->
      <div class="flex items-center gap-4">
        <!-- Social Links -->
        <div class="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/mikesglitch"
            title="GitHub"
            target="_blank"
            rel="noopener"
            class="p-2 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-yellow-400 transition-colors"
          >
            <IconGithub class="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikesglitch"
            title="LinkedIn"
            target="_blank"
            rel="noopener"
            class="p-2 text-neutral-700 dark:text-neutral-200 hover:text-[#0a66c2] dark:hover:text-yellow-400 transition-colors"
          >
            <IconLinkedin class="w-5 h-5" />
          </a>
        </div>

        <!-- Theme Toggle -->
        <ThemeSwitch
          :is-light-theme="isLightTheme"
          @toggle-theme="onToggleTheme"
        />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isLightTheme: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emit = defineEmits<{ (e: "toggle-theme"): void }>();

const onToggleTheme = () => emit("toggle-theme");
</script>

<style lang="scss" scoped>
.nav-link {
  @apply text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors;
}

.router-link-exact-active.nav-link {
  @apply text-primary-600 dark:text-primary-400;
}
</style>
