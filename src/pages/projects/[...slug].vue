<template>
  <div class="container py-4">
    <article class="prose dark:prose-invert max-w-none">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <ContentDoc :path="path" />
    </article>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const path = ref(route.params.slug)
const { data: project } = await useAsyncData('projectPost', () => {
  return queryContent(`/projects/${route.params.slug}`).findOne()
})

</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
