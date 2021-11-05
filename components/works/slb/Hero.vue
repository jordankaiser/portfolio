<template>
  <div class="slb-hero">
    <div class="slb-hero__nuts">
      <img
        src="~/assets/img/work/slb/nut-green.png"
        alt="Pill Illustration"
        class="slb-hero__nut slb-hero__nut--green slb-hero__nut--one"
      />
      <img
        src="~/assets/img/work/slb/nut-purple.png"
        alt="Pill Illustration"
        class="slb-hero__nut slb-hero__nut--purple slb-hero__nut--two"
      />
      <img
        src="~/assets/img/work/slb/nut-red.png"
        alt="Pill Illustration"
        class="slb-hero__nut slb-hero__nut--red slb-hero__nut--three"
      />
      <img
        src="~/assets/img/work/slb/nut-purple-large.png"
        alt="Pill Illustration"
        class="slb-hero__nut slb-hero__nut--green slb-hero__nut--four"
      />
    </div>
    <div class="slb-hero__wrench-wrap">
      <div class="slb-hero__wrench">
        <img src="~/assets/img/work/slb/wrench.png" alt="Wrench illustration" />
      </div>
    </div>
    <div class="slb-hero__circle-wrap">
      <div class="slb-hero__circle"></div>
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
    // Only animated if user hasn't scrolled past already
    if (scrolledPast(document.querySelector('.work__segment--slb')) === true) {
      return
    }

    // Broadly scopped variables.
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const TimelineLite = vm.$GSAP.TimelineLite
    const hero = {
      conatiner: document.querySelector('.slb-hero'),
      circle: document.querySelector('.slb-hero__circle'),
      wrench: document.querySelector('.slb-hero__wrench img'),
      nuts: document.querySelector('.slb-hero__nuts'),
      nutOne: document.querySelector('.slb-hero__nut--one'),
      nutTwo: document.querySelector('.slb-hero__nut--two'),
      nutThree: document.querySelector('.slb-hero__nut--three'),
      nutFour: document.querySelector('.slb-hero__nut--four')
    }

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
        desktopTimeline(hero)
      } else {
        mobileTimeline(hero)
      }
    }

    // Mobile animations.
    function mobileTimeline(element) {
      // Hero timeline.
      const heroTimeline = new TimelineLite({
        onComplete: timelineCleanup,
        onCompleteParams: [element]
      })
      heroTimeline
        .set(
          [
            element.nuts,
            element.nutOne,
            element.nutTwo,
            element.nutThree,
            element.nutFour
          ],
          {
            opacity: 0
          }
        )
        .from(element.circle, 0.5, { opacity: 0 })
        .fromTo(element.nuts, 0.1, { opacity: 0 }, { opacity: 1 }, '-=0.5')
        .fromTo(
          element.wrench,
          0.5,
          { opacity: 0, rotation: -30 },
          { opacity: 1, rotation: 0 }
        )
        .fromTo(
          element.nutThree,
          0.5,
          { opacity: 0, rotation: -120 },
          { opacity: 1, rotation: -60 },
          '-=0.5'
        )
        .fromTo(element.wrench, 0.5, { rotation: 0 }, { rotation: -30 })
        .fromTo(element.wrench, 0.5, { rotation: -30 }, { rotation: 0 })
        .fromTo(
          element.nutThree,
          0.5,
          { rotation: -60 },
          { rotation: 0 },
          '-=0.5'
        )
        .fromTo(element.wrench, 0.5, { rotation: 0 }, { rotation: -30 })
        .fromTo(element.wrench, 0.5, { rotation: -30 }, { rotation: 0 })
        .fromTo(
          element.nutOne,
          0.5,
          { opacity: 0, rotation: -120 },
          { opacity: 1, rotation: -60 },
          '-=0.5'
        )
        .fromTo(element.wrench, 0.5, { rotation: 0 }, { rotation: -30 })
        .fromTo(element.wrench, 0.5, { rotation: -30 }, { rotation: 0 })
        .fromTo(
          element.nutOne,
          0.5,
          { rotation: -60 },
          { rotation: 0 },
          '-=0.5'
        )

        .fromTo(element.wrench, 0.25, { rotation: 0 }, { rotation: -30 })
        .fromTo(element.wrench, 0.25, { rotation: -30 }, { rotation: 0 })
        .fromTo(
          element.nutTwo,
          0.25,
          { opacity: 0, rotation: -120 },
          { opacity: 1, rotation: -60 },
          '-=0.25'
        )
        .fromTo(element.wrench, 0.25, { rotation: 0 }, { rotation: -30 })
        .fromTo(element.wrench, 0.25, { rotation: -30 }, { rotation: 0 })
        .fromTo(
          element.nutTwo,
          0.25,
          { rotation: -60 },
          { rotation: 0 },
          '-=0.25'
        )

      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.slb-hero', 0.75)
    }

    // Desktop animations.
    function desktopTimeline(element) {
      // Hero timeline.
      const heroTimeline = new TimelineLite({
        onComplete: timelineCleanup,
        onCompleteParams: [element]
      })
      heroTimeline
        .set(
          [
            element.nuts,
            element.nutOne,
            element.nutTwo,
            element.nutThree,
            element.nutFour
          ],
          {
            opacity: 0
          }
        )
        .from(element.circle, 0.5, { opacity: 0 })
        .fromTo(element.nuts, 0.1, { opacity: 0 }, { opacity: 1 }, '-=0.5')
        .fromTo(
          element.wrench,
          0.5,
          { opacity: 0, rotation: -24 },
          { opacity: 1, rotation: 0 }
        )
        .fromTo(
          element.nutThree,
          0.5,
          { opacity: 0, rotation: -120 },
          { opacity: 1, rotation: -60 },
          '-=0.5'
        )
        .fromTo(
          element.nutTwo,
          0.5,
          { opacity: 0, rotation: -120 },
          { opacity: 1, rotation: -60 },
          '-=0.5'
        )
        .fromTo(element.wrench, 0.5, { rotation: 0 }, { rotation: -24 })
        .fromTo(element.wrench, 0.5, { rotation: -24 }, { rotation: 0 })
        .fromTo(
          element.nutThree,
          0.5,
          { rotation: -60 },
          { rotation: 0 },
          '-=0.5'
        )
        .fromTo(
          element.nutTwo,
          0.5,
          { rotation: -60 },
          { rotation: 0 },
          '-=0.5'
        )
        .fromTo(element.wrench, 0.25, { rotation: 0 }, { rotation: -9 })
        .fromTo(element.wrench, 0.25, { rotation: -9 }, { rotation: 0 })
        .fromTo(
          element.nutOne,
          0.25,
          { opacity: 0, rotation: -120 },
          { opacity: 1, rotation: -60 },
          '-=0.25'
        )
        .fromTo(
          element.nutFour,
          0.25,
          { opacity: 0, rotation: -120 },
          { opacity: 1, rotation: -60 },
          '-=0.25'
        )
        .fromTo(element.wrench, 0.25, { rotation: 0 }, { rotation: -9 })
        .fromTo(element.wrench, 0.25, { rotation: -9 }, { rotation: 0 })
        .fromTo(
          element.nutOne,
          0.25,
          { rotation: -60 },
          { rotation: 0 },
          '-=0.25'
        )
        .fromTo(
          element.nutFour,
          0.25,
          { rotation: 60 },
          { rotation: 0 },
          '-=0.25'
        )

      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.slb-hero', 0.75)
    }

    // Intro reveal.
    const introText = [
      document.querySelector('.work__segment--slb .work__heading'),
      document.querySelector('.work__segment--slb .work__subhead'),
      document.querySelector('.work__segment--slb .work__description')
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
      '.work__segment--slb .work__intro',
      0.75
    )

    // Divider reveal.
    const divider = {
      container: document.querySelector('.work__segment--slb .work__divider'),
      line: document.querySelector('.divider-hammer__line'),
      circle: document.querySelector('.divider-hammer__circle'),
      illustration: document.querySelector('.divider-hammer__illustration')
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
      '.work__segment--slb .work__divider',
      0.85
    )

    // CTA reveal.
    const ctas = [
      document.querySelector('.work__segment--slb .cta-secondary__link'),
      document.querySelector('.work__segment--slb .cta-tertiary__link')
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
    scrollMagicScene(vm, ctasTimeline, '.work__segment--slb .work__ctas', 0.9)
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.slb-hero {
  position: relative;

  &__wrench-wrap {
    position: relative;
    z-index: 1;
    overflow: hidden;

    @include breakpoint($small) {
      overflow: visible;
    }
  }
  &__wrench {
    transform: translate(24px, 20px);

    @include breakpoint($small) {
      transform: translate(17px, 6px);
    }
    img {
      position: relative;
      width: 162px;
      height: auto;
      transform-origin: 18% 18%;

      @include breakpoint($small) {
        transform-origin: 18% 18%;
      }
    }
  }
  &__nuts {
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% + 10px);
    height: calc(100% + 20px);
    overflow: hidden;

    @include breakpoint($small) {
      overflow: visible;
    }
  }
  &__nut {
    position: absolute;
    height: auto;
    z-index: 1;

    &--green {
      width: 45px;
    }
    &--purple {
      width: 39px;
    }
    &--purple-large {
      width: 45px;
    }
    &--red {
      width: 31px;
    }
    &--one {
      top: 88px;
      left: 45px;

      @include breakpoint($small) {
        top: 78px;
        left: 40px;
      }
    }
    &--two {
      top: 114px;
      left: 85px;

      @include breakpoint($small) {
        top: 108px;
        left: 83px;
      }
    }
    &--three {
      top: 5px;
      left: 90px;

      @include breakpoint($small) {
        top: -3px;
        left: 90px;
      }
    }
    &--four {
      display: none;

      @include breakpoint($small) {
        display: block;
        top: 11px;
        left: 133px;
      }
    }
  }
  &__circle-wrap {
    position: absolute;
    right: 0;
    top: 57%;
    width: 160px;
    height: 160px;
    transform: translate(0%, -43%);
    transform-origin: 50% 50%;
    overflow: hidden;

    @include breakpoint($small) {
      width: 120px;
      height: 120px;
      top: 10px;
      transform: none;
      overflow: visible;
    }
  }
  &__circle {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 46%;
    left: 105%;
    transform: translate(-50%, -50%);
    background-color: $color-slb-orange;
    border-radius: 100%;

    @include breakpoint($small) {
      position: relative;
      width: 100%;
      height: 100%;
      top: initial;
      left: initial;
      transform: none;
    }
  }
}
</style>
