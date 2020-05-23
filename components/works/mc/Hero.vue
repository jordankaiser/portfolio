<template>
  <div class="mc-hero">
    <div class="mc-hero__pills">
      <img
        src="~/assets/img/work/mc/pill-circle-blue.png"
        alt="Pill Illustration"
        class="mc-hero__pill-circle mc-hero__pill-circle--1"
      />
      <img
        src="~/assets/img/work/mc/pill-oval-pink.png"
        alt="Pill Illustration"
        class="mc-hero__pill-oval mc-hero__pill-oval--1"
      />
      <img
        src="~/assets/img/work/mc/pill-oval-pink.png"
        alt="Pill Illustration"
        class="mc-hero__pill-oval mc-hero__pill-oval--2"
      />
      <img
        src="~/assets/img/work/mc/pill-oval-blue.png"
        alt="Pill Illustration"
        class="mc-hero__pill-oval mc-hero__pill-oval--3"
      />
      <img
        src="~/assets/img/work/mc/pill-circle-pink.png"
        alt="Pill Illustration"
        class="mc-hero__pill-circle mc-hero__pill-circle--2"
      />
    </div>
    <div class="mc-hero__syringe-wrap">
      <div class="mc-hero__syringe">
        <img
          src="~/assets/img/work/mc/syringe.png"
          alt="Syringe Illustration"
        />
      </div>
    </div>
    <div class="mc-hero__circle-wrap">
      <div class="mc-hero__circle"></div>
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
    if (scrolledPast(document.querySelector('.work__segment--mc')) === true) {
      return
    }

    // Broadly scopped variables.
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const pillHero = {
      container: document.querySelector('.mc-hero'),
      syringe: document.querySelector('.mc-hero__syringe img'),
      pillsContainer: document.querySelector('.mc-hero__pills'),
      pillOne: document.querySelector('.mc-hero__pill-circle--1'),
      pillTwo: document.querySelector('.mc-hero__pill-oval--1'),
      pillThree: document.querySelector('.mc-hero__pill-oval--2'),
      pillFour: document.querySelector('.mc-hero__pill-oval--3'),
      pillFive: document.querySelector('.mc-hero__pill-circle--2'),
      circle: document.querySelector('.mc-hero__circle')
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
        desktopTimeline(pillHero)
      } else {
        mobileTimeline(pillHero)
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
        .set(
          [
            element.pillsContainer,
            element.pillOne,
            element.pillTwo,
            element.pillThree,
            element.pillFour,
            element.pillFive
          ],
          {
            opacity: 0
          }
        )
        .from(element.circle, 0.5, { opacity: 0 })
        .fromTo(
          element.pillsContainer,
          0.1,
          { opacity: 0 },
          { opacity: 1 },
          '-=0.5'
        )
        .fromTo(
          element.syringe,
          1,
          {
            scale: 0.1,
            opacity: 0,
            rotation: 360
          },
          { scale: 1, opacity: 1, rotation: 0 }
        )
        .set(element.pillOne, { opacity: 1 }, '-=0.25')
        .fromTo(
          element.pillOne,
          0.3,
          {
            x: -30,
            y: 30,
            rotation: 292
          },
          {
            x: 0,
            y: 0,
            rotation: 32,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.25'
        )
        .set(element.pillFour, { opacity: 1 }, '-=0.2')
        .fromTo(
          element.pillFour,
          0.45,
          {
            x: 30,
            y: -30,
            rotation: 293
          },
          {
            x: 0,
            y: 0,
            rotation: 33,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.2'
        )
        .set(element.pillTwo, { opacity: 1 }, '-=0.25')
        .fromTo(
          element.pillTwo,
          0.45,
          {
            x: 1,
            y: 30,
            rotation: 294
          },
          {
            x: 0,
            y: 0,
            rotation: 44,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.25'
        )
        .set(element.pillFive, { opacity: 1 }, '-=0.2')
        .fromTo(
          element.pillFive,
          0.45,
          {
            x: -30,
            y: 30,
            rotation: 350
          },
          {
            x: 0,
            y: 0,
            rotation: 105,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.2'
        )
        .set(element.pillThree, { opacity: 1 }, '-=0.25')
        .fromTo(
          element.pillThree,
          0.45,
          {
            x: 30,
            y: -30,
            rotation: 347
          },
          {
            x: 0,
            y: 0,
            rotation: 87,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.25'
        )

      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.mc-hero', 0.75)

      // Screenshot timeline.
      const screenshot = document.querySelector('.screenshot-mc img')
      const screenshotTimeline = new TimelineLite()
      screenshotTimeline.fromTo(
        screenshot,
        0.75,
        { opacity: 0 },
        { opacity: 1 }
      )
      scrollMagicScene(vm, screenshotTimeline, '.screenshot-mc', 0.75)
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
            element.pillsContainer,
            element.pillOne,
            element.pillTwo,
            element.pillThree,
            element.pillFour,
            element.pillFive
          ],
          {
            opacity: 0
          }
        )
        .from(element.circle, 0.5, { opacity: 0 })
        .fromTo(
          element.pillsContainer,
          0.1,
          { opacity: 0 },
          { opacity: 1 },
          '-=0.5'
        )
        .fromTo(
          element.syringe,
          1,
          {
            x: 120,
            y: 120,
            rotation: 60
          },
          { x: 0, y: 0, rotation: 0 }
        )
        .set(element.pillOne, { opacity: 1 }, '-=0.25')
        .fromTo(
          element.pillOne,
          0.3,
          {
            x: -30,
            y: 30,
            rotation: 292
          },
          {
            x: 0,
            y: 0,
            rotation: 32,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.25'
        )
        .set(element.pillFour, { opacity: 1 }, '-=0.2')
        .fromTo(
          element.pillFour,
          0.45,
          {
            x: 30,
            y: -30,
            rotation: 293
          },
          {
            x: 0,
            y: 0,
            rotation: 33,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.2'
        )
        .set(element.pillTwo, { opacity: 1 }, '-=0.25')
        .fromTo(
          element.pillTwo,
          0.45,
          {
            x: -30,
            y: 30,
            rotation: 294
          },
          {
            x: 0,
            y: 0,
            rotation: 44,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.25'
        )
        .set(element.pillFive, { opacity: 1 }, '-=0.2')
        .fromTo(
          element.pillFive,
          0.45,
          {
            x: 30,
            y: -30,
            rotation: 350
          },
          {
            x: 0,
            y: 0,
            rotation: 105,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.2'
        )
        .set(element.pillThree, { opacity: 1 }, '-=0.25')
        .fromTo(
          element.pillThree,
          0.45,
          {
            x: 30,
            y: -30,
            rotation: 347
          },
          {
            x: 0,
            y: 0,
            rotation: 87,
            /* eslint-disable-next-line no-undef */
            ease: Power2.easeOut
          },
          '-=0.25'
        )

      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.mc-hero', 0.75)

      // Screenshot timeline.
      const screenshot = document.querySelector('.screenshot-mc img')
      const screenshotTimeline = new TimelineLite()
      screenshotTimeline.fromTo(
        screenshot,
        0.75,
        { x: screenshot.width / 2, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      scrollMagicScene(vm, screenshotTimeline, '.screenshot-mc', 0.75)
    }

    // Intro reveal.
    const introText = [
      document.querySelector('.work__segment--mc .work__heading'),
      document.querySelector('.work__segment--mc .work__subhead'),
      document.querySelector('.work__segment--mc .work__description')
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
    scrollMagicScene(vm, introTimeline, '.work__segment--mc .work__intro', 0.75)

    // Divider reveal.
    const divider = {
      container: document.querySelector('.work__segment--mc .work__divider'),
      line: document.querySelector('.divider-bottle__line'),
      circle: document.querySelector('.divider-bottle__circle'),
      illustration: document.querySelector('.divider-bottle__illustration')
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
      '.work__segment--mc .work__divider',
      0.85
    )

    // CTA reveal.
    const ctas = [
      document.querySelector('.work__segment--mc .cta-secondary__link'),
      document.querySelector('.work__segment--mc .cta-tertiary__link')
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
    scrollMagicScene(vm, ctasTimeline, '.work__segment--mc .work__ctas', 0.9)
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.mc-hero {
  position: relative;

  &__syringe-wrap {
    position: relative;
    z-index: 1;
    overflow: hidden;

    @include breakpoint($small) {
      overflow: visible;
    }
  }
  &__syringe {
    transform: translateX(4px);

    img {
      width: 139px;
      height: auto;
      transform-origin: 90% 71%;

      @include breakpoint($small) {
        transform-origin: 50% 50%;
      }
    }
  }
  &__pills {
    position: absolute;
    right: 0;
    top: 8px;
    width: calc(100% + 10px);
    height: calc(100% + 20px);
    overflow: hidden;

    @include breakpoint($small) {
      right: 20px;
      top: -4px;
      overflow: visible;
    }
  }
  &__pill-circle {
    position: absolute;
    width: 26px;
    height: auto;
    z-index: 1;

    &--1 {
      top: 1px;
      left: 76px;
      transform: rotate(32deg);
    }
    &--2 {
      top: 124px;
      left: 96px;
      transform: rotate(105deg);

      @include breakpoint($small) {
        top: 43px;
        left: 147px;
      }
    }
  }
  &__pill-oval {
    position: absolute;
    width: 21px;
    height: auto;
    z-index: 1;

    &--1 {
      top: 7px;
      left: 108px;
      transform: rotate(44deg);

      @include breakpoint($small) {
        top: 8px;
        left: 124px;
      }
    }
    &--2 {
      top: 76px;
      left: 43px;
      transform: rotate(87deg);
    }
    &--3 {
      top: 101px;
      left: 67px;
      transform: rotate(33deg);
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
    background-color: $color-mc-blue;
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
