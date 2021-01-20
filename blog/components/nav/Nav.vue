<template>
  <div class="nav">
    <div class="container">
      <nav class="flex align-middle items-center justify-between h-10">
        <NuxtLink class="nav__link" to="/">
          <h2>Logo here</h2>
        </NuxtLink>
        <div class="hidden md:inline-flex md:flex-grow align-middle items-center pl-6">
          <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
          <NuxtLink class="nav__link" to="/webrtc">Contact me</NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); // multiple shadows for a bit more depth

  &__link {
    // font-bold text-grey-900 hover:text-purple-500 transition transition-color duration-200 flex align-middle items-center pr-5
    font-weight: bold;
  }
}
</style>
