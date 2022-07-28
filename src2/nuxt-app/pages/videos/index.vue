<template>
  <div>
    <div v-if="videoToPlay && latestVideos" class="video-player-container">
      <div ref="videoPlayer" class="video-player-ribbon container">
        <div class="video-player">
          <iframe v-if="videoToPlay" :src="videoToPlay" frameborder="0" allowfullscreen />
        </div>
      </div>
    </div>

    <div class="container">
      <VideoList :videos="latestVideos" :current-video="videoToPlay" @video-clicked="onChangeVideo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const videoToPlay = ref();
const videoPlayer = ref(null);
const latestVideos = ref();
const config = useRuntimeConfig()
await useAsyncData(async () => {
  const response = await fetch(
    `${config.public.apiBaseUrl}/youtube-videos`
  )
    .then(res => res.json())
    .catch(() => null)

  videoToPlay.value = response?.latestVideoEmbedIframeUrl
  latestVideos.value = response?.latestVideos
})

const onChangeVideo = (video) => {
  console.log(video, videoPlayer.value)
  videoToPlay.value = video.iframeEmbedUrl
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
