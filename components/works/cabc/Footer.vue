<template>
  <div class="bike-footer">
    <img
      :data-src="require('~/assets/img/work/cabc/chain-1.png')"
      alt="Construction worker illustration"
      class="animatelazyload lazyload bike-footer__left"
    />
    <img
      :data-src="require('~/assets/img/work/cabc/chain-2.png')"
      alt="Construction worker illustration"
      class="animatelazyload lazyload bike-footer__center"
    />
    <img
      :data-src="require('~/assets/img/work/cabc/chain-1.png')"
      alt="Construction worker illustration"
      class="animatelazyload lazyload bike-footer__right"
    />
  </div>
</template>
<script>
/* eslint-disable no-undef  */
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
    if (scrolledPast(document.querySelector('.work__segment--cabc')) === true) {
      return
    }

    // Broadly scopped variables.
    const vm = this
    const TimelineLite = vm.$GSAP.TimelineLite

    // Footer reveal.
    const footerIllustrations = {
      left: document.querySelector('.work__segment--cabc .bike-footer__left'),
      center: document.querySelector(
        '.work__segment--cabc .bike-footer__center'
      ),
      right: document.querySelector('.work__segment--cabc .bike-footer__right')
    }
    const footerTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [footerIllustrations]
    })
    const duration = 1
    footerTimeline.from(
      footerIllustrations.center,
      duration,
      {
        y: 94,
        ease: Back.easeOut.config(1)
      },
      '+=1'
    )
    footerTimeline.from(
      footerIllustrations.left,
      duration,
      { y: 58, ease: Back.easeOut.config(1.7) },
      '-=0.5'
    )
    footerTimeline.from(
      footerIllustrations.right,
      duration,
      { y: 84, ease: Back.easeOut.config(1.7) },
      '-=0.5'
    )
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
.bike-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 130px;
  overflow: hidden;
  margin-top: 30px;

  &__left,
  &__center,
  &__right {
    width: 24px;
    height: auto;
  }
  &__left {
    position: relative;
    top: 46px;
  }
  &__center {
    position: relative;
    top: 11px;
  }
  &__right {
    position: relative;
    top: 23px;
  }
}
</style>
