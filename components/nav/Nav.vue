<template>
  <div class="nav__container">
    <nav class="container">
      <NuxtLink class="nav__logo" to="/">
        <span class="nav__logo-start">Mikes</span><span class="nav__logo-end">Glitch</span>
      </NuxtLink>
      <div class="nav__links">
        <NuxtLink class="nav__link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="nav__link" to="/contact">Contact</NuxtLink>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
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
      display: inline-flex;
      // flex-grow: 1;
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
