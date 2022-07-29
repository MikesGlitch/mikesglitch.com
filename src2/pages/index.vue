<template>
  <div>
    <div class="about-me-summary">
      <div class="about-me-summary__container container">
        <div class="about-me-summary__description">
          <h1>Hi, I'm Mike. new version</h1>
          <p>I'm a full stack web developer from Glasgow, Scotland.</p>
          <p>Check out my <NuxtLink to="/blog">articles</NuxtLink>, <NuxtLink to="/videos">videos</NuxtLink> and <a href="https://www.youtube.com/channel/UCfx1yOrSVwlO-VwpKxvlqow" title="My Youtube channel">live streams!</a></p>
          <p>Feel free to take a look at my latest projects on <a href="https://github.com/MikesGlitch" title="My github" target="_blank">Github</a>.</p>
        </div>
        <AvatarMe class="about-me-summary__image" />
        <!-- <img class="about-me-summary__image" src="/avatar.png" alt="Picture of me"> -->
      </div>
    </div>

    <div class="container">
        {{ data }}
      <!-- <div class="latest-articles">
        <h2>Latest Articles</h2>
        <div v-for="article of blogArticles" :key="article._path">
          <NuxtLink :to="article._path">
            <p>{{ article.title }}</p>
          </NuxtLink>
        </div>
      </div>

      <div class="latest-videos">
        <h2>Latest Videos</h2>
        <div v-for="video of latestVideos" :key="video.id">
          <NuxtLink to="/videos">
            <p>{{ video.title }}</p>
          </NuxtLink>
        </div>
      </div>

      <div class="latest-projects">
        <h2>Latest Projects</h2>
        <div v-for="article of projectArticles" :key="article._path">
          <NuxtLink :to="article._path">
            <p>{{ article.title }}</p>
          </NuxtLink>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const config = useRuntimeConfig()

const blogArticles = ref([])
const projectArticles = ref([])
const latestVideos = ref([])

const { data } = await useAsyncData(async () => {
  const blogArticlesPromise = queryContent('/blog')
      .only(['title', 'description', '_path', 'tags', 'category', 'date'])
      .sort({ 'date': -1 })
      .limit(10)
      .find()

    const projectArticlesPromise = queryContent('/projects')
      .only(['title', 'description', '_path', 'tags', 'category', 'date'])
      .sort({ 'date': -1 })
      .limit(10)
      .find()

    const videosPromise = fetch(
      `${config.public.apiBaseUrl}/youtube-videos`
    )
      .then(res => res.json())
      .catch(() => null)

    const [blogArticlesData, projectArticlesData, videosData] = await Promise.all([blogArticlesPromise, projectArticlesPromise, videosPromise])
    let latestVideosData = []
    if (videosData?.latestVideos) {
      latestVideosData = videosData.latestVideos.slice(0, 10)
    }
    blogArticles.value = data.value.blogArticlesData
    projectArticles.value = data.value.projectArticlesData
    latestVideos.value = data.value.latestVideosData
    
    return { blogArticlesData, projectArticlesData, latestVideosData }
})

console.log(data.value)
blogArticles.value = data.value.blogArticlesData
projectArticles.value = data.value.projectArticlesData
latestVideos.value = data.value.latestVideosData
</script>
<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";
@use "assets/css/global/variables";

.light-theme {
  .about-me-summary {
    background-color: variables.$light-grey;
  }
}

.dark-theme {
  .about-me-summary {
    background-color: variables.$dark-theme-secondary-background-color;
  }
}

.about-me-summary {
  &__container {
    display: flex;
    flex-direction: row;
    padding: 0;

    @include screen-breakpoints.tablet {
      padding: 3rem 0;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: variables.$gutter-x;
    padding-right: variables.$gutter-x;

    @include screen-breakpoints.tablet {
      padding: 0;
    }
  }

  &__image {
    margin-left: auto;
    vertical-align: middle;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: none;

    @include screen-breakpoints.tablet {
      display: block;
    }
  }
}
</style>
