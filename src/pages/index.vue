<template>
  <div class="">
    <div class="bg-gray-light dark:bg-gray-medium-default">
      <div class="container flex py-4 sm:py-12">
        <div class="flex flex-col justify-center">
          <TextProse>
            <h1>Hi, I'm Mike.</h1>
            <p>I'm a full stack web developer from Glasgow, Scotland.</p>
            <p>
              Check out my <LinkInternal to="/blog" text="articles" />, <LinkInternal to="/videos" text="videos" /> and <LinkExternal href="https://www.youtube.com/channel/UCfx1yOrSVwlO-VwpKxvlqow" title="My Youtube channel" text="live streams!" />
            </p>
            <p>Feel free to take a look at my latest projects on <LinkExternal href="https://github.com/MikesGlitch" title="My Github" text="Github" />.</p>
          </TextProse>
        </div>
        <AvatarMeImage class="hidden sm:block ml-auto align-middle w-[300px] h-[300px]" />
      </div>
    </div>

    <div v-if="data" class="container flex flex-col gap-10 mt-10">
      <div class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <TextHeading heading="Latest Articles" />
          <LinkButtonInternal to="/blog" class="hidden sm:block" text="View All" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr">
          <div v-for="article of data.blogArticles" :key="article._path">
            <CardArticleBasicInfo :to="article._path" :date="article.date" :category="article.category" :title="article.title" />
          </div>
        </div>
      </div>

      <div v-if="data" class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <TextHeading heading="Latest Videos" />
          <LinkButtonInternal to="/videos" class="hidden sm:block" text="View All" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr">
          <div v-for="video of data.latestVideos" :key="video.id">
            <NuxtLink to="/videos">
              <Card :title="video.title">
                <template #image>
                  <img class="hidden sm:block object-conver w-full" :src="video.thumbnail" alt="Thumbnail">
                </template>
              </Card>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div v-if="data" class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <TextHeading heading="Latest Projects" />
          <LinkButtonInternal to="/projects" class="hidden sm:block" text="View All" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr">
          <div v-for="project of data.projectCards" :key="project.to">
            <CardProject
              :to="project.to"
              :title="project.title"
              :description="project.description"
              :stars="project.stars"
              :article="project.article"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IGetProjectsResponse, IGetYoutubeVideosResponse, IYouTubeVideo } from '~/interfaces/Api'
import { IProjectCardProps } from '~~/components/card/Project.vue'
const config = useRuntimeConfig()

const { data } = await useAsyncData('homePageInit', async () => {
  const blogArticlesPromise = queryContent('/blog')
    .only(['title', 'description', '_path', 'tags', 'category', 'date'])
    .sort({ date: -1 })
    .limit(6)
    .find()

  const projectsResponsePromise = $fetch<IGetProjectsResponse>(`${config.public.apiBaseUrl}/projects`)
  const projectsMarkdownPromise = queryContent('/projects')
    .only(['title', 'repoName', 'description', '_path'])
    .sort({ createdAt: 1 })
    .find()

  const videosDataPromise = $fetch<IGetYoutubeVideosResponse>(`${config.public.apiBaseUrl}/youtube-videos`)

  const [blogArticles, githubProjects, projectArticles, videosData] = await Promise.all([blogArticlesPromise, projectsResponsePromise, projectsMarkdownPromise, videosDataPromise])

  const top3Projects = githubProjects.projects.sort((a, b) => Date.parse(b.lastComittedAt) - Date.parse(a.lastComittedAt)).slice(0, 3)
  const projectCards = top3Projects.map((project): IProjectCardProps => {
    const articleData = projectArticles.find(article => article.repoName === project.name)

    return {
      to: project.url,
      title: project.name,
      description: project.description,
      stars: project.stars,
      article: articleData ? articleData._path : undefined,
      lastCommittedAt: project.lastComittedAt
    }
  })

  let latestVideos: IYouTubeVideo[] = []
  if (videosData?.latestVideos) {
    latestVideos = videosData.latestVideos.slice(0, 3)
  }

  return { latestVideos, projectCards, blogArticles }
})
</script>
