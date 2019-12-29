<template>
  <div class="corn-hero animated">
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
import { scrollMagicInit } from '~/plugins/helpers/scrollMagicInit.js'
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

    // Determine viewport width.
    window.addEventListener(
      'resize',
      debounce(() => {
        viewportDimensions = getViewportDimensions()
        mobileOrDesktop(viewportDimensions.width)
      }, 200)
    )

    // Determine which animations to play by viewport width.
    mobileOrDesktop()
    function mobileOrDesktop(viewportWidth) {
      if (viewportWidth > 600) {
        desktopTimeline(cornEl)
      } else {
        mobileTimeline(cornEl)
      }
    }

    // Desktop animations.
    function desktopTimeline(element) {
      let timeline = new TimelineLite()
      timeline = new TimelineLite({
        onComplete: timelineCompleted,
        onCompleteParams: [element]
      })

      timeline
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

      scrollMagicInit(vm, timeline, '.work__segment--nsf', 0.75)

      // Intro reveal.
      introReveal()
    }

    // Mobile animations.
    function mobileTimeline(element) {
      // Timeline animation.
      let timeline = new TimelineLite()
      timeline = new TimelineLite({
        onComplete: timelineCompleted,
        onCompleteParams: [element]
      })
      timeline
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
      scrollMagicInit(vm, timeline, '.corn-hero', 0.75)

      // Intro reveal.
      introReveal()
    }

    function introReveal() {
      const timeline = new TimelineLite()
      const introText = [
        '.work__segment--nsf .work__subhead',
        '.work__segment--nsf .work__heading',
        '.work__segment--nsf .work__description'
      ]
      timeline
        .set('.work__divider', { opacity: 1 })
        .staggerFromTo(
          introText,
          2,
          { opacity: 0 },
          /* eslint-disable-next-line */
        { opacity: 1, ease: Power2.easeInOut},
          0.3
        )
        .from(
          '.divider-corndog__line',
          0.66,
          {
            scaleX: 0,
            transformOrigin: '100% 50%'
          },
          '-=1'
        )
        .from('.divider-corndog__circle', 0.5, { scale: 0, x: -20 }, '-=1')
        .from(
          '.divider-corndog__illustration',
          0.75,
          {
            rotation: 360,
            scale: 0,
            /* eslint-disable-next-line */
          ease: Back.easeOut.config(2)
          },
          '-=0.75'
        )
      scrollMagicInit(vm, timeline, '.work__segment--nsf .work__intro', 0.75)
    }

    // Cleanup after timeline is done.
    function timelineCompleted(elements) {
      Object.values(elements).forEach(element => {
        /* eslint-disable-next-line no-undef */
        TweenLite.set(element, { clearProps: 'all' })
      })
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
