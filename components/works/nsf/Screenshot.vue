<template>
  <div class="screenshot-nsf">
    <img
      :data-src="require('~/assets/img/work/nsf/work-small.jpg')"
      alt="Nebraska State Fair"
      class="animatelazyload lazyload"
    />
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import { scrollMagicInit } from '~/plugins/helpers/scrollMagicInit.js'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
export default {
  mounted: function() {
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const TimelineLite = vm.$GSAP.TimelineLite
    const image = document.querySelector('.screenshot-nsf img')

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
      if (viewportWidth > 600) {
        desktopTimeline()
      } else {
        mobileTimeline()
      }
    }

    // Desktop animations.
    function desktopTimeline() {
      const timeline = new TimelineLite()
      timeline.fromTo(image, 0.75, { opacity: 0 }, { opacity: 1 })
      scrollMagicInit(vm, timeline, '.screenshot-nsf', 0.75)
    }

    // Mobile animations.
    function mobileTimeline() {
      const timeline = new TimelineLite()
      timeline.fromTo(
        image,
        0.75,
        { x: image.width / 2, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      scrollMagicInit(vm, timeline, '.screenshot-nsf', 0.75)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.screenshot-nsf {
  display: flex;
  justify-content: flex-end;
  margin-top: $s0;
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  overflow: hidden;

  @include breakpoint($extrasmall) {
    overflow: visible;
    justify-content: center;
  }
  img {
    flex: 0 1 auto;
    max-width: 344px;
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @include breakpoint($extrasmall) {
      max-width: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      overflow: visible;
    }
  }
}
</style>
