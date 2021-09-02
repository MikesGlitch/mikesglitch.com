<template>
  <div class="nav__container">
    <nav class="container">
      <NuxtLink class="nav__logo" to="/">
        <span class="nav__logo-start">Mikes</span><span class="nav__logo-end">Glitch</span>
        <!-- <GlitchLogo></GlitchLogo> -->
      </NuxtLink>
      <div class="nav__links">
        <NuxtLink class="nav__link home" to="/">Home</NuxtLink>
        <!-- <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink> -->
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="nav__link" to="/videos">Videos</NuxtLink>
        <!-- <NuxtLink class="nav__link" to="/contact">Contact</NuxtLink> -->
        <div class="nav__link-icons">
          <a
            title="Check out my Github"
            href="https://github.com/mikesglitch"
            target="_blank"
            rel="noopener"
          >
            <IconGithub class="icon" />
          </a>
          <a
            title="Check out my LinkedIn"
            href="https://www.linkedin.com/in/mikesglitch/"
            target="_blank"
            rel="noopener"
          >
            <div class="icon">
              <IconLinkedin />
            </div>
          </a>
          <a title="Toggle light/dark theme">
            <IconThemeSwitch class="icon" :on-toggle="onToggleTheme" :is-light-theme="isLightTheme" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    onToggleTheme: {
      type: Function,
      required: true
    },
    isLightTheme: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return { isOpen: false }
  },
  methods: {
    toggleOpen () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'assets/css/screen-breakpoints';
@use 'assets/css/global/variables';

// util
.py-3 {
  padding-top: variables.$gutter-y;
  padding-bottom: variables.$gutter-y;
}

.light-theme,
.dark-theme {
  color: white;

  svg {
    color: white !important;
    fill: white !important;
  }

  .nav__logo-start {
    color: variables.$dark-theme-logo-start-color;
  }
  .nav__logo-end {
    color: variables.$dark-theme-logo-end-color;
  }

  .nav__container {
    background-color: variables.$dark-theme-body-background-color;
  }

  .nav__link  {
    color: white;

    &:hover {
      color: hotpink;
    }
  }
}

.nav__container {
  @extend .py-3;

  nav {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: space-between;
    word-wrap: unset;
    flex-direction: column;
    height: auto;

    @include screen-breakpoints.tablet {
      flex-direction: row;
      height: 2.5rem;
    }

    .nav__logo {
      height: 100%;
      font-weight: bold;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items:center;
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      @include screen-breakpoints.tablet{
        display: inline-flex;
      }

      .nuxt-link-exact-active {
        color: hotpink;
      }

      .nuxt-link-active {
        &:not(.home) {
          color: hotpink;
        }
      }

      .nav__link {
        font-weight: bold;
        display: flex;
        align-items: center;

        &-icons {
          flex-direction: row;
          align-items: center;
          display: none;

          @include screen-breakpoints.tablet {
            display: flex;
            gap: .5rem;
          }

          a {
            display: flex;

            .icon {
              padding: 0.5rem;
              min-width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
}

</style>
