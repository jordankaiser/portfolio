<template>
  <div>
    <section class="introduction">
      <div class="introduction__container container">
        <introduction-dino />
      </div>
    </section>
    <choose-tool />
  </div>
</template>

<script>
import ChooseTool from '~/components/ChooseTool.vue'
import introductionDino from '~/components/introduction-dino/IntroductionDino.vue'
export default {
  head() {
    return {
      title: 'Home'
    }
  },
  components: {
    ChooseTool,
    introductionDino
  }
  // Uncomment to simulate a 1 second delay. Used for building loading animations.
  // asyncData() {
  //   /* eslint-disable */
  //   return new Promise(resolve => {
  //     setTimeout(function() {
  //       resolve({ name: 'world' })
  //     }, 5000)
  //   })
  //   /* eslint-enable */
  // }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.introduction {
  background-color: $color-red;
  width: 100%;
  height: 100vh;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
}
</style>
