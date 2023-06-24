<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk?: string) => titleChunk ? `MikesGlitch | ${titleChunk}` : 'MikesGlitch',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    // favicons etc
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffd800' }
  ]
})

useSeoMeta({
  ogUrl: 'https://mikesglitch.com',
  ogType: 'website',
  ogTitle: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps',
  ogDescription: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.',
  ogImage: 'https://mikesglitch.com/open-graph-image.png',
  twitterCard: 'summary',
  twitterDescription: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.',
  twitterImage: 'https://mikesglitch.com/open-graph-image.png',
  twitterTitle: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps',
  msapplicationTileColor: '#ffd800',
  themeColor: '#ffd800',
  description: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.'
})
</script>
