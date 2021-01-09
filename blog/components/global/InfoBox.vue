<template>
  <div class="bg-blue-500 text-white p-4 mb-4">
    <p v-if="timeToRead">
      Time to read: {{ timeToRead }}
    </p>
    {{ counter }}
    <p>
      <slot name="info-box">
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
