<template>
  <div class="bg-fun animated">
    <div class="bg-fun__left">
      <div class="bg-fun__section bg-fun__section--one">
        <dino orientation="right"></dino>
      </div>
      <div class="bg-fun__section bg-fun__section--two">
        <dino orientation="right-pointed-up"></dino>
      </div>
    </div>
    <div class="bg-fun__right">
      <div class="bg-fun__section bg-fun__section--one"></div>
      <div class="bg-fun__section bg-fun__section--two">
        <dino orientation="left"></dino>
      </div>
    </div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
import { scrollMagicInit } from '~/plugins/helpers/scrollMagicInit.js'
import Dino from '~/components/bg-fun/Dino.vue'
export default {
  components: {
    Dino
  },
  mounted: function() {
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const TimelineLite = vm.$GSAP.TimelineLite

    // Determine viewport width.
    window.addEventListener(
      'resize',
      debounce(() => {
        viewportDimensions = getViewportDimensions()
        mobileOrDesktop(viewportDimensions.width)
      }, 200)
    )

    // Determine which animations to play by viewport width.
    mobileOrDesktop(viewportDimensions.width)
    function mobileOrDesktop(viewportWidth) {
      if (viewportWidth >= 1024) {
        isDesktop()
      }
    }

    // Do desktop animations.
    function isDesktop() {
      const timelineOne = new TimelineLite({ paused: true })
      const timelineTwo = new TimelineLite({ paused: true })
      const timelineThree = new TimelineLite({ paused: true })
      // const randomNumber = Math.floor(Math.random() * 2)
      const randomNumber = 2
      const leftDinoOne = {
        container: document.querySelector(
          '.bg-fun__left .bg-fun__section--one .dino-fun'
        ),
        eyeOpen: document.querySelector(
          '.bg-fun__left .bg-fun__section--one .dino-fun__artwork--eye-open'
        ),
        eyeClosed: document.querySelector(
          '.bg-fun__left .bg-fun__section--one .dino-fun__artwork--eye-closed'
        )
      }
      const leftDinoTwo = {
        container: document.querySelector(
          '.bg-fun__left .bg-fun__section--two .dino-fun'
        ),
        eyeOpen: document.querySelector(
          '.bg-fun__left .bg-fun__section--two .dino-fun__artwork--eye-open'
        ),
        eyeClosed: document.querySelector(
          '.bg-fun__left .bg-fun__section--two .dino-fun__artwork--eye-closed'
        )
      }
      const rightDinoOne = {
        container: document.querySelector(
          '.bg-fun__right .bg-fun__section--two .dino-fun'
        ),
        eyeOpen: document.querySelector(
          '.bg-fun__right .bg-fun__section--two .dino-fun__artwork--eye-open'
        ),
        eyeClosed: document.querySelector(
          '.bg-fun__right .bg-fun__section--two .dino-fun__artwork--eye-closed'
        )
      }
      switch (randomNumber) {
        case 0:
          timelineOne.paused(false)
          scrollMagicInit(vm, timelineOne, '.screenshot-nsf', 0.5)
          break
        case 1:
          timelineTwo.paused(false)
          scrollMagicInit(vm, timelineTwo, '.screenshot-nsf', 0.5)
          break
        case 2:
          timelineThree.paused(false)
          scrollMagicInit(vm, timelineThree, '.screenshot-nsf', 0.5)
          break
      }

      // Timeline one.
      timelineOne
        .set('.bg-fun', { visibility: 'visible' })
        .set('.bg-fun__left .bg-fun__section--one', {
          justifyContent: 'flex-start',
          alignItems: 'center'
        })
        .set([leftDinoOne.eyeClosed], { opacity: 0 })
        .fromTo(
          leftDinoOne.container,
          1,
          { x: -135, rotation: 170 },
          { x: -95, rotation: 180 },
          '+=1'
        )
        .to(leftDinoOne.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
        .to(leftDinoOne.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
        .to(leftDinoOne.container, 0.25, { x: -145, rotation: 170 }, '+=0.5')

      // Timeline two.
      timelineTwo
        .set('.bg-fun', { visibility: 'visible' })
        .set('.bg-fun__right .bg-fun__section--two', {
          justifyContent: 'flex-end',
          alignItems: 'center'
        })
        .set([rightDinoOne.eyeClosed], { opacity: 0 })
        .fromTo(
          rightDinoOne.container,
          0.5,
          { x: 90, rotation: 15 },
          { x: 44, rotation: 0 },
          '+=1'
        )
        .to(rightDinoOne.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
        .to(rightDinoOne.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
        .to(rightDinoOne.container, 0.25, { x: 90, rotation: 15 }, '+=0.5')

      // Timeline three.
      timelineThree
        .set('.bg-fun', { visibility: 'visible' })
        .set('.bg-fun__left .bg-fun__section--two', {
          justifyContent: 'center',
          alignItems: 'flex-end'
        })
        .set([leftDinoTwo.eyeClosed], { opacity: 0 })
        .fromTo(
          leftDinoTwo.container,
          0.5,
          { y: 90, rotation: -25 },
          /* eslint-disable-next-line no-undef */
          { y: 30, rotation: 5, ease: Back.easeOut.config(1.7) },
          '+=1'
        )
        .to(leftDinoTwo.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
        .to(leftDinoTwo.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
        .to(leftDinoTwo.container, 0.2, { y: 90, rotation: -25 }, '+=0.5')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.bg-fun {
  @include animated;
  @include breakpoint($large) {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;

    &__left {
      display: flex;
      flex-direction: column;
      flex: 0 1 auto;
      width: calc(50% - 300px);
      height: 100%;
      margin-right: 300px;
    }
    &__right {
      display: flex;
      flex-direction: column;
      flex: 0 1 auto;
      width: calc(50% - 300px);
      height: 100%;
      margin-left: 300px;
    }
    &__section {
      display: flex;
      // justify-content: flex-start;
      // align-items: center;
      flex: 0 1 auto;
      height: 100%;
      overflow: hidden;

      .bg-fun__right & {
        justify-content: flex-end;
      }
    }
  }
}
</style>
