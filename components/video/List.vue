<template>
  <Card class="video__list">
    <template #tabs>
      <CardTabs />
    </template>
    <ul class="videos">
      <li v-for="video in videos" :key="video.id">
        <div class="video">
          <a class="">
            <img :src="video.thumbnail" class="thumbnail" alt=""></a>
          <div class="video__info">
            <p>{{ video.title }}</p>
          </div>
        </div>
      </li>
    </ul>
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
.video__list {
  height: 100%;
  max-height: 575px;

  .videos {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;

    .video {
      display: flex;
      width: 100%;
      height: 100px;

      &:hover {
        background-color: lightgrey;
        cursor: pointer;
      }

      .thumbnail {
        margin-right: 1rem;
        height: 100px;
      }

      &__info {

      }
    }
  }
}
</style>
