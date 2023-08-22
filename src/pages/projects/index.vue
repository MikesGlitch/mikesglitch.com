<template>
  <div class="container py-4">
    <!-- <a href="https://www.youtube.com/watch?v=uKiqSOOcJdI">video on designing projects page - https://www.youtube.com/watch?v=uKiqSOOcJdI</a>
    <a href="https://www.youtube.com/watch?v=m0VHFrhceik">more design here - https://www.youtube.com/watch?v=m0VHFrhceik</a> -->

    <!-- <h3>Upcoming projects</h3> -->
    <!-- <h3>Projects</h3> -->

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 auto-rows-fr">
      <div v-for="project of data" :key="project.to">
        <CardProject
          :to="project.to"
          :title="project.title"
          :description="project.description"
          :stars="project.stars"
          :article="project.article"
        />
      </div>
    </div>
    <!-- <CardList :data="data" /> -->
  </div>
</template>

<script lang="ts" setup>
import { IProjectCardProps } from '~~/components/card/Project.vue'
import { IGetProjectsResponse } from '~~/interfaces/Api'

useHead({ title: 'Projects' })

const config = useRuntimeConfig()
const { data } = await useAsyncData('projectsPage', async () => {
  const projectsResponsePromise = $fetch<IGetProjectsResponse>(`${config.public.apiBaseUrl}/projects`)
  const projectsMarkdownPromise = queryContent('/projects')
    .only(['title', 'repoName', 'description', '_path'])
    .sort({ createdAt: 1 })
    .find()

  const [githubProjects, articles] = await Promise.all([projectsResponsePromise, projectsMarkdownPromise])

  const projectCards = githubProjects.projects.sort((a, b) => b.stars - a.stars).map((project): IProjectCardProps => {
    const articleData = articles.find(article => article.repoName === project.name)

    return {
      to: project.url,
      title: project.name,
      description: project.description,
      stars: project.stars,
      article: articleData ? articleData._path : undefined,
      lastCommittedAt: project.lastComittedAt
    }
  })

  return projectCards
})
</script>
