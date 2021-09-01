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
        <img class="about-me-summary__image" src="/avatar.png" alt="Picture of me">
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
