<template>
  <div class="screenshot-ezgo">
    <div class="screenshot-ezgo__wrapper">
      <img
        :data-src="require('~/assets/img/work/ezgo/work-small.jpg')"
        alt="E-Z-GO Website"
        class="animatelazyload lazyload"
      />
    </div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
export default {
  mounted: function() {
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const TimelineLite = vm.$GSAP.TimelineLite
    const image = document.querySelector('.screenshot-ezgo img')

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
      scrollMagicScene(vm, timeline, '.screenshot-ezgo', 0.75)
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
      scrollMagicScene(vm, timeline, '.screenshot-ezgo', 0.75)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.screenshot-ezgo {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: $s0;
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  overflow: hidden;

  @include breakpoint($extrasmall) {
    overflow: visible;
    justify-content: center;
  }
  // TODO: Fix image pop-in when already scrolled past.
  // &__wrapper:before {
  //   content: '';
  //   position: absolute;
  //   display: block;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   padding-top: 92.42%;
  //   // 686x634
  // }
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
