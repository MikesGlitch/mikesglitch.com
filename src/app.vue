<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.' },

    // Facebook
    { property: 'og:url', content: 'https://mikesglitch.com' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps' },
    { property: 'og:description', content: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.' },
    { property: 'og:image', content: 'https://mikesglitch.com/open-graph-image.png' },

    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:domain', content: 'mikesglitch.com' },
    { name: 'twitter:url', content: 'https://mikesglitch.com/' },
    { name: 'twitter:title', content: 'MikesGlitch.com | Delivering highly scalable, efficient and tested apps' },
    { name: 'twitter:description', content: 'Michael is a software developer focused on the delivery of highly scalable, efficient and tested applications.' },
    { name: 'twitter:image', content: 'https://mikesglitch.com/open-graph-image.png' },

    // Microsoft
    { name: 'msapplication-TileColor', content: '#ffd800' },
    { name: 'theme-color', content: '#ffd800' }
  ],
  link: [
    // { rel: 'icon', type: 'image/x-icon', href: 'https://mikesglitch.com/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&amp;display=swap' },

    // favicons etc
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffd800' }
  ]
})
</script>
