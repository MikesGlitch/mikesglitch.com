<template>
  <div>
    <client-only>
      <!-- Client-only because the value of the themes are set in onmounted (client side).
    There will always be a mismatch between client and server render -->
      <label class="switch">
        <input type="checkbox" :checked="isLightTheme" @change="onToggle">
        <span class="slider round"></span>
      </label>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    isLightTheme: {
      type: Boolean,
      required: true,
      default: false
    },
    onToggle: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'assets/css/global/variables';

$sliderColor: #ccc;

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider:before {
      transform: translateX(24px);
      background: white url('/sunny.png');
      background-repeat: no-repeat;
      background-position: center;
      box-shadow: 0 0px 5px $sliderColor;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $sliderColor;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      height: 35px;
      width: 35px;
      left: 0px;
      bottom: 4px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      transition: 0.4s;
      background: white url('/night.png');
      background-color: variables.$dark-theme-secondary-background-color;
      box-shadow: 0 0px 5px $sliderColor;
      background-repeat: no-repeat;
      background-position: center;
    }

    &.round {
      border-radius: 25px;
    }

    &.round:before {
      border-radius: 50%;
    }
  }
}
</style>
