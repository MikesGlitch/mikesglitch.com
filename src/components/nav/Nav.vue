<template>
  <div class="bg-gray-dark py-2">
    <nav class="container h-full flex flex-col sm:flex-row items-center justify-between text-white">
      <div class="flex flex-col md:flex-row gap-2 sm:gap-6 mx-auto md:mx-0">
        <NuxtLink class="text-2xl font-bold nav-logo text-center md:mr-4" to="/">
          <span class="text-white">Mikes</span><span class="text-hotpink">Glitch</span>
        </NuxtLink>
        <div class="flex flex-row flex-wrap gap-6 items-center w-full">
          <LinkInternal to="/projects" text="Projects" />
          <LinkInternal to="/blog" text="Blog" />
          <LinkInternal to="/videos" text="Videos" />
          <div class="hidden xl:flex flex-row gap-6">
            <LinkExternal title="Check out my GitHub" href="https://github.com/mikesglitch" text="GitHub">
              <template #icon>
                <IconGithub class="min-w-[1rem]" />
              </template>
            </LinkExternal>
            <LinkExternal title="Check out my LinkedIn" href="https://www.linkedin.com/in/mikesglitch" text="LinkedIn">
              <template #icon>
                <IconLinkedin class="fill-white min-w-[1rem]" />
              </template>
            </LinkExternal>
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
