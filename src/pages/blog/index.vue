<template>
  <div class="container py-4">
    <div v-if="data">
      <CardList :data="data.filteredArticles" />
      <!-- <BlogSidebar :tags="tags" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CardData } from '~/components/card/CardList.vue'

interface BlogPostData extends CardData {
  tags: string[]
}
const { data } = await useAsyncData('allBlogPosts', async () => {
  const articlesData = await queryContent<BlogPostData>('/blog')
    .only(['title', 'description', 'img', '_path', 'tags', 'category', 'date'])
    .sort({ date: -1 })
    .find()

  const tagsData = articlesData.map(article => article.tags).filter((value, index, self) => self.indexOf(value) === index) // currently only support 1
  return { tags: tagsData, articles: articlesData, filteredArticles: articlesData as unknown as BlogPostData[] }
})

useHead({ title: 'Blog' })
// const filterByTag = (tag) => {
//   data.value.filteredArticles = data.value.articles.filter(x => x.tags === tag) // currently only filter by one
// }
</script>
