<template>
  <div class="latest-videos container">
    <h1>Latest videos</h1>
    <div v-if="videoToPlay && latestVideos" class="recent-video">
      <div class="recent-video__player">
        <iframe
          v-if="videoToPlay"
          :src="videoToPlay"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <div class="recent-video__info">
        <!-- <VideoList
          :videos="latestVideos"
          :current-video="videoToPlay"
          :on-change-video="onChangeVideo"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData () {
    const response = await fetch(
      `${process.env.NUXT_ENV_API_BASE_URL}/youtube-videos`
    )
      .then(res => res.json())
      .catch(() => null)
    return {
      videoToPlay: response?.latestVideoEmbedIframeUrl,
      latestVideos: response?.latestVideos
    }
  },
  methods: {
    onChangeVideo (video) {
      this.videoToPlay = video.iframeEmbedUrl
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
