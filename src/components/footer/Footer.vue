<template>
  <footer class="bg-white dark:bg-gray-medium-2 text-black dark:text-white py-8 px-1 text-sm">
    <div class="container">
      <hr class="mb-4 text-gray-medium-2 dark:text-gray-light">
      <div class="flex flex-col gap-2.5 w-full h-full">
        <div class="flex gap-2 align-middle items-center">
          <span class="w-8 text-xl leading-4">©</span>
          <span><span class="font-bold">Made by</span> <LinkExternal title="Message me" href="https://www.linkedin.com/in/mikesglitch" text="Michael Clark" /> 2020 – present</span>
        </div>
        <div class="flex gap-2 align-middle items-center">
          <span class="w-8">🔨</span><span class="font-bold">Built with</span> <link-external title="Vue" href="https://vuejs.org/" text="Vue" /> & <link-external title="Nuxt" href="https://v3.nuxtjs.org/" text="Nuxt" /> on <link-external title="Vercel" href="https://vercel.com/" text="Vercel" />
        </div>
        <div v-if="data?.lastDeployment" class="flex gap-2 align-middle items-center">
          <span class="w-8">🚀</span> <span class="font-bold">Last build</span> <link-external :title="toHumanReadableDate(data.lastDeployment.lastDeployedAt)" :href="`https://github.com/MikesGlitch/mikesglitch.com/commit/${data.lastDeployment.commitSha}`" :text="toHumanReadableDate(data.lastDeployment.lastDeployedAt)" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { IGetLastDeploymentResponse } from '~/interfaces/Api'
import { toHumanReadableDate } from '@/utils/dateUtils'
const config = useRuntimeConfig()

const { data } = await useAsyncData('last-deployment', async () => {
  try {
    const lastDeployment = await $fetch<IGetLastDeploymentResponse>(`${config.public.apiBaseUrl}/last-deployment`)
    return { lastDeployment }
  } catch (error) {
    console.error(error)
  }
})
</script>
