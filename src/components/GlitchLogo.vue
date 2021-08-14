<template>
  <figure>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      class="filterwrapper"
    >
      <defs>
        <svg id="glitchmask-r" width="100%" height="100%" viewbox="0 0 100 100" preserveAspectRatio="none">
          <line class="top-r" x1="0" y1="0" x2="100%" y2="0"> </line>
          <line class="bot-r" x1="0" y1="100%" x2="100%" y2="100%"></line>
        </svg>
        <svg id="glitchmask-g" width="100%" height="100%" viewbox="0 0 100 100" preserveAspectRatio="none">
          <line class="top-g" x1="0" y1="0" x2="100%" y2="0"></line>
          <line class="bot-g" x1="0" y1="100%" x2="100%" y2="100%"></line>
        </svg>

        <filter
          id="filter"
          color-interpolation-filters="sRGB"
          width="100%"
          heigth="100%"
          x="0"
          y="0"
        >
          <feFlood flood-color="white" result="white" />

          <!-- red text start -->
          <feFlood flood-color="red" result="REDTXT_FLOOD_10" />
          <feComposite operator="in" in="REDTXT_FLOOD_10" in2="SourceAlpha" result="REDTXT_COMP_20" />
          <feOffset in="SourceGraphic" dx="-1" dy="0" result="REDTXT_OFFSET_30" />
          <feMerge result="REDTXT_MERGE_40">
            <feMergeNode in="hotpink" />
            <feMergeNode in="REDTXT_COMP_20" />
            <feMergeNode in="REDTXT_OFFSET_30" />
          </feMerge>
          <feImage id="mask-r" preserveAspectRatio="none" result="REDTXT_IMG_50" xlink:href="#glitchmask-r" />
          <feComposite in2="REDTXT_IMG_50" in="REDTXT_MERGE_40" operator="out" result="REDTXT_COMP_60" />
          <!-- red text end -->

          <!-- green text start -->
          <feFlood flood-color="black" result="GREENTXT_FLOOD_10" />
          <feComposite operator="in" in="GREENTXT_FLOOD_10" in2="SourceAlpha" result="GREENTXT_COMP_20" />
          <feOffset in="SourceGraphic" dx="1" dy="0" result="GREENTXT_OFFSET_30" />
          <feMerge result="GREENTXT_MERGE_40">
            <feMergeNode in="hotpink" />
            <feMergeNode in="GREENTXT_COMP_20" />
            <feMergeNode in="GREENTXT_OFFSET_30" />
          </feMerge>
          <feImage id="mask-g" preserveAspectRatio="none" result="GREENTXT_IMG_50" xlink:href="#glitchmask-g" />
          <feComposite in2="GREENTXT_IMG_50" in="GREENTXT_MERGE_40" operator="out" result="GREENTXT_COMP_60" />
          <!-- green text end -->

          <feMerge result="MERGE_10">
            <feMergeNode in="SourceGraphic" />
            <!-- <feMergeNode in="REDTXT_COMP_60" /> -->
            <feMergeNode in="GREENTXT_COMP_60" />
          </feMerge>
        </filter>
      </defs>
    </svg>
    <svg width="100%" height="100%">
      <text class="glitch-filter-example__filtered-text" x="0" y="0" text-anchor="middle" transform="translate(70 34)">
        <tspan class="noglitch">Mikes</tspan><tspan class="glitch" fill="hotpink">Glitch</tspan>
      </text>
    </svg>
  </figure>
</template>

<style lang="scss" scoped>
@use 'sass:math';

figure {
  height: 100%;
  width: 100%;
  margin: 0;
}

.filterwrapper {
    position: fixed;
    z-index: -1;
    pointer-events: none;
    opacity: 0;
}

.glitch-filter-example {
    display: block;
    position: relative;
    text-align: center;
    margin: 0;
    padding: 4em 0 2em;
}

.glitch-filter-example__filtered-text {
    fill: black;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    padding: 0;
    display: block;
}

.glitch {
    filter: url(#filter);
}

.top-r,
.bot-r,
.top-g,
.bot-g {
    stroke: black;
}

.top-r {
    stroke-width: 100px;
    animation: topani 3.5s linear infinite;
}

.bot-r {
    stroke-width: 100px;
    animation: botani 4s linear infinite;
}

.top-g {
    stroke-width: 50px;
    animation: topani 4s linear reverse infinite;
}

.bot-g {
    stroke-width: 50%;
    animation: botani 3.5s linear reverse infinite;
}

@mixin createRandomKeyframes($numberOfKeys) {
    $delta: round(math.div(100, $numberOfKeys));

    @for $i from 1 through $numberOfKeys {
        $time: ($i*$delta - random($delta)) +'%';
        #{$time} {
            stroke-width: random(200) + px;
        }
    }
}

@keyframes topani {
    @include createRandomKeyframes(5 + random(10));
}

@keyframes botani {
    @include createRandomKeyframes(5 + random(10));
}
</style>
