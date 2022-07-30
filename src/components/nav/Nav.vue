<template>
  <div class="bg-gray-dark py-3">
    <nav class="container flex flex-col sm:flex-row items-center justify-between">
      <NuxtLink class="text-xl" to="/">
        <span class="text-white">Mikes</span><span class="text-hotpink">Glitch</span>
      </NuxtLink>
      <div class="flex flex-row gap-6 items-center">
        <NuxtLink class="text-white hover:text-hotpink" to="/projects">
          Projects
        </NuxtLink>
        <NuxtLink class="text-white hover:text-hotpink" to="/blog">
          Blog
        </NuxtLink>
        <NuxtLink class="text-white hover:text-hotpink" to="/videos">
          Videos
        </NuxtLink>
        <div class="hidden sm:flex flex-row gap-6 items-center">
          <a
            title="Check out my Github"
            href="https://github.com/mikesglitch"
            target="_blank"
            rel="noopener"
          >
            <IconGithub class="text-white" />
          </a>
          <a
            title="Check out my LinkedIn"
            href="https://www.linkedin.com/in/mikesglitch/"
            target="_blank"
            rel="noopener"
          >
            <IconLinkedin class="fill-white" />
          </a>
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
