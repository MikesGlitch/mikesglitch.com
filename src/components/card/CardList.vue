<template>
  <div class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <div v-for="article of data" :key="article._path">
      <NuxtLink v-if="article._path" :to="article._path">
        <Card :title="article.title">
          <template #image>
            <img class="object-cover w-full" :src="article.img || defaultImageSrc" alt="Avatar" @error="replaceByDefault">
          </template>
          <template #image-label>
            <CardLabel v-if="article.category" :label="article.category" />
          </template>
          <p>{{ article.description }}</p>
        </Card>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface CardData {
    _path: string
    title: string
    img: string
    category: string
    description: string
}

const props = defineProps({
  data: {
    type: Array<CardData>,
    required: true
  },
  defaultImageSrc: {
    type: String,
    required: false,
    default: '/blog-assets/placeholder.webp'
  }
})
const replaceByDefault = (e) => {
  e.target.src = props.defaultImageSrc
}
</script>
