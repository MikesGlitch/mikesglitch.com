<template>
  <Card class="video__list">
    <template #tabs>
      <CardTabs />
    </template>
    <div class="videos">
      <a v-for="video in videos" :key="video.id" role="button" :class="{ 'video': true, 'selected': currentVideo == video.iframeEmbedUrl } " @click="() => onChangeVideo(video)">
        <img :src="video.thumbnail" class="thumbnail" alt="">
        <div class="video__info">
          <p>{{ video.title }}</p>
        </div>
      </a>
    </div>
  </Card>
</template>

<script lang="ts">
import { IYouTubeVideo } from './../../interfaces/Api'

export default {
  props: {
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
    onChangeVideo: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
.video__list {
  .card__content {
    min-height: 0;
    flex: 1 0 300px;
    padding: 0 !important;
  }
}
</style>

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";

.video__list {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 575px;

  .videos {
    height: 100%;
    overflow-y: scroll;
    max-height: 300px;

    @include screen-breakpoints.tablet {
      overflow-y: auto;
      max-height: 100%;
    }

    .video {
      padding: 0.5rem;
      display: grid;
      grid-template-columns: auto;
      box-sizing: border-box;
      width: 100%;

      @include screen-breakpoints.tablet {
        grid-template-columns: 180px auto;
        grid-column-gap: 0.5rem;
      }

      &:hover {
        background-color: var('--hover-background-color');
      }

      .thumbnail {
        width: 100%;
      }

      &.selected {
        color: hotpink;
        background-color: var('--hover-background-color');
      }
    }
  }
}
</style>
