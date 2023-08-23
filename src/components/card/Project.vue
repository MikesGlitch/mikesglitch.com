<template>
  <div class="group h-full">
    <Card class="dark:group-hover:border-hotpink">
      <div class="flex flex-col justify-between gap-2 h-full">
        <NuxtLink
          class="flex-1 -mx-6 -my-4 md:-mx-16 md:-my-11 px-6 py-4 md:px-16 md:py-11"
          :to="to"
          :title="title"
          :external="true"
          target="_blank"
        >
          <div class="flex flex-col gap-4 flex-1 mt-3">
            <div class="flex justify-between flex-wrap">
              <span class="flex gap-2 items-center">
                <h5 class="text-lg font-bold group-hover:underline underline-offset-4 group-hover:text-hotpink">
                  {{ title }}
                </h5>
                <IconExternalLink class="h-4 w-4 text-auto min-w-[1rem] group-hover:text-hotpink" />
              </span>
              <span class="text-md italic">⭐ {{ stars }} stars</span>
            </div>
            <span v-if="description" class="text-md">{{ description }}</span>
            <span v-if="lastCommittedAt" class="text-sm">Last updated: {{ toHumanReadableDate(lastCommittedAt) }}</span>
          </div>
        </NuxtLink>
        <LinkButtonInternal v-if="article" :to="article" :title="title" text="Article" />
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { toHumanReadableDate } from '~/utils/dateUtils'

export interface IProjectCardProps {
  to: string;
  title?: string;
  description?: string;
  stars: number;
  article?: string;
  lastCommittedAt?: string;
}

defineProps<IProjectCardProps>()
</script>
