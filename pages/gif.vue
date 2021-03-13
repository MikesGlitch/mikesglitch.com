<template>
  <div class="gif-container">
    <img v-if="currentGif" :src="currentGif" alt="gif">
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      currentGif: '',
      gifInterval: null
    }
  },

  mounted () {
    this.getGif()
    this.getGifOnInterval()
  },
  beforeDestroy  () {
    clearInterval(this.gifInterval)
  },
  methods: {
    async getGif () {
      const response = await fetch(`${process.env.NUXT_ENV_API_BASE_URL}/gif`).then(res => res.json())
      this.currentGif = response.gif
    },
    getGifOnInterval () {
      this.gifInterval = setInterval(async () => await this.getGif(), 8000)
    }
  }
}
</script>

<style lang="scss" scoped>
.gif-container {
  width: 100%;

  img{
    margin: 0 auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  img {
    height: 100%;
  }
}
</style>
