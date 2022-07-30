<template>
  <div class="gif-container">
    <img v-if="currentGif" :src="currentGif" alt="gif">
  </div>
</template>

<script setup lang="ts">
const currentGif = ref('')
const gifInterval = ref(null)

onMounted(() => {
  getGif()
  getGifOnInterval()
})

onBeforeUnmount(() => {
  clearInterval(gifInterval.value)
})

const config = useRuntimeConfig()
const getGif = async () => {
  const response = await $fetch<{ gif: string }>(`${config.public.apiBaseUrl}/gif`)
  currentGif.value = response.gif
}
const getGifOnInterval = () => {
  gifInterval.value = setInterval(async () => await getGif(), 8000)
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
