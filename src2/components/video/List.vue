<template>
  <div class="video__list">
    <div class="videos">
      <a v-for="video in videos" :key="video.id" @click="onVideoClicked(video)">
        <Card :title="video.title" :class="{ 'video': true, 'selected': currentVideo == video.iframeEmbedUrl }" @click="onVideoClicked(video)">
          <template #image>
            <img :src="video.thumbnail" alt="Thumbnail">
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
    type: Array,
    required: false,
    default: () => [] as IYouTubeVideo[]
  },
  currentVideo: {
    type: String,
    required: false,
    default: null
  },
})

const emit = defineEmits<{e: 'video-clicked', video: any}>()

const onVideoClicked = (video) => {
  console.log('emitted')
  emit('video-clicked', video)
}
</script>

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";

.video__list {
  .videos {
    display: grid;
    grid-row: 2;
    grid-gap: 10px;
    grid-template-columns: auto;

    @include screen-breakpoints.tablet {
      grid-row: unset;
      grid-column: 1/span 4;
      grid-template-columns: repeat(2, auto);
    }

    @include screen-breakpoints.desktop {
      grid-template-columns: repeat(3, auto);
    }

    img {
      display:none;
      width: 100%;

      @include screen-breakpoints.tablet {
        display: block
      }
    }

    .selected {
      color: hotpink;
    }
  }
}
</style>
