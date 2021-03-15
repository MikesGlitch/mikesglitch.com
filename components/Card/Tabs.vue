<template>
  <div class="card-tabs">
    <div class="tab--active"><span><IconLightningBolt class="icon" /> Latest</span></div>
    <div class="tab"><span><IconHeart class="icon" /> Popular</span></div>
  </div>
</template>

<style lang="scss" scoped>
.card-tabs {
  display: flex;
  justify-content: space-between;
  text-align: center;

  .tab {
    width: 100%;
    padding: .8rem 1rem;

    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }

    border-left: 1px solid rgba(0,0,0,0.15);
    border-right: 1px solid rgba(0,0,0,0.15);
    border-bottom: 1px solid rgba(0,0,0,0.15);

    &--active {
      @extend .tab;
      color: black;
      border-top: solid 3px hotpink;
      border-left: none;
      border-right: none;
      border-bottom: none;
    }

    .icon {
      height: 1rem;
      vertical-align: middle;
    }
  }
}
</style>
