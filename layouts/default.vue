<template>
  <div id="app">
    <main>
      <nuxt />
    </main>
    <noscript inline-template>
      <style>
        .animated {
          visibility: visible !important;
        }
      </style>
    </noscript>
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
