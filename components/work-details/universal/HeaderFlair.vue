<template>
  <div :class="`header-flair--${modifiers.id}`" class="header-flair">
    <div class="container container--narrow">
      <div class="header-flair__content">
        <div class="header-flair__box header-flair__box--one"></div>
        <div class="header-flair__box header-flair__box--two"></div>
        <div class="header-flair__box header-flair__box--three"></div>
        <div class="header-flair__box header-flair__box--four"></div>
        <div class="header-flair__box header-flair__box--five"></div>
        <div class="header-flair__box header-flair__box--six"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
export default {
  props: {
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
  mounted: function() {
    // Only animated if user hasn't scrolled past already
    if (
      scrolledPast(
        document.querySelector(`.header-flair--${this.modifiers.id}`)
      ) === true
    ) {
      return
    }

    // Timeline class.
    const TimelineLite = this.$GSAP.TimelineLite

    // Flair elements.
    const flair = {
      one: document.querySelector(
        `.header-flair--${this.modifiers.id} .header-flair__box--one`
      ),
      two: document.querySelector(
        `.header-flair--${this.modifiers.id} .header-flair__box--two`
      ),
      three: document.querySelector(
        `.header-flair--${this.modifiers.id} .header-flair__box--three`
      ),
      four: document.querySelector(
        `.header-flair--${this.modifiers.id} .header-flair__box--four`
      ),
      five: document.querySelector(
        `.header-flair--${this.modifiers.id} .header-flair__box--five`
      ),
      six: document.querySelector(
        `.header-flair--${this.modifiers.id} .header-flair__box--six`
      )
    }

    // Creat flair timeline.
    const flairTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [flair]
    })

    // Flair animation.
    flairTimeline
      .fromTo(flair.three, 0.33, { y: -25 }, { y: 0 }, '+=0.5')
      .fromTo(flair.two, 0.33, { y: -25 }, { y: -6 }, '-=0.2')
      .fromTo(flair.four, 0.33, { y: -25 }, { y: -6 }, '-=0.2')
      .fromTo(flair.one, 0.33, { y: -25 }, { y: -16 }, '-=0.2')
      .fromTo(flair.five, 0.33, { y: -25 }, { y: -12 }, '-=0.2')
      .fromTo(flair.six, 0.33, { y: -25 }, { y: -17 }, '-=0.2')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.header-flair {
  width: 100%;

  /**
   * MemorialCare
   */
  &--mc-header {
    .header-flair__box--one {
      background-color: $color-mc-blue;
    }
    .header-flair__box--two {
      background-color: $color-mc-pink;
    }
    .header-flair__box--three {
      background-color: $color-mc-blue-dark;
    }
    .header-flair__box--four {
      background-color: $color-mc-blue;
    }
    .header-flair__box--five {
      background-color: $color-mc-pink;
    }
    .header-flair__box--six {
      background-color: $color-mc-blue-dark;
    }
  }
  &__content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 60px;
    overflow: hidden;
  }
  &__box {
    flex: 0 1 auto;
    width: 34px;
    height: 25px;
    margin-right: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &--one {
      transform: translateY(-16px);
    }
    &--two {
      transform: translateY(-6px);
    }
    &--four {
      transform: translateY(-6px);
    }
    &--five {
      transform: translateY(-12px);
    }
    &--six {
      transform: translateY(-17px);
    }
  }
}
</style>
