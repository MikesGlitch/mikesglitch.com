<template>
  <div class="">
    <div class="about-me-summary bg-gray-light dark:bg-gray-medium-default">
      <div class="about-me-summary__container container">
        <div class="about-me-summary__description">
        <TextProse>
          <h1>Hi, I'm Mike.</h1>
          <p>I'm a full stack web developer from Glasgow, Scotland.</p>
          <p>
            Check out my <LinkInternal to="/blog" text="articles" />, <LinkInternal to="/videos" text="videos" /> and <LinkExternal href="https://www.youtube.com/channel/UCfx1yOrSVwlO-VwpKxvlqow" title="My Youtube channel" text="live streams!" />
          </p>
          <p>Feel free to take a look at my latest projects on <LinkExternal href="https://github.com/MikesGlitch" title="My Github" text="Github" />.</p>
        </TextProse>
        </div>
        <AvatarMe class="about-me-summary__image" />
      </div>
    </div>

    <div class="container flex flex-col gap-8 mt-8">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center mb-2">
          <TextHeading heading="Latest Articles" />
          <LinkButtonInternal to="/blog" class="hidden sm:block" text="View All" />
        </div>
        <div v-for="article of data.blogArticles" :key="article._path">
          <LinkInternal :to="article._path" :text="article.title" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center mb-2">
          <TextHeading heading="Latest Videos" />
          <LinkButtonInternal to="/videos" class="hidden sm:block" text="View All" />
        </div>
        <div v-for="video of data.latestVideos" :key="video.id">
          <LinkInternal to="/videos" :text="video.title" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center mb-2">
          <TextHeading heading="Latest Projects" />
          <LinkButtonInternal to="/projects" class="hidden sm:block" text="View All" />
        </div>
        <div v-for="article of data.projectArticles" :key="article._path">
          <LinkInternal :to="article._path" :text="article.title" />
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
