<template>
<!--
      I REALLY DON'T WANT A COLLAPSIBLE HAMBURGER MENU - THEY'RE BORING.  WHY NOT JUST SIMPLIFY THE MENUS?
      COULD REMOVE THE LOGO OR ADD IT ABOVE THE MENU ON MOBILE?

      https://codepen.io/DirkWeber/pen/ArFvk OR  https://css-tricks.com/glitch-effect-text-images-svg/
      -->
  <div class="nav__container">
    <nav class="container">
      <NuxtLink class="nav__logo" to="/">
        <span class="nav__logo-start">Mikes</span><span class="nav__logo-end">Glitch</span>
      </NuxtLink>
      <button @click="toggleOpen" class="nav__menu-toggle" aria-expanded="Open">
            <span class="sr-only">Open main menu</span>

            <!-- Icon when menu is closed. -->
            <svg :class="{ 'nav__menu-toggle--hidden': isOpen }" description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>

            <!-- Icon when menu is open. -->
            <svg :class="{ 'nav__menu-toggle--hidden': !isOpen }" description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
      </button>
      <div :class="{'nav__links': !isOpen, 'nav__links--show-mobile': isOpen }">
        <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="nav__link" to="/contact">Contact</NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return { isOpen: false }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/screen-breakpoints';

// util
.py-3 {
  padding-top: var(--gutter-y, .75rem);
  padding-bottom: var(--gutter-y, .75rem);
}

.nav__container {
  @extend .py-3;
  margin-bottom: var(--gutter-y, .75rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); // multiple shadows for a bit more depth

  nav {
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;

    .nav__menu-toggle{
      display: flex;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      @include tablet {
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

      &-end {
        color: hotpink;
      }
    }

    .nav__links {
      display: none;

      @include tablet{
        display: inline-flex;
      }

      &--show-mobile {
        display: block;
      }

      align-items: center;
      padding-left: 1.5rem;

      .nav__link {
        font-weight: bold;
        color: black;
        display: flex;
        align-items: center;
        padding-left: 2.5rem;
        transition-duration: .2s;
        transition-property: color;

        &:hover {
          color: purple;
        }
      }
    }
  }
}
</style>
