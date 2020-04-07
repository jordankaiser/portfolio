<template>
  <div
    :class="`caption--${caption.id} caption--${caption.uniqueId}`"
    class="caption"
  >
    <div class="caption__flair-left"></div>
    <div class="caption__flair-right"></div>
    <div class="caption__content">
      <div class="caption__text">
        <slot name="captionText"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
// import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
export default {
  props: {
    caption: {
      type: Object,
      default: function() {
        return {
          id: 'default',
          uniqueId: 'one'
        }
      }
    }
  },
  mounted: function() {
    // TODO: Uncomment this after finished.
    // Only animated if user hasn't scrolled past already
    // if (
    //   scrolledPast(document.querySelector(`.caption--${this.caption.id}`)) ===
    //   true
    // ) {
    //   /* eslint-disable-next-line no-useless-return */
    //   return
    // }

    // Timeline class.
    const TimelineLite = this.$GSAP.TimelineLite

    // Animated elements.
    const uniqueEl = `.caption--${this.caption.uniqueId}`
    const caption = {
      flairLeft: document.querySelector(`${uniqueEl} .caption__flair-left`),
      flairRight: document.querySelector(`${uniqueEl} .caption__flair-right`),
      content: document.querySelector(`${uniqueEl} .caption__content`),
      text: document.querySelector(`${uniqueEl} .caption__text`),
      cta: document.querySelector(this.caption.cta)
    }

    // Creat flair timeline.
    const captionTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [caption]
    })

    captionTimeline
      .fromTo(
        caption.content,
        0.5,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1 }
      )
      .fromTo(caption.flairLeft, 1.25, { y: -70 }, { y: 0 }, '-=0.25')
      .fromTo(caption.flairRight, 1.75, { y: -200 }, { y: 0 }, '-=0.85')
      .fromTo(
        caption.text,
        1,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=2'
      )
      .fromTo(
        caption.cta,
        1,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=1.0'
      )

    // Reveal flair animation on scroll.
    scrollMagicScene(this, captionTimeline, uniqueEl, 0.6)
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.caption {
  position: relative;
  padding-right: $s-1;
  padding-left: $s-1;
  top: -5px;
  z-index: -1;

  &--mc {
    .caption__content {
      background-color: lighten($color-mc-purple, 6);
    }
    .caption__flair-left {
      background-color: $color-mc-pink;
    }
    .caption__flair-right {
      background-color: $color-mc-blue-dark;
    }
  }
  &__content {
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 45px;
    padding-right: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: orange;
    box-shadow: $box-shadow;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
  }
  &__flair-left {
    position: absolute;
    top: 0;
    left: 7px;
    width: 8px;
    height: 68px;
    background-color: lightcoral;
    border-bottom-left-radius: 5px;
    z-index: -1;
  }
  &__flair-right {
    position: absolute;
    top: 0;
    right: 7px;
    width: 8px;
    height: 173px;
    background-color: lightcoral;
    border-bottom-right-radius: 5px;
    z-index: -1;
  }
}
</style>
