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
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { shuffle } from '~/plugins/helpers/shuffleArray.js'
import Dino from '~/components/bg-fun/Dino.vue'
export default {
  components: {
    Dino
  },
  data: function() {
    return {
      dinoIsNotPlaying: true
    }
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
      const ScrollMagic = vm.$ScrollMagic
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
      const timelines = {
        one: new TimelineLite({
          onComplete: timelineCleanup,
          onCompleteParams: [dinos.leftOne]
        }),
        two: new TimelineLite({
          onComplete: timelineCleanup,
          onCompleteParams: [dinos.rightOne]
        }),
        three: new TimelineLite({
          onComplete: timelineCleanup,
          onCompleteParams: [dinos.leftTwo]
        }),
        four: new TimelineLite({
          onComplete: timelineCleanup,
          onCompleteParams: [dinos.leftOne]
        })
      }

      // Create a random play order for dino timelines.
      let playOrder = [0, 1, 2, 3]
      playOrder = shuffle(playOrder)
      let playOrderDelta = 0
      const dinoTriggerEls = document.querySelectorAll('.dino-fun-trigger')
      Array.from(dinoTriggerEls).forEach(trigger => {
        const sceneController = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
          triggerElement: trigger,
          triggerHook: 0.5,
          reverse: false
        })
          .addTo(sceneController)
          .on('start', function(e) {
            if (playOrderDelta < playOrder.length - 1) {
              playOrderDelta++
            } else {
              playOrderDelta = 0
            }
            if (vm.dinoIsNotPlaying) {
              vm.dinoIsNotPlaying = false
              callDinoTimelines(
                playOrder[playOrderDelta],
                timelines,
                dinos,
                trigger.className
              )
            }
          })
      })
    }

    // Call dino timelines.
    function callDinoTimelines(
      playOrder,
      timelines,
      dinos,
      trigger,
      dinoIsNotPlaying
    ) {
      switch (playOrder) {
        case 0:
          createTimelineOne(timelines.one, dinos.leftOne, trigger)
          break
        case 1:
          createTimelineTwo(timelines.two, dinos.rightOne, trigger)
          break
        case 2:
          createTimelineThree(timelines.three, dinos.leftTwo, trigger)
          break

        case 3:
          createTimelineFour(timelines.four, dinos.leftOne, trigger)
          break
      }
    }
    // Timeline one.
    function createTimelineOne(timeline, dino, trigger, dinoIsNotPlaying) {
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
        .call(function() {
          vm.dinoIsNotPlaying = true
        })
      scrollMagicScene(vm, timeline, trigger, 0.5)
    }

    // Timeline two.
    function createTimelineTwo(timeline, dino, trigger) {
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
        .call(function() {
          vm.dinoIsNotPlaying = true
        })
      scrollMagicScene(vm, timeline, trigger, 0.5)
    }

    // Timeline three.
    function createTimelineThree(timeline, dino, trigger) {
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
        .call(function() {
          vm.dinoIsNotPlaying = true
        })
      scrollMagicScene(vm, timeline, trigger, 0.5)
    }

    function createTimelineFour(timeline, dino, trigger) {
      timeline
        .set('.bg-fun', { visibility: 'visible' })
        .set(dino.container, {
          visibility: 'visible',
          transformOrigin: '67% 89%'
        })
        .set('.bg-fun__left .bg-fun__section--one', {
          justifyContent: 'center',
          alignItems: 'flex-start'
        })
        .set([dino.eyeClosed], { opacity: 0 })
        .set([dino.eyeOpen], { opacity: 1 })
        .fromTo(
          dino.container,
          0.5,
          { y: -160, rotation: -20, scaleX: -1, scaleY: -1 },
          {
            y: -102,
            rotation: 0,
            scaleX: -1,
            scaleY: -1,
            /* eslint-disable-next-line no-undef */
            ease: Back.easeOut.config(1.7)
          },
          '+=1'
        )
        .to(dino.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
        .to(dino.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
        .to(
          dino.container,
          0.2,
          {
            y: -160,
            rotation: -20
          },
          '+=0.5'
        )
        .call(function() {
          vm.dinoIsNotPlaying = true
        })
      scrollMagicScene(vm, timeline, trigger, 0.5)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.bg-fun {
  display: none;
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
