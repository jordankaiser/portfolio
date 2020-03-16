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
    if (scrolledPast(document.querySelector('.mc-hero')) === true) {
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.mc-hero {
  position: relative;
  left: 32px;

  &__syringe-wrap {
    position: relative;
    z-index: 1;

    @include breakpoint($small) {
      overflow: visible;
    }
  }
  &__syringe {
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
    right: 21px;
    top: -3px;
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
    top: 50%;
    width: 130px;
    height: 130px;
    transform: translate(0%, -50%);

    @include breakpoint($small) {
      width: 120px;
      height: 120px;
      top: 10px;
      transform: none;
      overflow: visible;
    }
  }
  &__circle {
    width: 100%;
    height: 100%;
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
