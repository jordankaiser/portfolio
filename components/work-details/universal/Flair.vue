<template>
  <div :class="`flair--${modifiers.id}`" class="flair">
    <div class="flair__box flair__box--one"></div>
    <div class="flair__box flair__box--two"></div>
    <div class="flair__box flair__box--three"></div>
    <div class="flair__box flair__box--four"></div>
    <div class="flair__box flair__box--five"></div>
    <div class="flair__box flair__box--six"></div>
  </div>
</template>
<script>
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
export default {
  props: {
    lazyloaded: {
      type: Boolean,
      default: false
    },
    modifiers: {
      type: Object,
      default: function() {
        return {
          id: 'default',
          revealOffset: 0.7
        }
      }
    }
  },
  watch: {
    lazyloaded(newVal, oldVal) {
      if (newVal) {
        this.createFlairTimeline()
      }
    }
  },
  methods: {
    createFlairTimeline() {
      console.log('creating flair timeline')
      // Only animated if user hasn't scrolled past already
      if (
        scrolledPast(document.querySelector(`.flair--${this.modifiers.id}`)) ===
        true
      ) {
        return
      }

      // Timeline class.
      const TimelineLite = this.$GSAP.TimelineLite

      // Flair elements.
      const flair = {
        one: document.querySelector(
          `.flair--${this.modifiers.id} .flair__box--one`
        ),
        two: document.querySelector(
          `.flair--${this.modifiers.id} .flair__box--two`
        ),
        three: document.querySelector(
          `.flair--${this.modifiers.id} .flair__box--three`
        ),
        four: document.querySelector(
          `.flair--${this.modifiers.id} .flair__box--four`
        ),
        five: document.querySelector(
          `.flair--${this.modifiers.id} .flair__box--five`
        ),
        six: document.querySelector(
          `.flair--${this.modifiers.id} .flair__box--six`
        )
      }

      // Creat flair timeline.
      const flairTimeline = new TimelineLite()

      // Flair animation.
      flairTimeline
        .set(flair.three, { opacity: 1 })
        .fromTo(
          flair.three,
          0.33,
          { y: 25 },
          { y: 0 },
          `${this.modifiers.initialDelay}`
        )
        .set(
          [
            flair.one,
            flair.two,
            flair.three,
            flair.four,
            flair.five,
            flair.six
          ],
          { opacity: 1 }
        )
        .fromTo(flair.two, 0.33, { y: 25 }, { y: 6 }, '-=0.2')
        .fromTo(flair.four, 0.33, { y: 25 }, { y: 6 }, '-=0.2')
        .fromTo(flair.one, 0.33, { y: 25 }, { y: 16 }, '-=0.2')
        .fromTo(flair.five, 0.33, { y: 25 }, { y: 12 }, '-=0.2')
        .fromTo(flair.six, 0.33, { y: 25 }, { y: 17 }, '-=0.2')

      // Reveal flair animation on scroll.
      scrollMagicScene(
        this,
        flairTimeline,
        `${this.modifiers.triggerEl}`,
        this.modifiers.revealOffset
      )
    }
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
  &--mc-tools,
  &--mc-screenshot,
  &[class*='mc-screenshot'] {
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
    opacity: 0;

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
