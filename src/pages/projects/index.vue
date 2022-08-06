<template>
  <div class="container py-4">
    <!-- <a href="https://www.youtube.com/watch?v=uKiqSOOcJdI">video on designing projects page - https://www.youtube.com/watch?v=uKiqSOOcJdI</a>
    <a href="https://www.youtube.com/watch?v=m0VHFrhceik">more design here - https://www.youtube.com/watch?v=m0VHFrhceik</a> -->

    <!-- <h3>Upcoming projects</h3> -->
    <!-- <h3>Projects</h3> -->

    <CardList :data="data" />
  </div>
</template>

<script lang="ts" setup>
import { CardData } from '~/components/card/CardList.vue'

useHead({ title: 'Projects' })

const { data } = await useAsyncData('projects', () => {
  return queryContent<CardData>('/projects')
    .only(['title', 'description', 'img', '_path'])
    .sort({ createdAt: 1 })
    .find()
})
</script>
