<template>
  <div v-if="data">
    <div v-if="data.latestVideoEmbedIframeUrl && data.latestVideos" class="video-player-container">
      <div ref="videoPlayer" class="video-player-ribbon container">
        <div class="video-player">
          <ClientOnly>
            <iframe v-if="data.latestVideoEmbedIframeUrl" class="border-none" title="Watch me code!" :src="data.latestVideoEmbedIframeUrl" allowfullscreen />
          </ClientOnly>
        </div>
      </div>
    </div>

    <div class="container">
      <VideoList :videos="data.latestVideos" :current-video="data.latestVideoEmbedIframeUrl" @video-clicked="onChangeVideo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IGetYoutubeVideosResponse, IYouTubeVideo } from '~/interfaces/Api'

const config = useRuntimeConfig()
const { data } = await useAsyncData(() => {
  return $fetch<IGetYoutubeVideosResponse>(`${config.public.apiBaseUrl}/youtube-videos`)
})

const videoPlayer = ref(null)

const onChangeVideo = (video: IYouTubeVideo) => {
  data.value.latestVideoEmbedIframeUrl = video.iframeEmbedUrl
  videoPlayer.value.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";
@use "assets/css/global/variables";

.light {
  .video-player-container {
    background-color: variables.$light-grey;
  }
}

.dark {
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
