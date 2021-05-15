<template>
  <div class="nav__container">
    <nav class="container">
      <NuxtLink class="nav__logo" to="/">
        <span class="nav__logo-start">Mikes</span><span class="nav__logo-end">Glitch</span>
        <!-- <GlitchLogo></GlitchLogo> -->
      </NuxtLink>
      <button class="nav__menu-toggle" aria-expanded="Open" @click="toggleOpen">
        <span class="sr-only">Open main menu</span>

        <!-- Icon when menu is closed. -->
        <svg
          :class="{ 'nav__menu-toggle--hidden': isOpen }"
          description="Heroicon name: outline/menu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>

        <!-- Icon when menu is open. -->
        <svg
          :class="{ 'nav__menu-toggle--hidden': !isOpen }"
          description="Heroicon name: outline/x"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div :class="{'nav__links': !isOpen, 'nav__links--show-mobile': isOpen }">
        <NuxtLink class="nav__link home" to="/">Home</NuxtLink>
        <!-- <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink> -->
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
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
            href="https://www.linkedin.com/in/mjclark91/"
            target="_blank"
            rel="noopener"
          >
            <div class="icon">
              <IconLinkedin />
            </div>
          </a>
          <a title="Toggle light/dark theme" @click="onToggleTheme">
            <IconThemeSwitch class="icon" :is-light-theme="isLightTheme" />
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
// util
.py-3 {
  padding-top: var(--gutter-y, .75rem);
  padding-bottom: var(--gutter-y, .75rem);
}

.light-theme {
  .nav__logo-start {
    color: var(--light-theme-logo-start-color);
  }
  .nav__logo-end {
    color: var(--light-theme-logo-end-color);
  }

  .nav__container {
    background-color: var(--light-theme-secondary-background-color);
  }
}
.dark-theme {
  .nav__logo-start {
    color: var(--dark-theme-logo-start-color);
  }
  .nav__logo-end {
    color: var(--dark-theme-logo-end-color);
  }

  .nav__container {
    background-color: var(--dark-theme-secondary-background-color);
  }
}

.nav__container {
  @extend .py-3;
  // margin-bottom: var(--gutter-y, .75rem);
  // box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); // multiple shadows for a bit more depth

  nav {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
    word-wrap: unset;

    .nav__menu-toggle{
      display: flex;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      @include screen-breakpoints.tablet {
        display: none;
      }

      &--hidden {
        display: none;
      }
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
      display: none;

      @include screen-breakpoints.tablet{
        display: inline-flex;
      }

      &--show-mobile {
        display: block;
      }

      align-items: center;
      padding-left: 1.5rem;

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
        padding-left: 2.5rem;

        &-icons {
          display: flex;
          flex-direction: row;
          align-items: center;

          a {
            display: flex;

            .icon {
              margin-left: 1rem;
              border-radius: 50%;
              padding: 0.5rem;
              width: 25px;
              height: 25px;
            }

            :hover {
              background-color: var('--hover-background-color');
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
}

</style>
