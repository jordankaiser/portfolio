<template>
  <div class="pill-footer">
    <img
      src="~/assets/img/work/mc/pill-circle-pink.png"
      alt="Pill Illustration"
      class="pill-footer__circle pill-footer__circle--1"
    />
    <img
      src="~/assets/img/work/mc/pill-oval-blue.png"
      alt="Pill Illustration"
      class="pill-footer__oval pill-footer__oval--1"
    />
    <img
      src="~/assets/img/work/mc/pill-circle-pink.png"
      alt="Pill Illustration"
      class="pill-footer__circle pill-footer__circle--2"
    />
    <img
      src="~/assets/img/work/mc/pill-oval-blue.png"
      alt="Pill Illustration"
      class="pill-footer__oval pill-footer__oval--2"
    />
    <img
      src="~/assets/img/work/mc/pill-circle-pink.png"
      alt="Pill Illustration"
      class="pill-footer__circle pill-footer__circle--3"
    />
    <img
      src="~/assets/img/work/mc/pill-oval-blue.png"
      alt="Pill Illustration"
      class="pill-footer__oval pill-footer__oval--3"
    />
  </div>
</template>
<script>
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
export default {
  props: {
    modifiers: {
      type: Object,
      default: function() {
        return {
          revealOffset: 0.85,
          triggerEl: '.pill-footer',
          initialDelay: '+=0'
        }
      }
    }
  },
  mounted: function() {
    // Broadly scopped variables.
    const vm = this
    const TimelineLite = vm.$GSAP.TimelineLite

    // Footer reveal.
    const footerIllustrations = {
      circle1: document.querySelector('.pill-footer__circle--1'),
      oval1: document.querySelector('.pill-footer__oval--1'),
      circle2: document.querySelector('.pill-footer__circle--2'),
      oval2: document.querySelector('.pill-footer__oval--2'),
      circle3: document.querySelector('.pill-footer__circle--3'),
      oval3: document.querySelector('.pill-footer__oval--3')
    }
    const footerTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [footerIllustrations]
    })
    footerTimeline
      .fromTo(
        footerIllustrations.oval2,
        0.75,
        { y: 60, rotation: 0 },
        /* eslint-disable-next-line no-undef */
        { y: -28, rotation: 188, ease: Back.easeOut.config(1) },
        `${this.modifiers.initialDelay}`
      )
      .fromTo(
        footerIllustrations.circle2,
        0.75,
        { y: 30, rotation: -100 },
        /* eslint-disable-next-line no-undef */
        { y: -13, rotation: 164, ease: Back.easeOut.config(1.7) },
        '-=0.65'
      )
      .fromTo(
        footerIllustrations.circle3,
        0.75,
        { y: 60, rotation: -201 },
        /* eslint-disable-next-line no-undef */
        { y: -20, rotation: 19, ease: Back.easeOut.config(1.7) },
        '-=0.65'
      )
      .fromTo(
        footerIllustrations.oval1,
        0.75,
        { y: 60, rotation: -201 },
        /* eslint-disable-next-line no-undef */
        { y: -20, rotation: 146, ease: Back.easeOut.config(1.7) },
        '-=0.65'
      )
      .fromTo(
        footerIllustrations.oval3,
        0.75,
        { y: 60, rotation: -201 },
        /* eslint-disable-next-line no-undef */
        { y: -4, rotation: 57, ease: Back.easeOut.config(1.7) },
        '-=0.65'
      )
      .fromTo(
        footerIllustrations.circle1,
        0.75,
        { y: 60, rotation: -201 },
        /* eslint-disable-next-line no-undef */
        { y: -9, rotation: 119, ease: Back.easeOut.config(1.7) },
        '-=0.65'
      )
    scrollMagicScene(
      vm,
      footerTimeline,
      vm.modifiers.triggerEl,
      vm.modifiers.revealOffset
    )
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.pill-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: calc(#{$s0} - 5px);
  width: 240px;
  height: 71px;
  overflow: hidden;

  &__circle {
    width: 26px;
    height: auto;

    &--1 {
      transform: translate(14px, -9px) rotate(119deg);
    }
    &--2 {
      transform: translate(4px, -13px) rotate(164deg);
    }
    &--3 {
      transform: translate(-5px, -20px) rotate(19deg);
    }
  }
  &__oval {
    width: 22px;
    height: auto;

    &--1 {
      transform: translate(7px, -20px) rotate(146deg);
    }
    &--2 {
      transform: translate(0px, -28px) rotate(188deg);
    }
    &--3 {
      transform: translate(-10px, -4px) rotate(57deg);
    }
  }
}
</style>
