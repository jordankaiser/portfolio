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
      titleTemplate: '%s | Jordan Kaiser',
      bodyAttrs: {
        class: this.bodyClasses
      }
    }
  },
  data: function() {
    return {
      bodyClasses: null
    }
  },
  created: function() {
    this.bodyClasses = ['js-enabled']
  }
}
</script>
<style lang="scss">
@import '~assets/scss/main';
</style>
