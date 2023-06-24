<template>
  <div class="">
    <div class="bg-gray-light dark:bg-gray-medium-default">
      <div class="container flex py-4 sm:py-12">
        <div class="flex flex-col justify-center gap-8">
          <TextHeading :size-class="'text-3xl'">
            Hi, I'm <span class="text-hotpink">Mike</span> 👋
          </TextHeading>
          <p class="text-xl leading-9">
            I'm a product-oriented web developer from Glasgow, Scotland.<br>
            I love to solve problems and focus on delivering reliable, scalable and tested applications.<br>
          </p>
          <p class="text-xl leading-9">
            Have a look at my latest projects on <LinkExternal class="text-hotpink" href="https://github.com/MikesGlitch" title="My Github" text="Github" />.
          </p>
          <div class="flex gap-4 flex-row items-center">
            <NuxtLink to="https://github.com/mikesglitch" title="Check out my GitHub" target="_blank" rel="noopener">
              <IconGithub class="w-8 hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/mikesglitch" title="Check out my LinkedIn" target="_blank" rel="noopener">
              <IconLinkedin class="w-8 fill-[#0a66c2] dark:fill-white hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="https://discord.com/users/425717708663947265" title="Message me on Discord" target="_blank" rel="noopener">
              <IconDiscord class="w-[2rem] fill-[#5865f2] dark:fill-white hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="https://www.youtube.com/@MikesGlitch" title="Check out my YouTube" target="_blank" rel="noopener">
              <IconYoutube class="w-12 hover:opacity-70" />
            </NuxtLink>
          </div>
        </div>
        <AvatarMeImage class="hidden sm:block ml-3 align-middle w-[300px] h-[300px]" />
      </div>
    </div>

    <div class="container flex flex-col gap-24 mt-12">
      <div class="flex flex-col gap-8">
        <div>
          <TextHeading>Recent <span class="text-hotpink">Clients</span></TextHeading>
        </div>
        <p class="text-center">
          I have had the privilege of working with these outstanding companies in recent years.
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 auto-rows-fr items-center">
          <img class="object-cover mx-auto" src="/clients/isometrix-logo.png" alt="IsoMetrix">
          <img class="object-cover mx-auto" src="/clients/aggreko-logo.svg" alt="Aggreko">
          <img class="object-cover mx-auto" src="/clients/sword-logo.webp" alt="Sword">
          <img class="object-cover mx-auto" src="/clients/CBRE-logo.png" alt="CBRE">
          <img class="object-cover mx-auto" src="/clients/canada-life-logo.svg" alt="Canada Life">
        </div>
      </div>

      <div v-if="data" class="flex flex-col gap-8">
        <div class="flex justify-between items-center">
          <TextHeading>Latest <span class="text-hotpink">Projects</span></TextHeading>
          <LinkButtonInternal to="/projects" class="hidden sm:block" text="View All Projects" />
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
      <div class="flex flex-col gap-10">
        <div class="flex justify-between items-center">
          <TextHeading>Get In <span class="text-hotpink">Contact</span></TextHeading>
        </div>
        <div class="flex gap-5">
          <div class="flex flex-col gap-4">
            <p>
              If you want to chat with me, feel free to send me a message. I love meeting new people and networking. If you are looking for someone to help you with your next project, I'm also available for hire.
            </p>
            <p>
              You can ping me on
              <LinkExternal title="Message me on LinkedIn" href="https://www.linkedin.com/in/mikesglitch" text="LinkedIn" />
              or
              <LinkExternal title="Message me on Discord" href="https://discord.com/users/425717708663947265" text="Discord" /> and I'll get back to you.
            </p>
          </div>
          <div class="ml-auto flex gap-4 items-center">
            <NuxtLink to="https://www.linkedin.com/in/mikesglitch" title="Check out my LinkedIn" target="_blank" rel="noopener">
              <IconLinkedin class="w-8 fill-[#0a66c2] dark:fill-white hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="https://discord.com/users/425717708663947265" title="Message me on Discord" target="_blank" rel="noopener">
              <IconDiscord class="w-[2.5rem] fill-[#5865f2] dark:fill-white hover:opacity-70" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IGetProjectsResponse } from '~/interfaces/Api'
import { IProjectCardProps } from '~~/components/card/Project.vue'
const config = useRuntimeConfig()

const { data } = await useAsyncData('homePageInit', async () => {
  const projectsResponsePromise = $fetch<IGetProjectsResponse>(`${config.public.apiBaseUrl}/projects`)
  const projectsMarkdownPromise = queryContent('/projects')
    .only(['title', 'repoName', 'description', '_path'])
    .sort({ createdAt: 1 })
    .find()

  const [githubProjects, projectArticles] = await Promise.all([projectsResponsePromise, projectsMarkdownPromise])

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

  return { projectCards }
})
</script>
