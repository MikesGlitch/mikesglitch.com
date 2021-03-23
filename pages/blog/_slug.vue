<template>
  <div class="blog-page">
    <h1>{{ article.title }}</h1>
    <div class="blog-post">
      <div class="blog-post__content">
        <article>
          <info-box :time-to-read="article.timeToRead">
            <template #info-box>
              <!-- This is a vue component inside markdown using slots -->
            </template>
          </info-box>
          <!-- <h1>{{ article.title }}</h1> -->
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
      </div>
      <BlogSidebar />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  }
}
</script>

<style lang="scss" scoped>
@use 'assets/css/screen-breakpoints';
.blog-page {
  .blog-post {
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
      grid-row: 2;
      grid-gap: 10px;

      @include screen-breakpoints.tablet {
        grid-row: unset;
        grid-column: 1/span 4;
      }
    }
  }

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
}
</style>
