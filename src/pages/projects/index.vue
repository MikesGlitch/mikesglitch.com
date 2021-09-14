<template>
  <div class="container">
    <!-- <a href="https://www.youtube.com/watch?v=uKiqSOOcJdI">video on designing projects page - https://www.youtube.com/watch?v=uKiqSOOcJdI</a>
    <a href="https://www.youtube.com/watch?v=m0VHFrhceik">more design here - https://www.youtube.com/watch?v=m0VHFrhceik</a> -->

    <h1>This page is WIP</h1>
    <h3>Upcoming projects</h3>
    <h3>Completed projects</h3>
    <ul>
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="{ name: 'projects-slug', params: { slug: project.slug } }">
          <!-- <img :src="project.img"> -->
          <div>
            <h2>{{ project.title }}</h2>
            <!-- <p>by {{ project.author.name }}</p> -->
            <p>{{ project.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      projects
    }
  }
}
</script>
