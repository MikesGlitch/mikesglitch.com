<template>
  <Card>
    <div class="flex flex-col justify-between gap-2 h-full">
      <NuxtLink
        class="group flex-1"
        :to="to"
        :title="title"
        :external="true"
        target="_blank"
      >
        <span class="text-sm italic">⭐ {{ stars }} stars</span>
        <div class="flex flex-col gap-2 flex-1">
          <h5 class="font-bold group-hover:underline underline-offset-4 group-hover:text-hotpink">
            {{ title }}
          </h5>
          <span v-if="description" class="text-sm">{{ description }}</span>
        </div>
      </NuxtLink>
      <LinkButtonInternal v-if="article" :to="article" :title="title" text="Article" />
    </div>
  </Card>
</template>

<script type="ts" setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: undefined
  },
  description: {
    type: String,
    required: false,
    default: undefined
  },
  stars: {
    type: Number,
    required: true
  },
  article: {
    type: String,
    required: false,
    default: undefined
  }
})
</script>
