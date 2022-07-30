<template>
  <div class="container">
    <!-- <a href="https://www.youtube.com/watch?v=uKiqSOOcJdI">video on designing projects page - https://www.youtube.com/watch?v=uKiqSOOcJdI</a>
    <a href="https://www.youtube.com/watch?v=m0VHFrhceik">more design here - https://www.youtube.com/watch?v=m0VHFrhceik</a> -->

    <h3>Upcoming projects</h3>
    <h3>Projects</h3>

    <CardList :data="projects" />
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData(async () => {
  const projectsData = await queryContent('/projects')
    .only(['title', 'description', 'img', '_path', 'author'])
    .sort({ createdAt: 1 })
    .find()
  return projectsData
})
</script>
