<template>
  <div class="info-box">
    <p v-if="timeToRead">
      Time to read: {{ timeToRead }}
    </p>
    <p>
      <slot name="info-box__content" />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    timeToRead: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.info-box {
  background-color: rgba(59, 130, 246, 1);
  color: white;
  padding: 1rem;
}
</style>
