<template>
  <div class="blog-page">
    <div class="blog-post">
      <div class="blog-post__content">
        <h1>{{ article.title }}</h1>
        <div class="blog-metadata">
          <span v-if="article.date" class="blog-metadata__item"><span>Updated at:</span> {{ toHumanReadableDate(article.date) }}</span>
          <span v-if="article.timeToRead" class="blog-metadata__item"><span>Time to read:</span> {{ article.timeToRead }}</span>
        </div>
        <hr />
        <article>
          <!-- <ul>
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul> -->
          <nuxt-content :document="article" />
        </article>
      </div>
      <!-- Dunno what to do with this sidebar - maybe just make another one.  Otherwise i'll have to pass in tags etc -->
      <BlogSidebar />
    </div>
  </div>
</template>

<script>
import { toHumanReadableDate } from './../../utils/dateUtils'

export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },
  methods: {
    toHumanReadableDate
  }
}
</script>

<style lang="scss" scoped>
@use 'assets/css/screen-breakpoints';
.blog-page {
  h1 {
    margin: 0;
  }

  .blog-metadata {
    margin-top: 1rem;
    color: #8a8a8a;
    font-style: italic;

    &__item {
      margin-right: 1rem;

      span {
        font-weight: bold;
      }
    }
  }

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
      padding: 1rem 0;

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
