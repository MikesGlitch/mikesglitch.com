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
        <VideoList
          :videos="latestVideos"
          :current-video="videoToPlay"
          :on-change-video="onChangeVideo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      videoToPlay: null,
      latestVideos: []
    }
  },
  async fetch () {
    const response = await fetch(
      `${process.env.NUXT_ENV_API_BASE_URL}/youtube-videos`
    )
      .then(res => res.json())
      .catch(() => null)

    this.videoToPlay = response?.latestVideoEmbedIframeUrl
    this.latestVideos = response?.latestVideos
  },
  methods: {
    onChangeVideo (video) {
      this.videoToPlay = video.iframeEmbedUrl
    }
  }
})
</script>

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";

.latest-videos {
  margin-top: 2rem;

  .recent-video {
    margin: 2rem auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto;

    @include screen-breakpoints.widescreen {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    &__player {
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

    &__info {
      @include screen-breakpoints.widescreen {
        grid-column: span 2;
      }
    }
  }
}
</style>
