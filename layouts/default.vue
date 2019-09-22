<template>
  <div id="app">
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Welcome',
      titleTemplate: '%s | Jordan Kaiser'
    }
  }
}
</script>
<style lang="scss">
@import '~assets/scss/main';
</style>
