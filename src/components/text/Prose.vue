<template>
  <!-- prose-a:no-underline prose-a:hover:underline -->
  <div class="prose dark:prose-invert max-w-none prose-a:hover:text-hotpink prose-a:text-hotpink prose-a:underline-offset-4">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
// There's an issue with prose links so having to style manually https://github.com/tailwindlabs/tailwindcss-typography/issues/278
.prose :deep(a){
  @apply no-underline;

  &:hover {
    @apply underline;
  }
}
</style>
