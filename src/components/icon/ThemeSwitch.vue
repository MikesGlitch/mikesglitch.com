<template>
  <div>
    <ClientOnly>
      <!-- Client-only because the value of the themes are set in onmounted (client side).
    There will always be a mismatch between client and server render -->
      <!-- <button type="button" @click="onToggle">{{ isLightTheme ? 'Light' : 'Dark' }}</button> -->
      <TextButton @click="onToggle">{{ isLightTheme ? 'Light' : 'Dark' }}</TextButton>
      <!-- <label class="switch">
        <input type="checkbox" :checked="isLightTheme" @change="onToggle">
        <span class="slider round"></span>
      </label> -->
    </ClientOnly>
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