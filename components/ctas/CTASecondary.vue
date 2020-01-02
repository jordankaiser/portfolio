<template>
  <div class="cta-secondary">
    <a :href="link.href" class="cta-secondary__link">
      <div class="cta-secondary__text">{{ link.text }}</div>
      <div class="cta-secondary__icon">
        <div class="cta-secondary__circle"></div>
        <img
          src="~/assets/img/cta-arrow-horiz.png"
          alt="Arrow"
          class="cta-secondary__arrow"
        />
      </div>
    </a>
  </div>
</template>
<script>
import TimelineLite from 'gsap/umd/TimelineLite'
import { secondaryTertiaryCTA } from '~/plugins/secondaryTertiaryCTA'
export default {
  props: {
    link: {
      type: Object,
      default: function() {
        return {
          text: 'Home',
          href: '/'
        }
      }
    }
  },
  mounted: function() {
    secondaryTertiaryCTA('.cta-secondary__link')
    const timeline = new TimelineLite({ paused: true })
    const widthOffset = -Math.abs(
      document.querySelector('.cta-secondary__link').offsetWidth
    )

    timeline
      /* eslint-disable-next-line */
      .to('.cta-secondary__icon', 0.5, { x: widthOffset,  ease: Back.easeOut.config( 1.7) })
      .to('.cta-secondary__text', 0.15, { x: 5 }, '-=0.5')
      .to(
        '.cta-secondary__circle',
        0.25,
        /* eslint-disable-next-line */
        { scaleY: 0.75, ease: Power1.easeOut },
        '-=0.5'
      )
      /* eslint-disable-next-line */
      .to('.cta-secondary__circle', 0.25, { scaleY: 1, ease: Power1.easeIn }, '-=0.25')

    // Events.
    document
      .querySelector('.cta-secondary__link')
      .addEventListener('mouseenter', () => {
        play()
      })
    document
      .querySelector('.cta-secondary__link')
      .addEventListener('mouseleave', () => {
        reverse()
      })
    document
      .querySelector('.cta-secondary__link')
      .addEventListener('focus', () => {
        play()
      })
    document
      .querySelector('.cta-secondary__link')
      .addEventListener('blur', () => {
        reverse()
      })

    // Play timeline.
    function play() {
      timeline.play()
    }

    // Reverse timeline.
    function reverse() {
      timeline.play().reverse()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.cta-secondary {
  position: relative;
  flex: 0 1 auto;

  &__link {
    display: block;
    position: relative;
    text-decoration: none;
    padding-top: 15px;
    padding-right: 30px;
    padding-bottom: 15px;
    padding-left: 25px;
    border-radius: 16px;
    background-color: $color-blue-light;
    color: $color-white;
    font-family: $font-raleway;

    &:hover,
    &:focus,
    &:active {
      .cta-secondary__icon {
        // right: calc(100% - 15px);
      }
    }
  }
  &__text {
    // transition: transform $t;
  }
  &__icon {
    position: absolute;
    right: -15px;
    top: 50%;
    width: 30px;
    transform: translate(0, -50%);
    // transition: right $t;
  }
  &__circle {
    width: 30px;
    height: 30px;
    background-color: $color-orange;
    border-radius: 30px;
    box-shadow: 2px 2px 4.76px rgba(0, 0, 0, 0.2);
  }
  &__arrow {
    position: absolute;
    width: 15px;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
