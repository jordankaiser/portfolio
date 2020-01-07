<template>
  <div class="bg-fun">
    <div class="bg-fun__left">
      <div class="bg-fun__section bg-fun__section--one">
        <dino orientation="right"></dino>
      </div>
      <div class="bg-fun__section bg-fun__section--two"></div>
      <div class="bg-fun__section bg-fun__section--three"></div>
      <div class="bg-fun__section bg-fun__section--four"></div>
    </div>
    <div class="bg-fun__right">
      <div class="bg-fun__section bg-fun__section--one"></div>
      <div class="bg-fun__section bg-fun__section--two">
        <dino orientation="left"></dino>
      </div>
      <div class="bg-fun__section bg-fun__section--three"></div>
      <div class="bg-fun__section bg-fun__section--four"></div>
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
      // const randomNumber = Math.floor(Math.random() * 2)
      const randomNumber = 0
      const timelineOne = new TimelineLite()
      const timelineTwo = new TimelineLite()
      switch (randomNumber) {
        case 0:
          initTimelineOne()
          break
        case 1:
          initTimelineTwo()
          break
        case 2:
          // randomTimeline = timelineThree
          break
        case 3:
          // randomTimeline = timelineFour
          break
      }

      // Timeline one.
      function initTimelineOne() {
        const leftDino = {
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
        const rightDino = {
          container: document.querySelector(
            '.bg-fun__right .bg-fun__section--two .dino-fun'
          ),
          eyeOpen: document.querySelector(
            '.bg-fun__right .bg-fun__section--one .dino-fun__artwork--eye-open'
          ),
          eyeClosed: document.querySelector(
            '.bg-fun__right .bg-fun__section--one .dino-fun__artwork--eye-closed'
          )
        }
        const rightContainerWidth = document.querySelector('.bg-fun__right')
          .clientWidth
        timelineOne
          .set([leftDino.eyeClosed, rightDino.eyeClosed], { opacity: 0 })
          .fromTo(
            leftDino.container,
            1,
            { x: -90, rotation: 170 },
            { x: -45, rotation: 180 },
            '+=1'
          )
          .to(leftDino.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
          .to(leftDino.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
          .to(leftDino.container, 0.33, { x: -90, rotation: 170 }, '+=0.5 ')
          .fromTo(
            rightDino.container,
            1,
            { x: 90 },
            {
              x: rightContainerWidth * -1 + 90
            }
          )
        // Reveal on scroll.
        scrollMagicInit(vm, timelineOne, '.work__segment--nsf', 0.5)
      }

      // Timeline two.
      function initTimelineTwo() {
        timelineTwo.to(
          '.bg-fun__right .bg-fun__section--one',
          1,
          { opacity: 0.5 },
          '+=5'
        )
        timelineTwo.to('.bg-fun__left .bg-fun__section--two', 1, {
          opacity: 0.5
        })
        // Reveal on scroll.
        scrollMagicInit(vm, timelineTwo, '.work__segment--nsf', 0.5)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.bg-fun {
  @include breakpoint($large) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

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
      justify-content: flex-start;
      align-items: center;
      flex: 0 1 auto;
      height: 25%;
      overflow: hidden;

      .bg-fun__right & {
        justify-content: flex-end;
      }
    }
  }
}
</style>
