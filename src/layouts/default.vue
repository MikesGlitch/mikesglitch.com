<template>
  <div v-show="theme !== undefined" class="h-full flex flex-col font-body">
    <Nav :is-light-theme="theme === 'light'" @toggle-theme="onToggleTheme" />
    <div class="flex-1 p-0 pb-3 w-full bg-white text-gray-medium dark:bg-gray-medium-2 dark:text-white">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const theme = ref<'light' | 'dark' | undefined>(undefined)

onMounted(() => {
  const preferredTheme = window.localStorage.getItem('theme-preference')
  if (preferredTheme) {
    switch (preferredTheme) {
      case 'light':
        document.documentElement.classList.remove('dark')
        theme.value = 'light'
        break
      case 'dark':
        document.documentElement.classList.add('dark')
        theme.value = 'dark'
        break
      case 'auto':
        setupAutoTheme()
        break
    }
  } else {
    setupAutoTheme()
  }
})
const setupAutoTheme = () => {
  const hasThemeSupport = window.matchMedia

  if (hasThemeSupport && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
    theme.value = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    theme.value = 'light'
  }

  if (hasThemeSupport) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const isDarkTheme = e.matches
      theme.value = isDarkTheme ? 'dark' : 'light'
    })
  }

  window.localStorage.setItem('theme-preference', 'auto')
}

const onToggleTheme = () => {
  if (theme.value === 'dark') {
    document.documentElement.classList.remove('dark')
    window.localStorage.setItem('theme-preference', 'light')
    theme.value = 'light'
  } else {
    document.documentElement.classList.add('dark')
    window.localStorage.setItem('theme-preference', 'dark')
    theme.value = 'dark'
  }
}
</script>
