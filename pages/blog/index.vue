<template>
  <div class="blog-list-page">
    <div class="blog-list">
      <div class="blog-list__content">
        <h1>Blog Posts</h1>
        <div class="blog-posts">
          <div v-for="article of articles" :key="article.slug" class="blog-post">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <Card :title="article.title">
                <template #image>
                  <img :src="article.img || defaultImageSrc" alt="Avatar" @error="replaceByDefault">
                </template>
                <p>{{ article.description }}</p>
              </Card>
            </NuxtLink>
          </div>
        </div>
      </div>
      <BlogSidebar />
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

.blog-list-page {
  h1 {
    margin: 0;
  }

  .blog-list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto;

    @include screen-breakpoints.desktop {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    }

    .blog-sidebar {
      grid-row: 1;

      @include screen-breakpoints.tablet {
        grid-column: 5;
        grid-row: unset;
      }
    }

    &__content {
        display: grid;
        grid-row: 2;
        grid-gap: 10px;
        grid-template-columns: auto;
        padding: 1rem 0;

        @include screen-breakpoints.tablet {
          grid-row: unset;
          grid-column: 1/span 4;
          grid-template-columns: auto auto;
        }

        @include screen-breakpoints.desktop {
          grid-template-columns: auto auto auto;
        }

      .blog-posts {
        display: grid;
        grid-row: 2;
        grid-gap: 10px;
        grid-template-columns: auto;

        @include screen-breakpoints.tablet {
          grid-row: unset;
          grid-column: 1/span 4;
          grid-template-columns: auto auto;
        }

        @include screen-breakpoints.desktop {
          grid-template-columns: auto auto auto;
        }

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
