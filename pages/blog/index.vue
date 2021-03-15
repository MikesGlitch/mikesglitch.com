<template>
  <div>
    <h1>Blog Posts - maybe add a bit to say if it's in category "old blog" that it may have dead links/old content</h1>
    <div class="blog-posts">
      <div v-for="article of articles" :key="article.slug" class="blog-post">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <Card :title="article.title">
            <template #image>
              <img :src="article.img || defaultImageSrc" @error="replaceByDefault" alt="Avatar">
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
      articles,
      defaultImageSrc: '/blog-assets/placeholder.jpg'
    }
  },

  methods: {
    replaceByDefault (e) {
      e.target.src = this.defaultImageSrc
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'assets/css/screen-breakpoints';

.blog-posts {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;

  img {
    width: 100%;
  }

  @include screen-breakpoints.tablet {
    grid-template-columns: auto auto;
  }

  @include screen-breakpoints.desktop {
    grid-template-columns: auto auto auto;
  }
}
</style>
