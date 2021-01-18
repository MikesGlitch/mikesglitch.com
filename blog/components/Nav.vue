<template>
  <nav class="flex align-middle items-center justify-between h-10">
    <NuxtLink to="/">
      <h2>Logo here</h2>
    </NuxtLink>
    <button class="md:hidden cursor-pointer" aria-label="Open menu">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        class="svg-inline--fa fa-bars fa-w-14 fa-2x h-4 mr-2"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        />
      </svg>
    </button>
    <div class="hidden md:inline-flex md:flex-grow align-middle items-center pl-6">
      <div>
        <NuxtLink class="font-bold text-indigo-700 hover:text-indigo-900 transition transition-color duration-200 flex align-middle items-center cursor-pointer" to="/blog">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="comment-lines"
            class="svg-inline--fa fa-comment-lines fa-w-16 fa-fw h-4 mr-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zm32 264c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm96-96c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"
            /></svg><span>Blog</span>
        </NuxtLink>
      </div>
      <div class="pl-6">
        <NuxtLink class="font-bold text-indigo-700 hover:text-indigo-900 transition transition-color duration-200 flex align-middle items-center cursor-pointer" to="/webrtc">
          <span>Contact me</span>
        </NuxtLink>
      </div>
    </div>
    <!-- <div class="hidden md:inline-flex">
      <ul class="flex align-middle items-center">
        <li>
          <a
            class="font-bold text-indigo-700 hover:text-indigo-900 transition transition-color duration-200 flex align-middle items-center mr-6 cursor-pointer"
            href="/login"
          ><span>Login</span></a>
        </li>
        <li>
          <a
            class="font-bold text-indigo-700 hover:text-indigo-900 transition transition-color duration-200 flex align-middle items-center cursor-pointer"
            href="/register"
          ><span>Register</span></a>
        </li>
      </ul>
    </div> -->
  </nav>
  <!-- <nav class="nav">
    <NuxtLink class="nav__link nav__logo" to="/">
      <h2>
        Logo here
      </h2>
    </NuxtLink>
    <NuxtLink class="nav__link" to="/blog">Blog</NuxtLink>
    <NuxtLink class="nav__link" to="/webrtc">Contact me</NuxtLink>
    <div class="nav__search">
      <label for="navSearch">Search</label>
      <input id="navSearch" type="search" name="search" aria-label="Search through site content">
    </div>
  </nav> -->
</template>

<style lang="scss">
// .nav {
//   display: flex;

//   &__logo {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//   }

//   &__link {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     text-decoration: none;

//     &--active {
//       @extend .nav__link;
//     }

//     &:not(.nuxt-link-active) {
//       &:hover {
//         border-bottom: hotpink 3px solid;
//       }
//     }
//   }

//   &__search {
//     display: flex;
//     margin-left: auto;

//     label {
//       display: flex;
//       align-items: center;
//       margin-right: 10px;
//     }
//   }
// }
</style>
