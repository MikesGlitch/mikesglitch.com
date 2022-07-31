<template>
  <div class="prose dark:prose-invert max-w-none prose-a:text-hotpink">
    <div class="about-me-summary bg-gray-light dark:bg-gray-medium-default">
      <div class="about-me-summary__container container">
        <div class="about-me-summary__description">
          <h1>Hi, I'm Mike.</h1>
          <p>I'm a full stack web developer from Glasgow, Scotland.</p>
          <p>
            Check out my <NuxtLink to="/blog">articles</NuxtLink>, <NuxtLink to="/videos">videos</NuxtLink> and <a href="https://www.youtube.com/channel/UCfx1yOrSVwlO-VwpKxvlqow" title="My Youtube channel">live streams!</a>
          </p>
          <p>Feel free to take a look at my latest projects on <a href="https://github.com/MikesGlitch" title="My github" target="_blank">Github</a>.</p>
        </div>
        <AvatarMe class="about-me-summary__image" />
      </div>
    </div>

    <div class="container">
      <div class="latest-articles">
        <h2>Latest Articles</h2>
        <div v-for="article of data.blogArticles" :key="article._path">
          <NuxtLink :to="article._path">
            {{ article.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="latest-videos">
        <h2>Latest Videos</h2>
        <div v-for="video of data.latestVideos" :key="video.id">
          <NuxtLink to="/videos">
            {{ video.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="latest-projects">
        <h2>Latest Projects</h2>
        <div v-for="article of data.projectArticles" :key="article._path">
          <NuxtLink :to="article._path">
            {{ article.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IGetYoutubeVideosResponse } from '~/interfaces/Api'

const config = useRuntimeConfig()

const { data } = await useAsyncData('homePageInit', async () => {
  const blogArticlesPromise = queryContent('/blog')
    .only(['title', 'description', '_path', 'tags', 'category', 'date'])
    .sort({ date: -1 })
    .limit(10)
    .find()

  const projectArticlesPromise = queryContent('/projects')
    .only(['title', 'description', '_path', 'tags', 'category', 'date'])
    .sort({ date: -1 })
    .limit(10)
    .find()

  const videosDataPromise = $fetch<IGetYoutubeVideosResponse>(`${config.public.apiBaseUrl}/youtube-videos`)

  const [blogArticles, projectArticles, videosData] = await Promise.all([blogArticlesPromise, projectArticlesPromise, videosDataPromise])
  let latestVideos = []
  if (videosData?.latestVideos) {
    latestVideos = videosData.latestVideos.slice(0, 10)
  }

  return { latestVideos, projectArticles, blogArticles }
})
</script>

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";
@use "assets/css/global/variables";

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
