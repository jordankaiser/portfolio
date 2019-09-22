<template>
  <div>
    <section class="introduction">
      <div class="introduction__container container">
        <div class="introduction__illustration-headline">
          <div class="introduction__headline">
            <h1>
              <span class="introduction__first-name">Jordan</span>
              <span class="introduction__last-name">Kaiser</span>
            </h1>
          </div>
          <!-- TODO: Work on getting illustration in. Artwork is produced. -->
          <div class="introduction__illustration"></div>
        </div>
      </div>
    </section>
    <choose-tool />
  </div>
</template>

<script>
import ChooseTool from '~/components/ChooseTool.vue'
export default {
  head() {
    return {
      title: 'Home'
    }
  },
  components: {
    ChooseTool
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
  &__illustration-headline {
    display: flex;
    justify-content: space-between;
    flex: 0 1 auto;
    width: 100%;
  }
  &__headline {
    flex: 0 1 auto;
    width: 50%;

    h1 {
      line-height: 2.2rem;
    }
  }
  &__first-name {
    display: block;
    color: $white;
    font-size: $fs1;
    font-weight: 300;
  }
  &__last-name {
    display: block;
    font-size: $fs5;
    font-weight: 700;
    color: $color-red-dark;
  }
  &__illustration {
    flex: 0 1 auto;
    width: 50%;
  }
}
</style>
