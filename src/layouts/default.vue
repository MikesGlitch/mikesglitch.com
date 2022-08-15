<template>
  <div v-show="theme !== undefined" class="h-full flex flex-col font-body pt-20 md:pt-[58px]">
    <Nav :is-light-theme="theme === 'light'" class="fixed h-20 md:h-[58px] top-0 w-full z-10" @toggle-theme="onToggleTheme" />
    <div class="flex-1 p-0 pb-3 w-full bg-white text-gray-medium dark:bg-gray-medium-2 dark:text-white">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const theme = ref<'light' | 'dark' | undefined>(undefined)

const toggleThemeClasses = (themeToChangeto: 'light' | 'dark') => {
  document.documentElement.classList.remove('dark')
  if (themeToChangeto === 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.style.colorScheme = 'light'
  }

  theme.value = themeToChangeto
}

onMounted(() => {
  const preferredTheme = window.localStorage.getItem('theme-preference')
  if (preferredTheme) {
    switch (preferredTheme) {
      case 'light':
        toggleThemeClasses('light')
        break
      case 'dark':
        toggleThemeClasses('dark')
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
    toggleThemeClasses('dark')
  } else {
    toggleThemeClasses('light')
  }

  if (hasThemeSupport) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const isDarkTheme = e.matches
      const newtheme = isDarkTheme ? 'dark' : 'light'
      toggleThemeClasses(newtheme)
      theme.value = newtheme
    })
  }

  window.localStorage.setItem('theme-preference', 'auto')
}

const onToggleTheme = () => {
  if (theme.value === 'dark') {
    toggleThemeClasses('light')
    window.localStorage.setItem('theme-preference', 'light')
  } else {
    toggleThemeClasses('dark')
    window.localStorage.setItem('theme-preference', 'dark')
  }
}
</script>
