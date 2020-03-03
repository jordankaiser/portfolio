<template>
  <div class="corn-hero">
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
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
export default {
  mounted: function() {
    // Only animated if user hasn't scrolled past already
    if (scrolledPast(document.querySelector('.work__segment--nsf')) === true) {
      return
    }

    // Broadly scopped variables.
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
        if (
          viewportDimensions.width !== document.documentElement.clientWidth ||
          viewportDimensions.height !== document.documentElement.clientHeight
        ) {
          mobileOrDesktop(viewportDimensions.width)
        }
      }, 200)
    )

    // Determine which animations to play by viewport width.
    mobileOrDesktop(viewportDimensions.width)
    function mobileOrDesktop(viewportWidth) {
      if (viewportWidth >= 600) {
        desktopTimeline(cornEl)
      } else {
        mobileTimeline(cornEl)
      }
    }

    // Desktop animations.
    function desktopTimeline(element) {
      // Hero timeline.
      const heroTimeline = new TimelineLite({
        onComplete: timelineCleanup,
        onCompleteParams: [element]
      })
      heroTimeline
        .from(element.container, 0.66, {
          scale: 0,
          opacity: 0
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

      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.work__segment--nsf', 0.75)

      // Screenshot timeline
      const screenshotTimeline = new TimelineLite()
      screenshotTimeline.fromTo(
        '.screenshot-nsf img',
        0.75,
        { opacity: 0 },
        { opacity: 1 }
      )
      scrollMagicScene(vm, screenshotTimeline, '.screenshot-nsf', 0.75)
    }

    // Mobile animations.
    function mobileTimeline(element) {
      // Hero timeline.
      const heroTimeline = new TimelineLite({
        onComplete: timelineCleanup,
        onCompleteParams: [element]
      })
      heroTimeline
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

      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.corn-hero', 0.75)

      // Screenshot timeline.
      const screenshot = document.querySelector('.screenshot-nsf img')
      const screenshotTimeline = new TimelineLite()
      screenshotTimeline.fromTo(
        screenshot,
        0.75,
        { x: screenshot.width / 2, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      scrollMagicScene(vm, screenshotTimeline, '.screenshot-nsf', 0.75)
    }

    // Intro reveal.
    const introText = [
      document.querySelector('.work__segment--nsf .work__subhead'),
      document.querySelector('.work__segment--nsf .work__heading'),
      document.querySelector('.work__segment--nsf .work__description')
    ]
    const introTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [introText]
    })
    introTimeline.staggerFromTo(
      introText,
      2,
      { opacity: 0 },
      /* eslint-disable-next-line */
        { opacity: 1, ease: Power2.easeInOut },
      0.3
    )
    scrollMagicScene(
      vm,
      introTimeline,
      '.work__segment--nsf .work__intro',
      0.75
    )

    // Divider reveall.
    const divider = {
      container: document.querySelector('.work__segment--nsf .work__divider'),
      line: document.querySelector('.divider-corndog__line'),
      circle: document.querySelector('.divider-corndog__circle'),
      illustration: document.querySelector('.divider-corndog__illustration')
    }
    const dividerTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [divider]
    })
    dividerTimeline
      .set(divider.container, { opacity: 1 })
      .from(
        divider.line,
        0.66,
        {
          scaleX: 0,
          transformOrigin: '100% 50%'
        },
        '-=1'
      )
      .from(divider.circle, 0.5, { scale: 0, x: -20 }, '-=1')
      .from(
        divider.illustration,
        0.75,
        {
          rotation: 360,
          scale: 0,
          /* eslint-disable-next-line */
            ease: Back.easeOut.config(2)
        },
        '-=0.75'
      )
    scrollMagicScene(
      vm,
      dividerTimeline,
      '.work__segment--nsf .work__divider',
      0.85
    )

    // CTA reveal.
    const ctas = [
      document.querySelector('.work__segment--nsf .cta-secondary__link'),
      document.querySelector('.work__segment--nsf .cta-tertiary__link')
    ]
    const ctasTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [ctas]
    })
    ctasTimeline.staggerFromTo(
      ctas,
      1,
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1 },
      0.25
    )
    scrollMagicScene(vm, ctasTimeline, '.work__segment--nsf .work__ctas', 0.9)

    // Footer reveal.
    const footerIllustrations = {
      left: document.querySelector('.work__segment--nsf .corn-footer__left'),
      middle: document.querySelector(
        '.work__segment--nsf .corn-footer__middle'
      ),
      right: document.querySelector('.work__segment--nsf .corn-footer__right')
    }
    const footerTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [footerIllustrations]
    })
    footerTimeline.from(footerIllustrations.middle, 0.5, { y: 50 })
    footerTimeline.from(footerIllustrations.left, 0.5, { y: 50 }, '-=0.25')
    footerTimeline.from(footerIllustrations.right, 0.5, { y: 50 }, '-=0.4')
    scrollMagicScene(
      vm,
      footerTimeline,
      '.work__segment--nsf .corn-footer',
      0.85
    )
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
