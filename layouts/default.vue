<template>
  <div class="default-layout">
    <Nav />
    <div class="container-wrapper">
      <Nuxt class="container" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container-wrapper {
    flex: 1;
    padding: 0;
    width: 100%;
}
</style>
