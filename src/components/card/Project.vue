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
        <div class="flex flex-col gap-2 flex-1">
          <h5 class="font-bold group-hover:underline underline-offset-4 group-hover:text-hotpink">
            {{ title }}
          </h5>
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
