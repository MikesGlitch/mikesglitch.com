<template>
  <div class="info-box">
    <p v-if="timeToRead">
      Time to read: {{ timeToRead }}
    </p>
    {{ counter }}
    <p>
      <slot name="info-box__content">
        default
      </slot>
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
  },
  data () {
    return {
      counter: 0
    }
  },
  mounted () {
    setInterval(() => {
      this.counter++
    }, 1000)
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
