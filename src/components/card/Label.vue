<template>
  <div class="card__image-label">
    <div class="background" />
    <span class="text-white">
      {{ label }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 1.25rem;
$paddingTopBottom: 0.5rem;
$heightAndPadding: $height + ($paddingTopBottom * 2);
$adjustedPosition: -$heightAndPadding;
$backgroundWidth: 50%;

.card__image-label {
  position: relative;

  .background {
    position: absolute;
    top: $adjustedPosition;
    left: 0;
    width: $backgroundWidth;
    border-bottom: $heightAndPadding solid hotpink;
    border-right: $heightAndPadding solid transparent;
  }

  span {
    font-weight: bold;
    position: absolute;
    top: $adjustedPosition;
    height: $height;
    padding: $paddingTopBottom 1rem $paddingTopBottom 0.5rem;
    line-height: $height;
    vertical-align: middle;
  }
}
</style>
