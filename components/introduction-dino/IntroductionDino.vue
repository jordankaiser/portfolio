<template>
  <div class="introduction-dino">
    <div class="introduction-dino__headline">
      <h1>
        <span class="introduction-dino__first-name">Jordan</span>
        <span class="introduction-dino__last-name">Kaiser</span>
      </h1>
    </div>
    <div class="introduction-dino__illustration">
      <div class="dino">
        <div class="dino__forground">
          <img
            class="dino__artwork dino__artwork--body"
            src="~/assets/img/dino.png"
          />
          <img
            class="dino__artwork dino__artwork--eye-open"
            src="~/assets/img/dino-eye-open.png"
          />
          <img
            class="dino__artwork dino__artwork--eye-closed"
            src="~/assets/img/dino-eye-closed.png"
          />
        </div>
        <div class="dino__background">
          <img src="~/assets/img/dino-background.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Bounce } from 'gsap'
export default {
  mounted: function() {
    const TimelineLite = this.$GSAP.TimelineLite

    const timeline = new TimelineLite()
    timeline
      .set('.dino__forground', {
        visibility: 'visible'
      })
      .set('.dino__artwork--eye-closed', {
        opacity: 0
      })
      .from('.dino__forground', 1.75, {
        opacity: 0,
        y: -300,
        rotation: 10,
        ease: Bounce.easeOut
      })
      .fromTo(
        '.dino__background',
        1.75,
        {
          opacity: 0,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          ease: Bounce.easeOut
        },
        '-=1.75'
      )
      .to(
        '.introduction-dino__last-name',
        0.05,
        {
          y: -45
        },
        '-=1.1'
      )
      .to(
        '.introduction-dino__first-name',
        0.05,
        {
          y: -75
        },
        '-=1.1'
      )
      .to(
        '.introduction-dino__last-name',
        0.7,
        {
          y: 0,
          ease: Bounce.easeOut
        },
        '-=1'
      )
      .to(
        '.introduction-dino__first-name',
        0.7,
        {
          y: 0,
          ease: Bounce.easeOut
        },
        '-=1'
      )
      .to(
        '.dino__artwork--eye-open',
        0.15,
        {
          opacity: 0
        },
        '+=0.5'
      )
      .to(
        '.dino__artwork--eye-closed',
        0.15,
        {
          opacity: 1
        },
        '+=0.15'
      )
      .to(
        '.dino__forground',
        1,
        {
          rotation: 35
        },
        '+=0.3'
      )
      .to('.dino__forground', 1, {
        rotation: 0,
        ease: Bounce.easeOut
      })
      .fromTo(
        '.introduction__text',
        0.5,
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          ease: Bounce.easeOut
        },
        '-=0.75'
      )
      .fromTo(
        '.introduction__cta',
        0.5,
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          ease: Bounce.easeOut
        },
        '-=0.65'
      )
      .from(
        '.scroll-hint',
        0.25,
        {
          y: 30,
          opacity: 0
        },
        '-=0.65'
      )
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.introduction-dino {
  display: flex;
  justify-content: space-between;
  flex: 0 1 auto;
  margin-bottom: 20px;
  width: 100%;

  &__headline {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 0 1 auto;
    padding-bottom: 4px;
    width: 52%;

    h1 {
      line-height: 2.2rem;
    }
  }
  &__first-name {
    display: block;
    color: $color-white;
    font-size: $fs1;
    font-weight: 300;
  }
  &__last-name {
    display: block;
    font-size: $fs5;
    font-weight: 700;
    color: $color-red-dark;

    @media (max-width: 345px) {
      font-size: 2.75rem;
    }
  }
  &__illustration {
    position: relative;
    flex: 0 1 auto;
    padding-top: 14px;
    width: 48%;
    max-width: 218px;
  }
}

.dino {
  &__forground {
    position: relative;
    visibility: hidden;
    z-index: 1;
    transform-origin: 69% 78%;
  }
  &__background {
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;

    img {
      width: 100%;
    }
  }
  &__artwork {
    position: relative;
    width: 100%;

    &--eye-open,
    &--eye-closed {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
