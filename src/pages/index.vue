<template>
  <div>
    <div class="about-me-summary">
      <div class="about-me-summary__container container">
        <div class="about-me-summary__description">
          <h1>Hi, I'm Mike.</h1>
          <p>I'm a software engineer living in Glasgow Scotland. This website is a digital expression of life in programming.</p>
          <!-- <p><strong>Change the design to be more simple and remove the video player in favor of card stuff - same kind of thumbnails etc as youtube uses - seperate page and we just link to it here.  Also see what you can do with dark theme to make it a bit faster </strong></p> -->
        </div>
        <img class="about-me-summary__image" src="/avatar.png" alt="Picture of me">
      </div>
    </div>
    <div class="latest-videos container">
      <h1>Latest videos</h1>
      <div v-if="videoToPlay && latestVideos" class="recent-video">
        <div class="recent-video__player">
          <iframe
            v-if="videoToPlay"
            :src="videoToPlay"
            frameborder="0"
            allowfullscreen
          />
        </div>
        <div class="recent-video__info">
          <VideoList
            :videos="latestVideos"
            :current-video="videoToPlay"
            :on-change-video="onChangeVideo"
          />
        </div>
      </div>
    </div>

    <!--
      REFERENCE MATERIAL:
      https://flaviocopes.com/
      https://www.taniarascia.com/
    -->

    <!--
    <div class="info-cards">
      <Card title="Hi, my name is Michael" class="info-card">
        <p>
          Theme Inspiration <a href="https://colorlib.com/wp/best-personal-blog-wordpress-themes/">https://colorlib.com/wp/best-personal-blog-wordpress-themes/</a>
      <br>
      Add Tel icon to blog and have it phone my phone

          <a
            href="tel:07936707118"
          >"tel:07936707118"</a>
          <br>
          Figma -
          <a
            href="https://www.figma.com/file/PoFdPpLBabdM4s78Glr9It/mikesglitch.github.io"
          >https://www.figma.com/file/PoFdPpLBabdM4s78Glr9It/coderevver.github.io</a>
        </p>

        <p>Consider making a ping thingymajig that can keep my vercel site up and running constantly rather than it falling asleep</p>
      </Card>

      <Card class="info-card">
        <p>Logo? <a href="https://www.youtube.com/watch?v=7Xyg8Ja7dyY">https://www.youtube.com/watch?v=7Xyg8Ja7dyY</a></p>
        <p>Fonts: https://www.quicksprout.com/best-font-for-website/</p>
        <p>Design:  <a href="youtube.com/watch?v=LXuWtCTeCHU">Web design examples</a></p>
        <p>Maybe remove the video from the homepage - Add it somewhere else or make it a small video</p>
        <p>Go with a more standard "trendy" frontpage and move the videos to the project pages/blogs</p>
        <p>Maybe there's a reason PluralSight and Youtube and https://coursetro.com/ and https://www.killersites.com/ and Twitch etc don't put full videos on their homepages</p>
      </Card>

      <Card class="info-card">
        Link to youtube and twitch - maybe in nav, maybe make a page for it. So
        like a "Live Stream" link that links to YouTube and Twitch and maybe
        shows past live streams
      </Card>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData () {
    const response = await fetch(
      `${process.env.NUXT_ENV_API_BASE_URL}/youtube-videos`
    )
      .then(res => res.json())
      .catch(() => null)

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

<style lang="scss" scoped>
@use "assets/css/screen-breakpoints";

.light-theme {
  .about-me-summary {
    background-color: #f1f4f8;
  }
}

.dark-theme {
  .about-me-summary {
    background-color: #111;
  }
}

.about-me-summary {
  &__container {
    display: flex;
    flex-direction: row;
    padding: 3rem 0;
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__image {
    margin: 0 auto;
    vertical-align: middle;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
  }
}

.latest-videos {
  margin-top: 2rem;

  .recent-video {
    margin: 2rem auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto;

    @include screen-breakpoints.widescreen {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    &__player {
      /* falls back to 16/9, but otherwise uses ratio from HTML */
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;

      @include screen-breakpoints.widescreen {
        grid-column: span 3;
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
        grid-column: span 2;
      }
    }
  }
}

// .info-cards {
//   margin-top: 1rem;
//   display: grid;
//   grid-template-columns: auto;
//   grid-gap: 10px;

//   @include screen-breakpoints.tablet {
//     grid-template-columns: repeat(3, auto);
//   }
// }
</style>
