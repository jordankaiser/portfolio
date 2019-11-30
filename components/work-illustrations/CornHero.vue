<template>
  <div class="corn-hero">
    <img
      src="~/assets/img/corn-1.png"
      alt="Corn Illustration"
      class="corn-hero__1"
    />
    <img
      src="~/assets/img/corn-2.png"
      alt="Corn Illustration"
      class="corn-hero__2"
    />
    <img
      src="~/assets/img/corn-3.png"
      alt="Corn Illustration"
      class="corn-hero__3"
    />
    <div class="corn-hero__circle"></div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import { mapState } from 'vuex'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
export default {
  computed: {
    ...mapState({
      count: state => state.viewportDimensions.viewportDimensions
    })
  },
  mounted: function() {
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const cornEl = {
      container: document.querySelector('.corn-hero'),
      cob: document.querySelector('.corn-hero__1'),
      leftLeaf: document.querySelector('.corn-hero__2'),
      rightLeaf: document.querySelector('.corn-hero__3'),
      circle: document.querySelector('.corn-hero__circle')
    }
    const TimelineLite = vm.$GSAP.TimelineLite
    window.addEventListener(
      'resize',
      debounce(() => {
        viewportDimensions = getViewportDimensions()
        mobileOrDesktop(viewportDimensions.width)
      }, 200)
    )
    mobileOrDesktop(viewportDimensions.width)
    function mobileOrDesktop(viewportWidth) {
      if (viewportWidth > 600) {
        desktopTimeline(cornEl)
      } else {
        mobileTimeline(cornEl)
      }
    }

    function desktopTimeline(element) {
      let timeline = new TimelineLite()
      timeline = new TimelineLite({
        onComplete: timelineCleanup,
        onCompleteParams: [element]
      })

      timeline
        .from(element.container, 1, {
          scale: 0
        })
        .from(
          element.circle,
          1,
          {
            scale: 0
          },
          '-=1'
        )
        .from(
          element.cob,
          0.5,
          {
            x: 30,
            y: 30
          },
          '-=1'
        )
        .from(
          element.leftLeaf,
          1,
          {
            rotation: 7
          },
          '-=0.5'
        )
        .from(
          element.rightLeaf,
          1,
          {
            rotation: -7
          },
          '-=1'
        )

      scrollMagicInit(timeline)
    }

    function mobileTimeline(element) {
      let timeline = new TimelineLite()
      timeline = new TimelineLite({
        onComplete: timelineCleanup,
        onCompleteParams: [element]
      })
      timeline.from(element.container, 1, {
        scale: 0
      })
    }

    function timelineCleanup(elements) {
      Object.values(elements).forEach(element => {
        /* eslint-disable-next-line no-undef */
        TweenLite.set(element, { clearProps: 'all' })
      })
    }

    function scrollMagicInit(timeline) {
      const ScrollMagic = vm.$ScrollMagic
      const nsfSection = document.querySelector('.work--nsf')
      const sceneController = new ScrollMagic.Controller()
      new ScrollMagic.Scene({
        triggerElement: nsfSection,
        triggerHook: 0.75,
        reverse: false
      })
        .setClassToggle(nsfSection, 'active')
        .setTween(timeline)
        .addTo(sceneController)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.corn-hero {
  position: relative;
  padding-bottom: 10px;

  &__1 {
    position: relative;
    width: 161px;
    height: auto;
    left: 1px;
    top: 1px;
    transform-origin: 54% 50%;
    z-index: 1;
  }
  &__2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 161px;
    height: auto;
    transform-origin: 74% 84%;
    z-index: 1;
  }
  &__3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 161px;
    height: auto;
    transform-origin: 76% 83%;
    z-index: 1;
  }
  &__circle {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 55%;
    left: 99%;
    transform: translate(-50%, -50%);
    background-color: $color-orange;
    border-radius: 100%;

    @include breakpoint($small) {
      top: 50%;
      left: 50%;
      width: 125px;
      height: 125px;
    }
  }
}
</style>
