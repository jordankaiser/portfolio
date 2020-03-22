<template>
  <div :class="`flair--${modifier}`" class="flair">
    <div class="flair__box flair__box--one"></div>
    <div class="flair__box flair__box--two"></div>
    <div class="flair__box flair__box--three"></div>
    <div class="flair__box flair__box--four"></div>
    <div class="flair__box flair__box--five"></div>
    <div class="flair__box flair__box--six"></div>
  </div>
</template>
<script>
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
export default {
  props: {
    modifier: {
      type: String,
      default: 'default'
    }
  },
  mounted: function() {
    // Only animated if user hasn't scrolled past already
    if (
      scrolledPast(document.querySelector(`.flair--${this.modifier}`)) === true
    ) {
      return
    }

    // Timeline class.
    const TimelineLite = this.$GSAP.TimelineLite

    // Flair elements.
    const flair = {
      one: document.querySelector('.flair__box--one'),
      two: document.querySelector('.flair__box--two'),
      three: document.querySelector('.flair__box--three'),
      four: document.querySelector('.flair__box--four'),
      five: document.querySelector('.flair__box--five'),
      six: document.querySelector('.flair__box--six')
    }

    // Creat flair timeline.
    const flairTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [flair]
    })

    // Flair animation.
    flairTimeline
      .fromTo(flair.three, 0.33, { y: 25 }, { y: 0 }, '+=0.5')
      .fromTo(flair.two, 0.33, { y: 25 }, { y: 6 }, '-=0.2')
      .fromTo(flair.four, 0.33, { y: 25 }, { y: 6 }, '-=0.2')
      .fromTo(flair.one, 0.33, { y: 25 }, { y: 16 }, '-=0.2')
      .fromTo(flair.five, 0.33, { y: 25 }, { y: 12 }, '-=0.2')
      .fromTo(flair.six, 0.33, { y: 25 }, { y: 17 }, '-=0.2')

    // Reveal flair animation on scroll.
    scrollMagicScene(this, flairTimeline, '.mc-hero', 0.7)
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.flair {
  display: flex;
  justify-content: space-between;
  width: 194px;
  overflow: hidden;

  /**
   * MemorialCare
   */
  &--mc {
    .flair__box--one {
      background-color: $color-mc-blue;
    }
    .flair__box--two {
      background-color: $color-mc-pink;
    }
    .flair__box--three {
      background-color: $color-mc-blue-dark;
    }
    .flair__box--four {
      background-color: $color-mc-blue;
    }
    .flair__box--five {
      background-color: $color-mc-pink;
    }
    .flair__box--six {
      background-color: $color-mc-blue-dark;
    }
  }
  &__box {
    width: 24px;
    height: 25px;
    background-color: orange;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    &--one {
      transform: translateY(16px);
    }
    &--two {
      transform: translateY(6px);
    }
    &--four {
      transform: translateY(6px);
    }
    &--five {
      transform: translateY(12px);
    }
    &--six {
      transform: translateY(17px);
    }
  }
}
</style>
