<template>
  <div>
    <h1>Blog Posts</h1>
    <div class="blog-posts">
      <div v-for="article of articles" :key="article.slug" class="blog-post">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <Card :title="article.title">
            <template #image>
              <img src="~/assets/images/img_avatar.webp" alt="Avatar" style="width:100%">
            </template>
            <p>{{ article.description }}</p>
          </Card>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/screen-breakpoints';

.blog-posts {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;

  @include tablet {
    grid-template-columns: auto auto;
  }

  @include desktop {
    grid-template-columns: auto auto auto;
  }
}
</style>
