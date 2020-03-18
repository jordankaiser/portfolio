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
        src="~/assets/img/work/mc/pill-oval-blue.png"
        alt="Pill Illustration"
        class="mc-hero__pill-oval mc-hero__pill-oval--4"
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
    const pillHero = {
      container: document.querySelector('.mc-hero'),
      syringe: document.querySelector('.mc-hero__syringe img'),
      pillsContainer: document.querySelector('.mc-hero__pills'),
      pillOne: document.querySelector('.mc-hero__pill-circle--1'),
      pillTwo: document.querySelector('.mc-hero__pill-oval--1'),
      pillThree: document.querySelector('.mc-hero__pill-oval--2'),
      pillFour: document.querySelector('.mc-hero__pill-oval--3'),
      pillFive: document.querySelector('.mc-hero__pill-circle--2'),
      pillSix: document.querySelector('.mc-hero__pill-oval--4'),
      circle: document.querySelector('.mc-hero__circle')
    }
    const TimelineLite = vm.$GSAP.TimelineLite

    // Hero timeline.
    const heroTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [pillHero]
    })
    heroTimeline
      .set(
        [
          pillHero.pillsContainer,
          pillHero.pillOne,
          pillHero.pillTwo,
          pillHero.pillThree,
          pillHero.pillFour,
          pillHero.pillFive,
          pillHero.pillSix
        ],
        {
          opacity: 0
        }
      )
      .from(pillHero.circle, 0.5, { opacity: 0 })
      .fromTo(
        pillHero.pillsContainer,
        0.1,
        { opacity: 0 },
        { opacity: 1 },
        '-=0.5'
      )
      .fromTo(
        pillHero.syringe,
        1,
        {
          scale: 0.1,
          opacity: 0,
          rotation: 360
        },
        { scale: 1, opacity: 1, rotation: 0 }
      )
      .set(pillHero.pillOne, { opacity: 1 }, '-=0.25')
      .fromTo(
        pillHero.pillOne,
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
      .set(pillHero.pillFour, { opacity: 1 }, '-=0.2')
      .fromTo(
        pillHero.pillFour,
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
      .set(pillHero.pillTwo, { opacity: 1 }, '-=0.25')
      .fromTo(
        pillHero.pillTwo,
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
      .set(pillHero.pillFive, { opacity: 1 }, '-=0.2')
      .fromTo(
        pillHero.pillFive,
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
      .set(pillHero.pillSix, { opacity: 1 }, '-=0.2')
      .fromTo(
        pillHero.pillSix,
        0.45,
        {
          x: -30,
          y: 30,
          rotation: 350
        },
        {
          x: 0,
          y: 0,
          rotation: 84,
          /* eslint-disable-next-line no-undef */
          ease: Power2.easeOut
        },
        '-=0.2'
      )
      .set(pillHero.pillThree, { opacity: 1 }, '-=0.25')
      .fromTo(
        pillHero.pillThree,
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
      transform-origin: 50% 50%;
    }
  }
  &__pills {
    position: absolute;
    right: 21px;
    top: -3px;
    width: calc(100% + 10px);
    height: calc(100% + 20px);

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
      top: 0px;
      left: 88px;
      transform: rotate(32deg);
    }
    &--2 {
      top: 124px;
      left: 96px;
      transform: rotate(105deg);
    }
  }
  &__pill-oval {
    position: absolute;
    width: 21px;
    height: auto;
    z-index: 1;

    &--1 {
      top: 8px;
      left: 125px;
      transform: rotate(44deg);
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
    &--4 {
      top: 37px;
      left: 148px;
      transform: rotate(84deg);
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
