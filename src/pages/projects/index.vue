<template>
  <div class="container py-4">
    <!-- <a href="https://www.youtube.com/watch?v=uKiqSOOcJdI">video on designing projects page - https://www.youtube.com/watch?v=uKiqSOOcJdI</a>
    <a href="https://www.youtube.com/watch?v=m0VHFrhceik">more design here - https://www.youtube.com/watch?v=m0VHFrhceik</a> -->

    <!-- <h3>Upcoming projects</h3> -->
    <!-- <h3>Projects</h3> -->

    {{ error }}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr">
      <div v-for="project of data" :key="project.id">
        <CardProject :to="project.url" :title="project.name" :description="project.description" :stars="project.stars" :article="project.article" />
      </div>
    </div>
    <!-- <CardList :data="data" /> -->
  </div>
</template>

<script lang="ts" setup>
import { IGetProjectsResponse, IProject } from '~~/interfaces/Api'

interface IProjectCard extends IProject {
  article: string;
}

useHead({ title: 'Projects' })

const config = useRuntimeConfig()
const { data, error } = await useAsyncData('projectsPage', async () => {
  const projectsResponsePromise = $fetch<IGetProjectsResponse>(`${config.public.apiBaseUrl}/projects`)
  const projectsMarkdownPromise = queryContent('/projects')
    .only(['title', 'repoName', 'description', '_path'])
    .sort({ createdAt: 1 })
    .find()

  const [githubProjects, articles] = await Promise.all([projectsResponsePromise, projectsMarkdownPromise])

  const projectCards = githubProjects.projects.map((project): IProjectCard => {
    const articleData = articles.find(article => article.repoName === project.name)

    return {
      ...project,
      article: articleData ? articleData._path : undefined
    }
  })

  return projectCards
})
</script>
