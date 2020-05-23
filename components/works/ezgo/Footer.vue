<template>
  <div class="golf-footer">
    <img
      :data-src="require('~/assets/img/work/ezgo/golf-ball.png')"
      alt="Corn Illustration"
      class="animatelazyload lazyload golf-footer__left"
    />
    <img
      :data-src="require('~/assets/img/work/ezgo/golf-ball.png')"
      alt="Corn Illustration"
      class="animatelazyload lazyload golf-footer__middle"
    />
    <img
      :data-src="require('~/assets/img/work/ezgo/golf-ball.png')"
      alt="Corn Illustration"
      class="animatelazyload lazyload golf-footer__right"
    />
  </div>
</template>
<script>
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
// import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
export default {
  props: {
    modifiers: {
      type: Object,
      default: function() {
        return {
          revealOffset: 0.85,
          triggerEl: '.pill-footer'
        }
      }
    }
  },
  mounted: function() {
    // Only animated if user hasn't scrolled past already
    // if (scrolledPast(document.querySelector('.work__segment--mc')) === true) {
    //   return
    // }

    // Broadly scopped variables.
    const vm = this
    const TimelineLite = vm.$GSAP.TimelineLite

    // Footer reveal.
    const footerIllustrations = {
      left: document.querySelector('.work__segment--ezgo .golf-footer__left'),
      middle: document.querySelector(
        '.work__segment--ezgo .golf-footer__middle'
      ),
      right: document.querySelector('.work__segment--ezgo .golf-footer__right')
    }
    const footerTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [footerIllustrations]
    })
    footerTimeline.from(footerIllustrations.middle, 0.5, { y: 70 })
    footerTimeline.from(footerIllustrations.left, 0.5, { y: 70 }, '-=0.25')
    footerTimeline.from(footerIllustrations.right, 0.5, { y: 70 }, '-=0.4')
    scrollMagicScene(
      vm,
      footerTimeline,
      vm.modifiers.triggerEl,
      vm.modifiers.revealOffset
    )
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.golf-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: calc(#{$s0} - 5px);
  width: 150px;
  overflow: hidden;

  &__left,
  &__right {
    flex: 0 1 auto;
    width: 38px;
    height: auto;
    transform: translateY(18px);
  }
  &__middle {
    flex: 0 1 auto;
    width: 38px;
    height: auto;
    transform: translateY(10px);
  }
}
</style>
