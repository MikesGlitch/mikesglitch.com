<template>
  <div>
    <div class="container">
      <h1>Latest videos</h1>
    </div>
    <div v-if="videoToPlay && latestVideos" class="video-player-container">
      <div ref="videoPlayer" class="video-player-ribbon">
        <div class="video-player">
          <iframe
            v-if="videoToPlay"
            :src="videoToPlay"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>

    <div class="container">
      <VideoList
        :videos="latestVideos"
        :current-video="videoToPlay"
        :on-change-video="onChangeVideo"
      />
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
      this.$refs.videoPlayer.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";
@use "assets/css/global/variables";
.light-theme {
  .video-player-container {
    background-color: variables.$light-grey;
  }
}

.dark-theme {
  .video-player-container {
    background-color: variables.$dark-theme-secondary-background-color;
  }
}

.video-player-container {
  margin-bottom: 2rem;

  .video-player-ribbon {
    padding: 1rem;
    width: 50%;
    margin: 0 auto;
  }

  .video-player {
    /* falls back to 16/9, but otherwise uses ratio from HTML */
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    @include screen-breakpoints.widescreen {
      grid-column: span 3;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
