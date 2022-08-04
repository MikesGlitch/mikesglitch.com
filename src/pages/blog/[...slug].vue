<template>
  <div class="container py-4">
    <div>
      <div>
        <TextProse>
          <h1>{{ article.title }}</h1>
          <div class="blog-metadata">
            <span v-if="article.date" class="blog-metadata__item"><span>Updated at:</span> {{ toHumanReadableDate(article.date) }}</span>
            <span v-if="article.timeToRead" class="blog-metadata__item"><span>Time to read:</span> {{ article.timeToRead }}</span>
          </div>
          <ContentDoc :path="path" />
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
const path = ref(route.params.slug)
const { data: article } = await useAsyncData('blogPost', async () => {
  return await queryContent(`/blog/${route.params.slug}`).findOne()
})

</script>
