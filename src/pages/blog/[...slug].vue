<template>
  <div class="container py-4">
    <TextProse>
      <h1>{{ article.title }}</h1>
      <div class="flex flex-col gap-2">
        <span v-if="article.date"><span>Updated at: </span> {{ toHumanReadableDate(article.date) }}</span>
        <span v-if="article.timeToRead"><span>Time to read: </span> {{ article.timeToRead }}</span>
      </div>
      <ContentDoc />
    </TextProse>
  </div>
</template>

<script lang="ts" setup>
import { toHumanReadableDate } from './../../utils/dateUtils'
const route = useRoute()
const { data: article } = await useAsyncData(route.path, async () => {
  return await queryContent(route.path).findOne()
})

useHead({ title: article.value.title })

</script>
