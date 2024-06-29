<template>
  <div class="container py-4">
    <TextProse>
      <TextHeading class="my-8 text-center text-5xl">
        <span class="text-hotpink">{{ project?.name }}</span>
      </TextHeading>
      <hr>
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
