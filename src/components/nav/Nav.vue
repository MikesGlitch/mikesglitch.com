<template>
  <div class="bg-gray-dark py-3">
    <nav class="container flex flex-wrap flex-col sm:flex-row items-center justify-between text-white">
      <NuxtLink class="text-2xl font-bold nav-logo" to="/">
        <span class="text-white">Mikes</span><span class="text-hotpink">Glitch</span>
      </NuxtLink>
      <div class="flex flex-row flex-wrap gap-6 items-center">
        <NuxtLink class="hover:text-hotpink hover:underline hover:underline-offset-4" to="/projects">
          Projects
        </NuxtLink>
        <NuxtLink class="hover:text-hotpink hover:underline hover:underline-offset-4" to="/blog">
          Blog
        </NuxtLink>
        <NuxtLink class="hover:text-hotpink hover:underline hover:underline-offset-4" to="/videos">
          Videos
        </NuxtLink>
        <div class="hidden sm:flex flex-row gap-6 items-center">
          <NavExternalLink title="Check out my GitHub" href="https://github.com/mikesglitch" text="GitHub">
            <template #icon>
              <IconGithub />
            </template>
          </NavExternalLink>
          <NavExternalLink title="Check out my LinkedIn" href="https://www.linkedin.com/in/mikesglitch" text="LinkedIn">
            <template #icon>
              <IconLinkedin class="fill-white" />
            </template>
          </NavExternalLink>
          <ThemeSwitch :is-light-theme="isLightTheme" @toggle-theme="onToggleTheme" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isLightTheme: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emit = defineEmits<{(e: 'toggle-theme'): void }>()

const onToggleTheme = () => emit('toggle-theme')
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  &:not(.nav-logo) {
    @apply underline underline-offset-4 text-hotpink;

  }
}
</style>
