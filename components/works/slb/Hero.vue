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
        src="~/assets/img/work/slb/nut-green.png"
        alt="Pill Illustration"
        class="slb-hero__nut slb-hero__nut--green slb-hero__nut--four"
      />
      <img
        src="~/assets/img/work/slb/nut-purple.png"
        alt="Pill Illustration"
        class="slb-hero__nut slb-hero__nut--purple slb-hero__nut--five"
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
        // desktopTimeline(pillHero)
      } else {
        // mobileTimeline(pillHero)
      }
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

    img {
      width: 162px;
      height: auto;
      transform-origin: 90% 71%;

      @include breakpoint($small) {
        transform-origin: 50% 50%;
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
      right: 20px;
      top: -4px;
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
    &--red {
      width: 31px;
    }
    &--one {
      top: 88px;
      left: 45px;
    }
    &--two {
      top: 114px;
      left: 85px;
    }
    &--three {
      top: 5px;
      left: 90px;
    }
    &--four {
      display: none;
    }
    &--five {
      display: none;
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
