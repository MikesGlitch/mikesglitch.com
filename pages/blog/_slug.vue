<template>
  <article>
    <info-box :time-to-read="article.timeToRead">
      <template #info-box>
      <!-- This is a vue component inside markdown using slots -->
      </template>
    </info-box>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <!--
    <ul>
      <li v-for="link of article.toc" :key="link.id">
        <NuxtLink :to="`#${link.id}`">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul> -->
    <nuxt-content :document="article" />
    <p>Post last updated: {{ article.updatedAt }}</p>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  }
}
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
