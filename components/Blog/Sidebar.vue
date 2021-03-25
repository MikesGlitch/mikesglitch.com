<template>
  <div class="blog-sidebar">
    <div class="about-me-summary">
      <img class="about-me-summary__image" src="/avatar.png" alt="Picture of me">
      <h4 class="about-me-summary__title">About me</h4>
      <p class="about-me-summary__description">Small paragraph about who I am and what I'm using the blog for</p>
    </div>
    <div class="search-site">
      <h4 class="search-site__title">Search site</h4>
      <input type="search" />
      <button>Search</button>
    </div>
    <div class="tags-filters">
      <h4 class="tags-filters__title">Tags</h4>
      <div class="tags-filters__tags">
        <!-- <a class="tag active" href="javascript:void(0)">All</a> -->
        <a v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</a>
      </div>
    </div>
    <!-- <div class="category-filters">
      <h4 class="category__title">Categories - might delete</h4>
      <div class="category__categories">
        <a class="" href="javascript:void(0)">Web development</a>
        <a class="" href="javascript:void(0)">Flutter Desktop</a>
        <a class="" href="javascript:void(0)">Old stuff</a>
      </div>
    </div> -->
    <div class="rss-feed">
      <h4 class="rss-feed__title">RSS Feed</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: false,
      default: () => []
    },
    onChangeTheme: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-sidebar {
  padding: 1rem;

  .about-me-summary {
    display: flex;
    flex-direction: column;

    &__image {
      margin: 0 auto;
      vertical-align: middle;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
    }

    &__title {
      margin: 0;
    }

    &__description {
      margin: 0;
    }
  }

  .search-site {
    margin-top: 1rem;
  }

  .category-filters {
    margin-top: 1rem;
  }

  .tags-filters {
    margin-top: 1rem;

    &__tags{
      display: flex;
      flex-wrap: wrap;

      .tag {
        margin-right: .5rem;
        margin-bottom: .5rem;
        background-color: white;
        border-radius: 15px;
        padding: 0.5rem 1rem;
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
        font-weight: bold;

        &:hover {
          background-color: hotpink;
          color: white;
        }

        &.active {
          background-color: hotpink;
          color: white;
        }
      }
    }
  }
}
</style>
