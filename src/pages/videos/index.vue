<template>
  <div>
    <div ref="videoPlayer" class="video-player-container bg-gray-light dark:bg-gray-medium-default mb-8">
      <div v-if="data.latestVideoEmbedIframeUrl" class="container py-4">
        <div class="video-player">
          <iframe class="border-none w-full aspect-video" title="Watch me code!" :src="data.latestVideoEmbedIframeUrl" allowfullscreen />
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

useHead({ title: 'Videos' })
const config = useRuntimeConfig()
const videoPlayer = ref(null)

const { data } = await useAsyncData('youtubevideos', () => {
  return $fetch<IGetYoutubeVideosResponse>(`${config.public.apiBaseUrl}/youtube-videos`)
})

const onChangeVideo = (video: IYouTubeVideo) => {
  data.value.latestVideoEmbedIframeUrl = video.iframeEmbedUrl
  videoPlayer.value.scrollIntoView({ behavior: 'smooth' })
}
</script>
