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
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
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
      const timelines = {
        one: new TimelineLite({ paused: true }),
        two: new TimelineLite({ paused: true }),
        three: new TimelineLite({ paused: true }),
        four: new TimelineLite({ paused: true })
      }
      const dinos = {
        leftOne: {
          container: document.querySelector(
            '.bg-fun__left .bg-fun__section--one .dino-fun'
          ),
          eyeOpen: document.querySelector(
            '.bg-fun__left .bg-fun__section--one .dino-fun__artwork--eye-open'
          ),
          eyeClosed: document.querySelector(
            '.bg-fun__left .bg-fun__section--one .dino-fun__artwork--eye-closed'
          )
        },
        leftTwo: {
          container: document.querySelector(
            '.bg-fun__left .bg-fun__section--two .dino-fun'
          ),
          eyeOpen: document.querySelector(
            '.bg-fun__left .bg-fun__section--two .dino-fun__artwork--eye-open'
          ),
          eyeClosed: document.querySelector(
            '.bg-fun__left .bg-fun__section--two .dino-fun__artwork--eye-closed'
          )
        },
        rightOne: {
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
      }

      // Pick random dino to play.

      const dinoTriggerEls = document.querySelectorAll('.dino-fun-trigger')
      const ScrollMagic = vm.$ScrollMagic
      Array.from(dinoTriggerEls).forEach(trigger => {
        const sceneController = new ScrollMagic.Controller()
        let randomNumber = 0
        new ScrollMagic.Scene({
          triggerElement: trigger,
          triggerHook: 0.5,
          reverse: false
        })
          .addTo(sceneController)
          .on('start end', function(e) {
            randomNumber = Math.floor(Math.random() * 3)
            // randomNumber = 3
            callDinoTimelines(randomNumber, timelines, dinos, trigger.className)
          })
      })
    }

    // Call dino timelines.
    function callDinoTimelines(randomNumber, timelines, dinos, trigger) {
      switch (randomNumber) {
        case 0:
          timelines.one.paused(false)
          createTimelineOne(timelines.one, dinos.leftOne)
          scrollMagicScene(vm, timelines.one, trigger, 0.5)
          break
        case 1:
          timelines.two.paused(false)
          createTimelineTwo(timelines.two, dinos.rightOne)
          scrollMagicScene(vm, timelines.two, trigger, 0.5)
          break
        case 2:
          timelines.three.paused(false)
          createTimelineThree(timelines.three, dinos.leftTwo)
          scrollMagicScene(vm, timelines.three, trigger, 0.5)
          break

        case 3:
          timelines.four.paused(false)
          createTimelineFour(timelines.four, dinos.leftOne)
          scrollMagicScene(vm, timelines.four, trigger, 0.5)
          break
      }
    }
    // Timeline one.
    function createTimelineOne(timeline, dino) {
      timeline
        .set(['.bg-fun', dino.container], { visibility: 'visible' })
        .set('.bg-fun__left .bg-fun__section--one', {
          justifyContent: 'flex-start',
          alignItems: 'center'
        })
        .set([dino.eyeClosed], { opacity: 0 })
        .fromTo(
          dino.container,
          1,
          { x: -140, scaleX: '-1', rotation: -20 },
          { x: -95, scaleX: '-1', rotation: 0 },
          '+=1'
        )
        .to(dino.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
        .to(dino.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
        .to(dino.container, 0.25, { x: -140, rotation: -20 }, '+=0.5')
    }

    // Timeline two.
    function createTimelineTwo(timeline, dino) {
      console.log('creating two')
      timeline
        .set(['.bg-fun', dino.container], { visibility: 'visible' })
        .set('.bg-fun__right .bg-fun__section--two', {
          justifyContent: 'flex-end',
          alignItems: 'center'
        })
        .set([dino.eyeClosed], { opacity: 0 })
        .fromTo(
          dino.container,
          0.5,
          { x: 90, rotation: 15 },
          { x: 44, rotation: 0 },
          '+=1'
        )
        .to(dino.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
        .to(dino.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
        .to(dino.container, 0.25, { x: 90, rotation: 15 }, '+=0.5')
    }

    // Timeline three.
    function createTimelineThree(timeline, dino) {
      timeline
        .set(['.bg-fun', dino.container], { visibility: 'visible' })
        .set('.bg-fun__left .bg-fun__section--two', {
          justifyContent: 'center',
          alignItems: 'flex-end'
        })
        .set([dino.eyeClosed], { opacity: 0 })
        .fromTo(
          dino.container,
          0.5,
          { y: 90, rotation: -25 },
          /* eslint-disable-next-line no-undef */
          { y: 30, rotation: 5, ease: Back.easeOut.config(1.7) },
          '+=1'
        )
        .to(dino.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
        .to(dino.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
        .to(dino.container, 0.2, { y: 90, rotation: -25 }, '+=0.5')
    }

    function createTimelineFour(timeline, dino) {
      timeline
        .set(['.bg-fun', dino.container], { visibility: 'visible' })
        .set('.bg-fun__left .bg-fun__section--one', {
          justifyContent: 'center',
          alignItems: 'flex-start'
        })
        .set([dino.eyeClosed], { opacity: 0 })
        .fromTo(dino.container, 0.5, { y: -90 }, { y: 0 }, '+=1')
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
