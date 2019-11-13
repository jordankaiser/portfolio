<template>
  <div>
    <section class="introduction">
      <div class="introduction__container container">
        <introduction-dino />
        <div class="introduction__text">
          <p>
            Brief description of self amet nulla vel nunc placerat ultricies
            eget vel massa. Ut efficitur ex ut libero vestibulum porta.
            Vestibulum sed purus aliquet, consequat nisl vel.
          </p>
        </div>
        <div class="introduction__cta">
          <div class="cta-hero">
            <nuxt-link to="/styleguide" class="cta-hero__link">
              <div class="cta-hero__text">About Me</div>
              <div class="cta-hero__arrow">
                <cta-arrow />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="introduction__scroll-hint">
        <div class="scroll-hint">
          <p class="scroll-hint__text">Work</p>
          <img class="scroll-hint__arrow" src="~/assets/img/arrow-white.png" />
        </div>
      </div>
    </section>
    <choose-tool />
  </div>
</template>

<script>
/* eslint-disable-next-line */
import TweenLite from 'gsap/umd/TweenLite'
/* eslint-disable-next-line */
import TimelineLite from 'gsap/umd/TimelineLite'
import ChooseTool from '~/components/ChooseTool.vue'
import introductionDino from '~/components/introduction-dino/IntroductionDino.vue'
import CtaArrow from '~/components/CTAArrow'
if (process.client) {
  /* eslint-disable-next-line */
  const MorphSVGPlugin = require('~/assets/vendor/MorphSVGPlugin');
}
export default {
  head() {
    return {
      title: 'Home'
    }
  },
  components: {
    ChooseTool,
    introductionDino,
    CtaArrow
  },
  mounted: function() {
    const timeline = new TimelineLite({ paused: true })

    timeline
      .to('.cta-hero #cta-arrow-up', 0.2, {
        morphSVG: '#cta-arrow-circle'
      })
      .to('.cta-hero #cta-arrow-up', 0.2, {
        morphSVG: '#cta-arrow-down'
      })

    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('mouseenter', () => {
        timeline.play()
      })
    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('mouseleave', () => {
        timeline.play().reverse()
      })
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
  position: relative;
  background-color: $color-red;
  width: 100%;
  height: 100vh;

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
  }
  &__text {
    color: $color-white;
  }
  &__cta {
    margin-top: 30px;
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
