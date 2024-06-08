<template>
  <div class="construction-worker-footer">
    <img
      :data-src="require('~/assets/img/work/slb/construction-worker-red.png')"
      alt="Construction worker illustration"
      class="animatelazyload lazyload construction-worker-footer__left"
    />
    <img
      :data-src="require('~/assets/img/work/slb/construction-worker-green.png')"
      alt="Construction worker illustration"
      class="animatelazyload lazyload construction-worker-footer__middle"
    />
    <img
      :data-src="
        require('~/assets/img/work/slb/construction-worker-purple.png')
      "
      alt="Construction worker illustration"
      class="animatelazyload lazyload construction-worker-footer__right"
    />
  </div>
</template>
<script>
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
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
    if (scrolledPast(document.querySelector('.work__segment--slb')) === true) {
      return
    }

    // Broadly scopped variables.
    const vm = this
    const TimelineLite = vm.$GSAP.TimelineLite

    // Footer reveal.
    const footerIllustrations = {
      left: document.querySelector(
        '.work__segment--slb .construction-worker-footer__left'
      ),
      middle: document.querySelector(
        '.work__segment--slb .construction-worker-footer__middle'
      ),
      right: document.querySelector(
        '.work__segment--slb .construction-worker-footer__right'
      )
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
.construction-worker-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: calc(#{$s0} - 5px);
  width: 190px;
  overflow: hidden;

  &__left,
  &__right {
    flex: 0 1 auto;
    width: 56px;
    height: auto;
    transform: translateY(5px);
  }
  &__middle {
    flex: 0 1 auto;
    width: 66px;
    height: auto;
    transform: translateY(5px);
  }
}
</style>
