<template>
  <span :class="{ typewriter: runningTypewriter }">
    {{ descriptionText }}
  </span>
</template>

<script lang="ts" setup>
const descriptions = ref(['Product Oriented', 'Full Stack', 'Web Developer'])
const currentDescriptionPos = {
  index: 0,
  charIndex: 0,
  reversing: false
}
const descriptionText = ref('')
const runningTypewriter = ref(true)

const stopTypewriter = () => {
  runningTypewriter.value = false
  clearInterval(descriptionTextInterval.value)
}

const getNewDescriptionText = () => {
  const currentDescription = descriptions.value[currentDescriptionPos.index]
  const lastDescription = currentDescriptionPos.index === descriptions.value.length - 1
  if (lastDescription && currentDescriptionPos.charIndex === currentDescription.length) {
    // last description and we're completed, so clear the interval
    stopTypewriter()
    return
  }

  if (currentDescriptionPos.reversing) {
    // move back to beginning of last word
    if (currentDescriptionPos.charIndex === 0) {
      currentDescriptionPos.reversing = false
      return
    }

    currentDescriptionPos.charIndex--
    descriptionText.value = descriptions.value[currentDescriptionPos.index - 1].substring(0, currentDescriptionPos.charIndex)
    return
  }

  if (currentDescriptionPos.charIndex >= currentDescription.length) {
    // move onto the next word
    currentDescriptionPos.reversing = true
    currentDescriptionPos.index++
    return
  }

  // in every other case we move the character position forward
  currentDescriptionPos.charIndex++
  descriptionText.value = currentDescription.substring(0, currentDescriptionPos.charIndex)
}

const descriptionTextInterval = ref<NodeJS.Timer>()

onMounted(() => {
  descriptionTextInterval.value = setInterval(async () => await getNewDescriptionText(), 100)
})

onBeforeUnmount(() => {
  if (descriptionTextInterval.value) {
    stopTypewriter()
  }
})
</script>
