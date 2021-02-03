<template>
  <div>
    <div class="recent-video">
      <div class="recent-video__player">
        <iframe width="560" height="349" src="https://www.youtube.com/embed?max-results=1&controls=1&showinfo=1&rel=0&listType=user_uploads&list=kardkaper" frameborder="0" allowfullscreen />
      </div>
      <div class="recent-video__info">
        <p>Info about video</p>
      </div>
    </div>

    <div class="info-cards">
      <Card title="Hi, my name is Michael" class="info-card">
        <p>Figma - <a href="https://www.figma.com/file/PoFdPpLBabdM4s78Glr9It/mikesglitch.github.io">https://www.figma.com/file/PoFdPpLBabdM4s78Glr9It/coderevver.github.io</a></p>
      </Card>

      <Card class="info-card">
        <p>Switch to using css variables rather that scss variables  https://youtu.be/D-h8L5hgW-w?t=4682</p>
        <p>Fonts:  https://www.quicksprout.com/best-font-for-website/</p>
        <p>Note: Was thinking about movign this to a ssr app.  If i did that i'd lose the github domain.  That may be fine, new domains aren't that expensive.  mikesglitch.com is free.</p>
        <p>If I did switch to ssr I could be clever and load in the live stream only when it was live, load the last youtube video otherwise.</p>
      </Card>

      <Card class="info-card">
        <h1>Be careful with embedding a video - I don't want it to take over the page and it needs to look good.  See how other websties do it.</h1>
      </Card>
      <Card class="info-card">Link to youtube and twitch - maybe in nav, maybe make a page for it.  So like a "Live Stream" link that links to YouTube and Twitch and maybe shows past live streams</Card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
@import 'assets/css/screen-breakpoints';

.recent-video {
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;

  @include desktop {
    grid-template-columns: auto auto auto;
  }

  &__player {
    /* falls back to 16/9, but otherwise uses ratio from HTML */
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    @include desktop {
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
    color: hotpink;
    font-weight: bold;
    background-color: black;
    padding: 1rem;
  }
}

.info-cards {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;

  .info-card {
    // margin-top: 1rem;
  }

}
</style>
