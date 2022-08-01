<template>
  <div>
    <div class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <a v-for="video in videos" :key="video.id" class="cursor-pointer" @click="onVideoClicked(video)">
        <Card :title="video.title" :class="{ 'text-hotpink': currentVideo == video.iframeEmbedUrl }" @click="onVideoClicked(video)">
          <template #image>
            <img class="hidden sm:block object-conver w-full" :src="video.thumbnail" alt="Thumbnail">
          </template>
        </Card>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IYouTubeVideo } from '../../interfaces/Api'

defineProps({
  videos: {
    type: Array<IYouTubeVideo>,
    required: false,
    default: () => [] as IYouTubeVideo[]
  },
  currentVideo: {
    type: String,
    required: false,
    default: null
  }
})

const emit = defineEmits<{(e: 'video-clicked', video: any): void}>()

const onVideoClicked = video => emit('video-clicked', video)
</script>
