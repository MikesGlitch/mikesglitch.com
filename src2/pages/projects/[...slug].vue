<template>
  <div class="container">
    <article>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <ContentDoc :path="path"/>
    </article>
  </div>
</template>

<script lang="ts" setup>
const project = ref();
const route = useRoute()
const path = ref(route.params.slug);
await useAsyncData(async () => {
  project.value = await queryContent(`/projects/${route.params.slug}`).findOne();
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
