<template>
  <div class="blog-list-page container">
    <div class="blog-list">
      <div class="blog-list__content">
        <CardList :data="data.filteredArticles" />
      </div>
      <!-- <BlogSidebar :tags="tags" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData(async () => {
  const articlesData = await queryContent("/blog")
    .only(["title", "description", "img", "_path", "tags", "category", "date"])
    .sort({ date: -1 })
    .find();

  const onlyUnique = (value, index, self) => self.indexOf(value) === index;
  const tagsData = articlesData.map((article) => article.tags).filter(onlyUnique); // currently only support 1
  return { tags: tagsData, articles: articlesData, filteredArticles: articlesData }
});

const filterByTag = (tag) => {
  data.value.filteredArticles = data.value.articles.filter((x) => x.tags === tag); // currently only filter by one
};
</script>

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";

.blog-list-page {
  h1 {
    margin: 0;
  }

  .blog-list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto;

    @include screen-breakpoints.desktop {
      // grid-template-columns: repeat(5, minmax(0, 1fr));
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
        grid-column: 1 / span 4;
        grid-template-columns: repeat(2, auto);
      }

      @include screen-breakpoints.desktop {
        grid-template-columns: repeat(3, auto);
      }
    }
  }
}
</style>
