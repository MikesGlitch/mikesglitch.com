<template>
  <div class="bg-gray-dark py-3">
    <nav class="container flex flex-col sm:flex-row items-center justify-between text-white">
      <div class="flex flex-col md:flex-row gap-6 mx-auto md:mx-0">
        <NuxtLink class="text-2xl font-bold nav-logo text-center md:mr-4" to="/">
          <span class="text-white">Mikes</span><span class="text-hotpink">Glitch</span>
        </NuxtLink>
        <div class="flex flex-row flex-wrap gap-6 items-center w-full">
          <NuxtLink class="hover:text-hotpink hover:underline hover:underline-offset-4" to="/projects">
            Projects
          </NuxtLink>
          <NuxtLink class="hover:text-hotpink hover:underline hover:underline-offset-4" to="/blog">
            Blog
          </NuxtLink>
          <NuxtLink class="hover:text-hotpink hover:underline hover:underline-offset-4" to="/videos">
            Videos
          </NuxtLink>
          <div class="hidden xl:flex flex-row gap-6">
            <NavExternalLink title="Check out my GitHub" href="https://github.com/mikesglitch" text="GitHub">
              <template #icon>
                <IconGithub class="min-w-[1rem]" />
              </template>
            </NavExternalLink>
            <NavExternalLink title="Check out my LinkedIn" href="https://www.linkedin.com/in/mikesglitch" text="LinkedIn">
              <template #icon>
                <IconLinkedin class="fill-white min-w-[1rem]" />
              </template>
            </NavExternalLink>
          </div>
        </div>
      </div>
      <div class="hidden md:flex items-center">
        <ThemeSwitch :is-light-theme="isLightTheme" @toggle-theme="onToggleTheme" />
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
