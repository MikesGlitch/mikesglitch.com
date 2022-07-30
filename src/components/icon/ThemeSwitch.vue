<template>
  <div>
    <ClientOnly>
      <!-- Client-only because the value of the themes are set in onmounted (client side).
    There will always be a mismatch between client and server render -->
      <Button @click="onToggle">
        {{ isLightTheme ? 'Light' : 'Dark' }}
      </Button>
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
