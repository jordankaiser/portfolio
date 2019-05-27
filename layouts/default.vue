<template>
  <div id="app">
    <logo-mark />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import LogoMark from '~/components/LogoMark.vue'
export default {
  head() {
    return {
      title: 'Welcome',
      titleTemplate: '%s | Design Report'
    }
  },
  components: {
    LogoMark
  }
}
</script>
<style lang="scss">
@import '~assets/scss/main';
</style>
