<template>
  <div class="blog-posts">
    <div v-for="article of data" :key="article.slug" class="blog-post">
      <NuxtLink :to="article.path">
        <Card :title="article.title">
          <template #image>
            <img :src="article.img || defaultImageSrc" alt="Avatar" @error="replaceByDefault">
          </template>
          <template #image-label>
            <CardLabel v-if="article.category" :label="article.category" />
          </template>
          <p>{{ article.description }}</p>
        </Card>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    defaultImageSrc: {
      type: String,
      required: false,
      default: '/blog-assets/placeholder.webp'
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
  grid-row: 2;
  grid-gap: 10px;
  grid-template-columns: auto;
  @include screen-breakpoints.tablet {
    grid-row: unset;
    grid-column: 1/span 4;
    grid-template-columns: repeat(2, auto);
  }
  @include screen-breakpoints.desktop {
    grid-template-columns: repeat(3, auto);
  }
  img {
    width: 100%;
  }
}
</style>
