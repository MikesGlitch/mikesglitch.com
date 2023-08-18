<template>
  <div v-if="project" class="container py-4">
    <TextProse>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <ContentDoc />
    </TextProse>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => {
  return queryContent(route.path).findOne()
})

useHead({ title: project.value?.title })

</script>
