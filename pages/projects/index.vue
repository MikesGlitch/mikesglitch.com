<template>
  <div>
    <h1>Projects Posts</h1>
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
