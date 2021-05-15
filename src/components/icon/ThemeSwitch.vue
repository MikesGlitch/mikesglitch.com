<template>
  <div>
    <client-only>
      <!-- Client-only because the value of the themes are set in onmounted (client side).
    There will always be a mismatch between client and server render -->
      <svg
        v-if="isLightTheme"
        viewBox="0 0 458 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M453.127 415.633C405.812 473.929 334.402 509.5 256.211 509.5C116.104 509.5 2.71106 395.929 2.71106 256C2.71106 115.893 116.282 2.5 256.211 2.5C271.748 2.50231 287.253 3.92104 302.533 6.73855C311.234 8.3465 313.175 19.9729 305.506 24.3372L306.742 26.51L305.506 24.3372C241.89 60.5399 202.744 127.782 202.744 200.904C202.744 327.845 318.225 424.262 443.974 400.314C452.63 398.665 458.711 408.752 453.127 415.633Z"
          fill="#FFD700"
          stroke="black"
          stroke-width="15"
        />
      </svg>

      <svg
        v-if="!isLightTheme"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="sun"
        class="svg-inline--fa fa-sun fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
        ></path>
      </svg>
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
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  color: gold;
  width: 25px;
  height: 25px;
}
</style>
