<template>
  <div class="container py-4">
    <div>
      <div>
        <TextProse>
          <h1>{{ article.title }}</h1>
          <div class="flex gap-2">
            <span v-if="article.date" class="flex gap-1"><span>Updated at: </span> {{ toHumanReadableDate(article.date) }}</span>
            <span v-if="article.timeToRead" class="flex gap-1"><span>Time to read: </span> {{ article.timeToRead }}</span>
          </div>
          <ContentDoc />
        </TextProse>
      </div>
      <!-- Dunno what to do with this sidebar - maybe just make another one.  Otherwise i'll have to pass in tags etc -->
      <!-- <BlogSidebar /> -->
    </div>
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
