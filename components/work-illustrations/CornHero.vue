<template>
  <div class="corn-hero preanimation">
    <div class="corn-hero__corn">
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
    </div>
    <div class="corn-hero__circle"></div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
export default {
  mounted: function() {
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const cornEl = {
      container: document.querySelector('.corn-hero'),
      corn: document.querySelector('.corn-hero__corn'),
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
        onStart: timelineStarted,
        onStartParams: [element],
        onComplete: timelineCompleted,
        onCompleteParams: [element]
      })

      timeline
        .call(sectionReveal)
        .from(element.container, 0.66, {
          scale: 0
        })
        .from(
          element.circle,
          1,
          {
            scale: 0
          },
          '-=0.5'
        )
        .from(
          element.cob,
          0.5,
          {
            x: 20,
            y: 20
          },
          '-=1'
        )
        .from(
          element.leftLeaf,
          0.5,
          {
            rotation: 7
          },
          '-=0.75'
        )
        .from(
          element.rightLeaf,
          0.5,
          {
            rotation: -7
          },
          '-=0.75'
        )

      scrollMagicInit(timeline)
    }

    function mobileTimeline(element) {
      let timeline = new TimelineLite()
      timeline = new TimelineLite({
        onStart: timelineStarted,
        onStartParams: [element],
        onComplete: timelineCompleted,
        onCompleteParams: [element]
      })
      timeline
        .call(sectionReveal)
        .from(element.circle, 0.66, {
          scale: 0
        })
        .from(
          element.corn,
          0.66,
          {
            x: 110,
            y: 70
          },
          '-=0.5'
        )
        .from(
          element.cob,
          0.5,
          {
            x: 30,
            y: 30
          },
          '-=0.75'
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

    function sectionReveal() {
      const elements = {}
      const timeline = new TimelineLite({
        onStart: timelineStarted,
        onStartParams: [elements]
      })
      timeline.staggerFromTo(
        '.work .preanimation',
        2,
        { opacity: 0 },
        /* eslint-disable-next-line */
        { opacity: 1, ease: Power2.easeInOut},
        0.3
      )
    }

    // Setup when timeline starts.
    function timelineStarted(elements) {
      // Remove preanimation classes.
      Object.values(elements).forEach(element => {
        if (element.classList.contains('preanimation')) {
          element.classList.remove('preanimation')
        }
      })
    }

    // Cleanup after timeline is done.
    function timelineCompleted(elements) {
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

  &__corn {
    position: relative;
    z-index: 1;
  }
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
