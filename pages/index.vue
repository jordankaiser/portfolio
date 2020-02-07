<template>
  <div>
    <bg-fun />
    <!-- Intro section -->
    <section class="introduction animated">
      <div class="introduction__container container">
        <introduction-dino />
        <div class="introduction__text dino-fun-trigger">
          <p>
            Brief description of self amet nulla vel nunc placerat ultricies
            eget vel massa. Ut efficitur ex ut libero vestibulum porta.
            Vestibulum sed purus aliquet, consequat nisl vel. Donec non felis et
            turpis tempor.
          </p>
        </div>
        <div class="introduction__cta">
          <cta-hero color="red" />
        </div>
      </div>
      <div class="introduction__scroll-hint dino-fun-trigger">
        <div class="scroll-hint">
          <p class="scroll-hint__text">Work</p>
          <img class="scroll-hint__arrow" src="~/assets/img/arrow-white.png" />
        </div>
      </div>
    </section>
    <!-- Work sections -->
    <works />
  </div>
</template>

<script>
import BgFun from '~/components/bg-fun/BGFun.vue'
import introductionDino from '~/components/introduction-dino/IntroductionDino.vue'
import CtaHero from '~/components/ctas/CTAHero'
import Works from '~/components/Works'
export default {
  head() {
    return {
      title: 'Home'
    }
  },
  components: {
    introductionDino,
    CtaHero,
    Works,
    BgFun
  },
  mounted: function() {
    // Intersection Observer example.
    // this.$nextTick(() => {
    //   const myImg = document.querySelector('.introduction')
    //   const observer = new IntersectionObserver((entry, observer) => {
    //     if (entry[0].intersectionRatio > 0) {
    //       console.log('in the view')
    //     } else {
    //       console.log('out of view')
    //     }
    //   })
    //   observer.observe(myImg)
    // })
    // Uncomment to simulate a 1 second delay. Used for building loading animations. Have this fire on a click event. Kind of working maybe.
    // function asyncData() {
    /* eslint-disable */
      // return new Promise(resolve => {
      //   setTimeout(function() {
      //     resolve({ name: 'world' })
      //   }, 5000)
      // })
      /* eslint-enable */
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.introduction {
  @include animated;
  position: relative;
  background-color: $color-red;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 70%;
    background-color: $color-red-light;
    border-bottom-right-radius: 14px;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 80px;
    height: 14px;
    background-color: $color-red-light;
    border-top-left-radius: 14px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: 390px;
    z-index: 2;
  }
  &__text {
    color: $color-white;
  }
  &__cta {
    margin-top: 30px;
    opacity: 0;
  }
  &__scroll-hint {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 3px;
  }
}
.scroll-hint {
  overflow: hidden;

  &__text {
    display: inline-block;
    margin-right: 2px;
    font-size: 0.9rem;
    color: $color-white;
  }
  &__arrow {
    display: inline-block;
    position: relative;
    top: 2px;
    width: 12px;
    height: auto;
  }
}
</style>
