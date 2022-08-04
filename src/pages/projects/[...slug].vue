<template>
  <div class="container py-4">
    <TextProse>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <ContentDoc :path="path" />
    </TextProse>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const path = ref(route.params.slug)
const { data: project } = await useAsyncData('projectPost', () => {
  return queryContent(`/projects/${route.params.slug}`).findOne()
})

</script>
