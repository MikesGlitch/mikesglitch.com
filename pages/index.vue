<template>
  <div>
    <div v-if="latestYoutubeVideoUrl && latestVideos" class="recent-video">
      <div class="recent-video__player">
        <iframe v-if="latestYoutubeVideoUrl" :src="latestYoutubeVideoUrl" frameborder="0" allowfullscreen />
      </div>
      <div class="recent-video__info">
        <VideoList :videos="latestVideos" />
      </div>
    </div>

    <div class="info-cards">
      <Card title="Hi, my name is Michael" class="info-card">
        <p>
          Theme Inspiration <a href="https://colorlib.com/wp/best-personal-blog-wordpress-themes/">https://colorlib.com/wp/best-personal-blog-wordpress-themes/</a>
          <br>
          Figma -
          <a
            href="https://www.figma.com/file/PoFdPpLBabdM4s78Glr9It/mikesglitch.github.io"
          >https://www.figma.com/file/PoFdPpLBabdM4s78Glr9It/coderevver.github.io</a>
        </p>
        <p><b><u><a target="_blank" href="https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/">Add a dark theme?</a></u></b></p>
      </Card>

      <Card class="info-card">
        <p>Fonts: https://www.quicksprout.com/best-font-for-website/</p>
        <p>Add caching for the backend - I'm hitting rate limits on google api's - <a href="https://stackoverflow.com/questions/21389823/is-there-a-free-online-data-cache-service">https://stackoverflow.com/questions/21389823/is-there-a-free-online-data-cache-service</a></p>
        <p>I can't just store it in localstorage because it runs serverside (SSR).  I need a server side cache</p>
      </Card>

      <Card class="info-card">
        <h1>
          Be careful with embedding a video - I don't want it to take over the
          page and it needs to look good. See how other websties do it.
        </h1>
      </Card>
      <Card
        class="info-card"
      >
        Link to youtube and twitch - maybe in nav, maybe make a page for it. So
        like a "Live Stream" link that links to YouTube and Twitch and maybe
        shows past live streams
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData () {
    const response = await fetch(`${process.env.NUXT_ENV_API_BASE_URL}/youtube-videos`).then(res => res.json()).catch(() => null)

    return {
      latestYoutubeVideoUrl: response?.latestVideoEmbedIframeUrl,
      latestVideos: response?.latestVideos
    }
  }
})
</script>

<style lang="scss">
@use "assets/css/screen-breakpoints";

.recent-video {
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;

  @include screen-breakpoints.desktop {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }

  &__player {
    /* falls back to 16/9, but otherwise uses ratio from HTML */
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    @include screen-breakpoints.desktop {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    @include screen-breakpoints.desktop {
      grid-column-start: 3;
      grid-column-end: 3;
    }
    // color: hotpink;
    // font-weight: bold;
    // background-color: black;
    // padding: 1rem;
  }
}

.info-cards {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;

  @include screen-breakpoints.tablet {
    grid-template-columns: auto auto;
  }

  .info-card {
    // margin-top: 1rem;
  }
}
</style>
