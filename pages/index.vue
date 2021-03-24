<template>
  <div>
    <div v-if="videoToPlay && latestVideos" class="recent-video">
      <div class="recent-video__player">
        <iframe v-if="videoToPlay" :src="videoToPlay" frameborder="0" allowfullscreen />
      </div>
      <div class="recent-video__info">
        <VideoList :videos="latestVideos" :current-video="videoToPlay" :on-change-video="onChangeVideo" />
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
        <p>Logo? <a href="https://www.youtube.com/watch?v=7Xyg8Ja7dyY">https://www.youtube.com/watch?v=7Xyg8Ja7dyY</a></p>
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
      <Card class="info-card">
        Link to youtube and twitch - maybe in nav, maybe make a page for it. So
        like a "Live Stream" link that links to YouTube and Twitch and maybe
        shows past live streams
      </Card>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData () {
    const response = await fetch(`${process.env.NUXT_ENV_API_BASE_URL}/youtube-videos`).then(res => res.json()).catch(() => null)

    return {
      videoToPlay: response?.latestVideoEmbedIframeUrl,
      latestVideos: response?.latestVideos
    }
  },
  methods: {
    onChangeVideo (video) {
      this.videoToPlay = video.iframeEmbedUrl
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

  @include screen-breakpoints.widescreen {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &__player {
    /* falls back to 16/9, but otherwise uses ratio from HTML */
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    @include screen-breakpoints.widescreen {
      grid-column: span 2;
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
    @include screen-breakpoints.widescreen {
      grid-column: span 1;
    }
  }
}

.info-cards {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;

  @include screen-breakpoints.tablet {
    grid-template-columns: repeat(2, auto);
  }
}
</style>
