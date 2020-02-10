<template>
  <div class="cart-hero">
    <div class="cart-hero__image-wrap">
      <div class="cart-hero__inner-wrap">
        <img
          src="~/assets/img/work/ezgo/golf-cart.png"
          alt="Golf Car Illustration"
          class="cart-hero__image"
        />
      </div>
    </div>
    <div class="cart-hero__circle-wrap">
      <div class="cart-hero__circle"></div>
    </div>
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
    const segment = document.querySelector('.work__segment--ezgo')

    // Only animated if user hasn't scrolled past already
    if (scrolledPast(segment) === true) {
      return
    }

    // Broad scopped variables.
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const TimelineLite = vm.$GSAP.TimelineLite
    const cartEl = {
      container: document.querySelector('.cart-hero__inner-wrap'),
      containerInner: document.querySelector('.cart-hero__image'),
      circle: document.querySelector('.cart-hero__circle')
    }

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
        desktopTimeline(cartEl)
      } else {
        mobileTimeline(cartEl)
      }
    }

    // Desktop animations.
    function desktopTimeline(element) {
      // const timeline = new TimelineLite({
      //   onComplete: timelineCleanup,
      //   onCompleteParams: [element]
      // })

      // Screenshot timeline.
      const screenShotTimeline = new TimelineLite()
      screenShotTimeline.fromTo(
        '.screenshot-ezgo img',
        0.75,
        { opacity: 0 },
        { opacity: 1 }
      )
      scrollMagicScene(vm, screenShotTimeline, '.screenshot-ezgo', 0.75)
    }

    // Mobile animations.
    function mobileTimeline(element) {
      // Hero Timeline animation.
      const heroTimeline = new TimelineLite({
        onComplete: timelineCleanup,
        onCompleteParams: [element]
      })
      heroTimeline
        .set(element.containerInner, { rotation: 0 })
        .from(element.circle, 0.5, {
          opacity: 0
        })
        .fromTo(
          element.container,
          0.75,
          { x: 135 },
          /* eslint-disable-next-line no-undef */
          { x: 0, ease: Power4.easeOut },
          '-=0.25'
        )
        .to(
          element.containerInner,
          1.5,
          {
            rotation: 15,
            /* eslint-disable-next-line no-undef */
            ease: Back.easeOut.config(7)
          },
          '-=0.5'
        )
      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.cart-hero__image', 0.65)

      // Screenshot timeline
      const screenshotTimeline = new TimelineLite()
      const image = document.querySelector('.screenshot-ezgo img')
      screenshotTimeline.fromTo(
        '.screenshot-ezgo img',
        0.75,
        { x: image.width / 2, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      scrollMagicScene(vm, screenshotTimeline, '.screenshot-ezgo', 0.75)
    }

    // Intro reveal.
    const introText = [
      segment.querySelector('.work__subhead'),
      segment.querySelector('.work__heading'),
      segment.querySelector('.work__description')
    ]
    const divider = {
      container: segment.querySelector('.work__divider'),
      line: segment.querySelector('.divider-golfer__line'),
      circle: segment.querySelector('.divider-golfer__circle'),
      illustration: segment.querySelector('.divider-golfer__illustration')
    }
    const allAnimatedElements = { ...introText, ...divider }
    const introTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [allAnimatedElements]
    })
    introTimeline
      .set(divider.container, { opacity: 1 })
      .staggerFromTo(
        introText,
        2,
        { opacity: 0 },
        /* eslint-disable-next-line no-undef */
        { opacity: 1, ease: Power2.easeInOut },
        0.3
      )
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
      introTimeline,
      '.work__segment--ezgo .work__intro',
      0.75
    )

    // CTA reveal.
    const ctas = [
      segment.querySelector('.cta-secondary__link'),
      segment.querySelector('.cta-tertiary__link')
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
    scrollMagicScene(vm, ctasTimeline, '.work__segment--ezgo .work__ctas', 0.9)

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
      '.work__segment--ezgo .golf-footer',
      0.75
    )
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
// @import '~/assets/scss/_mixins.scss';
.cart-hero {
  position: relative;

  &__image-wrap {
    position: relative;
    display: flex;
    align-items: center;
    height: 200px;
    margin-top: -20px;
    margin-bottom: -20px;
    z-index: 1;
    overflow: hidden;
  }
  &__image {
    flex: 0 0 auto;
    position: relative;
    width: 155px;
    height: auto;
    transform: rotate(15deg);
    transform-origin: 71% 80%;
  }
  &__circle-wrap {
    position: absolute;
    right: 0;
    top: 50%;
    width: 100px;
    height: 240px;
    transform: translate(0%, -50%);
    transform-origin: 50% 50%;
    overflow: hidden;
  }
  &__circle {
    position: absolute;
    width: 210px;
    height: 210px;
    top: 50%;
    left: 120%;
    transform: translate(-50%, -50%);
    background-color: $color-ezgo-blue-dark;
    border-radius: 100%;
  }
}
</style>
