<template>
  <nav class="nav">
    <NuxtLink class="nav__link nav__logo" to="/">
      <h2>
        Logo here
      </h2>
    </NuxtLink>
    <NuxtLink class="nav__link" to="/blog">
      Blog
    </NuxtLink>
    <NuxtLink class="nav__link" to="/webrtc">
      Contact me
    </NuxtLink>
    <div class="nav__search">
      <label for="navSearch">
        Search
      </label>
      <input id="navSearch" type="search" name="search" aria-label="Search through site content">
    </div>
  </nav>
</template>

<style lang="scss">
.nav {
  display: flex;

  &__logo {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;

    &--active {
      @extend .nav__link;
    }

    &:not(.nuxt-link-active) {
      &:hover {
        border-bottom: hotpink 3px solid;
      }
    }
  }

  &__search {
    display: flex;
    margin-left: auto;

    label {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
}
</style>
