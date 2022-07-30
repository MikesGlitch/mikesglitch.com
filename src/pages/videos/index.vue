<template>
  <div>
    <div v-if="data.latestVideoEmbedIframeUrl && data.latestVideos" class="video-player-container">
      <div ref="videoPlayer" class="video-player-ribbon container">
        <div class="video-player">
          <iframe v-if="data.latestVideoEmbedIframeUrl" :src="data.latestVideoEmbedIframeUrl" frameborder="0" allowfullscreen />
        </div>
      </div>
    </div>

    <div class="container">
      <VideoList :videos="data.latestVideos" :current-video="data.latestVideoEmbedIframeUrl" @video-clicked="onChangeVideo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const { data } = await useAsyncData(async () => {
  const response = await fetch(
    `${config.public.apiBaseUrl}/youtube-videos`
  )
    .then(res => res.json())
    .catch(() => null)

  return { latestVideoEmbedIframeUrl: response.latestVideoEmbedIframeUrl, latestVideos: response.latestVideos }
})

const videoPlayer = ref(null)

const onChangeVideo = (video) => {
  data.value.latestVideoEmbedIframeUrl = video.iframeEmbedUrl
  videoPlayer.value.scrollIntoView({ behavior: 'smooth' })
}
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
    padding: 1rem 0;
    margin: 0 auto;
  }

  .video-player {
    /* falls back to 16/9, but otherwise uses ratio from HTML */
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 */
    height: 0;

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
