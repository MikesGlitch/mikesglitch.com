<template>
  <Card class="video__list">
    <template #tabs>
      <CardTabs />
    </template>
    <div class="videos">
      <a v-for="video in videos" :key="video.id" class="video">
        <img :src="video.thumbnail" class="thumbnail" alt="">
        <div class="video__info">
          <p>{{ video.title }}</p>
        </div>
      </a>
    </div>
  </Card>
</template>

<script lang="ts">
import { IYouTubeVideo } from 'interfaces/Api'

export default {
  props: {
    videos: {
      type: Array,
      required: false,
      default: () => [] as IYouTubeVideo[]
    }
  }
}
</script>

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

    // There's an issue here on desktop/tablet size screens where the height isn't understood correctly by the browser.
    // I don't get it - it's hard to fix.  May take some googling.
    // https://themebubble.com/demo/videoly/animated-movie-trailer-for-new-kickass-movie-more/

    @include screen-breakpoints.tablet {
      overflow-y: unset;
      max-height: 100%;
    }

    .video {
      display: grid;
      grid-template-columns: auto;

      @include screen-breakpoints.tablet {
        grid-template-columns: 180px auto;
        grid-column-gap: 1rem;
      }

      width: 100%;

      &:hover {
        background-color: lightgrey;
      }

      .thumbnail {
        width: 100%;

        @include screen-breakpoints.tablet {
          height: 100px;
        }
      }
    }
  }
}
</style>
