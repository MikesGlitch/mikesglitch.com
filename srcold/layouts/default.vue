<template>
  <div class="default-layout" :class="{ 'dark-theme': !isLightTheme, 'light-theme': isLightTheme }">
    <Nav :on-toggle-theme="onToggleTheme" :is-light-theme="isLightTheme" />
    <div class="container-wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLightTheme: true
    }
  },
  mounted () {
    // const hasThemeSupport = window.matchMedia
    const preferredTheme = window.localStorage.getItem('theme-preference')
    if (preferredTheme) {
      switch (preferredTheme) {
        case 'light':
          this.isLightTheme = true
          break
        case 'dark':
          this.isLightTheme = false
          break
        case 'auto':
          this.setupAutoTheme()
          break
      }
    } else {
      this.setupAutoTheme()
    }
  },
  methods: {
    setupAutoTheme () {
      const hasThemeSupport = window.matchMedia

      if (hasThemeSupport && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.isLightTheme = false
      } else {
        this.isLightTheme = true
      }

      if (hasThemeSupport) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          const isDarkTheme = e.matches
          this.isLightTheme = !isDarkTheme
        })
      }

      window.localStorage.setItem('theme-preference', 'auto')
    },
    onToggleTheme () {
      this.isLightTheme = !this.isLightTheme

      if (this.isLightTheme) {
        window.localStorage.setItem('theme-preference', 'light')
      } else {
        window.localStorage.setItem('theme-preference', 'dark')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use './../assets/css/global/variables';

.default-layout {
  &.dark-theme {
    background-color: variables.$dark-theme-body-background-color;

    .container-wrapper {
      background-color: variables.$dark-theme-body-background-color;
    }
  }

  &.light-theme {
    background-color: variables.$light-theme-body-background-color;

    .container-wrapper {
      background-color: variables.$light-theme-body-background-color;
    }
  }

  height: 100%;
  display: flex;
  flex-direction: column;

  .container-wrapper {
      flex: 1;
      padding: 0;
      padding-bottom: variables.$gutter-y;
      width: 100%;
  }
}
</style>
