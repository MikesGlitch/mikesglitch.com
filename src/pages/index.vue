<template>
  <div>
    <div class="about-me-summary">
      <div class="about-me-summary__container container">
        <div class="about-me-summary__description">
          <h1>Hi, I'm Mike.</h1>
          <p>I'm a full stack web developer from Glasgow, Scotland.</p>
          <p>Check out my <NuxtLink to="/blog">articles</NuxtLink>, <NuxtLink to="/videos">videos</NuxtLink> and <a href="https://www.youtube.com/channel/UCfx1yOrSVwlO-VwpKxvlqow" title="My Youtube channel">live streams!</a></p>
          <p>Feel free to take a look at my latest projects on <a href="https://github.com/MikesGlitch" title="My github" target="_blank">Github</a>.</p>
        </div>
        <AvatarMe class="about-me-summary__image" />
        <!-- <img class="about-me-summary__image" src="/avatar.png" alt="Picture of me"> -->
      </div>
    </div>

    <div class="container">
      <div class="latest-articles">
        <h2>Latest Articles</h2>
        <div v-for="article of blogArticles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <p>{{ article.title }}</p>
          </NuxtLink>
        </div>
      </div>

      <div class="latest-videos">
        <h2>Latest Videos</h2>
        <div v-for="video of latestVideos" :key="video.id">
          <NuxtLink to="/videos">
            <p>{{ video.title }}</p>
          </NuxtLink>
        </div>
      </div>

      <div class="latest-projects">
        <h2>Latest Projects</h2>
        <div v-for="article of projectArticles" :key="article.slug">
          <NuxtLink :to="{ name: 'projects-slug', params: { slug: article.slug } }">
            <p>{{ article.title }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const blogArticlesPromise = $content('blog', params.slug)
      .only(['title', 'description', 'slug', 'tags', 'category', 'date'])
      .sortBy('date', 'desc')
      .limit(10)
      .fetch()

    const projectArticlesPromise = $content('projects', params.slug)
      .only(['title', 'description', 'slug', 'tags', 'category', 'date'])
      .sortBy('date', 'desc')
      .limit(10)
      .fetch()

    const videosPromise = fetch(
      `${process.env.NUXT_ENV_API_BASE_URL}/youtube-videos`
    )
      .then(res => res.json())
      .catch(() => null)

    const [blogArticles, projectArticles, videos] = await Promise.all([blogArticlesPromise, projectArticlesPromise, videosPromise])

    let latestVideos = []
    if (videos?.latestVideos) {
      latestVideos = videos.latestVideos.slice(0, 10)
    }

    return {
      blogArticles,
      projectArticles,
      latestVideos
    }
  }
}
</script>
<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";
@use "assets/css/global/variables";

.light-theme {
  .about-me-summary {
    background-color: variables.$light-grey;
  }
}

.dark-theme {
  .about-me-summary {
    background-color: variables.$dark-theme-secondary-background-color;
  }
}

.about-me-summary {
  &__container {
    display: flex;
    flex-direction: row;
    padding: 0;

    @include screen-breakpoints.tablet {
      padding: 3rem 0;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: variables.$gutter-x;
    padding-right: variables.$gutter-x;

    @include screen-breakpoints.tablet {
      padding: 0;
    }
  }

  &__image {
    margin-left: auto;
    vertical-align: middle;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: none;

    @include screen-breakpoints.tablet {
      display: block;
    }
  }
}
</style>
