<template>
  <Card>
    <div class="flex flex-col justify-between gap-2 h-full">
      <NuxtLink
        class="group flex-1"
        :to="to"
        :title="title"
        :external="true"
        target="_blank"
      >
        <span class="text-sm italic">⭐ {{ stars }} stars</span>
        <div class="flex flex-col gap-4 flex-1 mt-3">
          <span class="flex gap-2 items-center">
            <h5 class="text-lg font-bold group-hover:underline underline-offset-4 group-hover:text-hotpink">
              {{ title }}
            </h5>
            <IconExternalLink class="h-4 w-4 text-auto min-w-[1rem] group-hover:text-hotpink" />
          </span>
          <span v-if="description" class="text-sm">{{ description }}</span>
          <span v-if="lastCommittedAt" class="text-sm">Last updated: {{ toHumanReadableDate(lastCommittedAt) }}</span>
        </div>
      </NuxtLink>
      <LinkButtonInternal v-if="article" :to="article" :title="title" text="Article" />
    </div>
  </Card>
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
