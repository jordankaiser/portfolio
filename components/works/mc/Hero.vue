<template>
  <div class="mc-hero">
    <div class="mc-hero__syringe-wrap">
      <div class="mc-hero__syringe">
        <img
          src="~/assets/img/work/mc/syringe.png"
          alt="Syringe Illustration"
        />
      </div>
    </div>
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
    <div class="mc-hero__circle-wrap">
      <div class="mc-hero__circle"></div>
    </div>
  </div>
</template>
<script>
// import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
export default {
  mounted: function() {
    // Only animated if user hasn't scrolled past already
    if (scrolledPast(document.querySelector('.work__segment--mc')) === true) {
      return
    }

    // Broadly scopped variables.
    // const vm = this
    // let viewportDimensions = getViewportDimensions()
    const pillHero = {
      container: document.querySelector('.mc-hero'),
      syringe: document.querySelector('.mc-hero__syringe img'),
      pillOne: document.querySelector('.mc-hero__pill-circle--1'),
      pillTwo: document.querySelector('.mc-hero__pill-oval--1'),
      pillThree: document.querySelector('.mc-hero__pill-oval--2'),
      pillFour: document.querySelector('.mc-hero__pill-oval--3'),
      pillFive: document.querySelector('.mc-hero__pill-circle--2'),
      circle: document.querySelector('.mc-hero__circle')
    }
    // const TimelineLite = vm.$GSAP.TimelineLite
    console.log(pillHero)
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
  }
  &__syringe {
    transform: translateX(4px);

    img {
      width: 139px;
      height: auto;
    }
  }
  &__pills {
    position: absolute;
    right: 0;
    top: 8px;
    width: calc(100% + 10px);
    height: calc(100% + 20px);
    overflow: hidden;
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
  }
}
</style>
