<template>
  <div class="card">
    <div class="card__tabs">
      <slot name="tabs" />
    </div>
    <div class="card__image">
      <slot name="image" />
    </div>
    <div class="card__content">
      <h5 class="card__title">{{ title }}</h5>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 100%;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  &__title {
    margin: 0;
    font-size: 1.25rem;
  }

  &__content {
    padding: 1rem;
  }
}
</style>
