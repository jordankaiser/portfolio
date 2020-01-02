<template>
  <div class="cta-tertiary">
    <a :href="link.href" class="cta-tertiary__link">
      <div class="cta-tertiary__text">{{ link.text }}</div>
      <div class="cta-tertiary__icon">
        <div class="cta-tertiary__circle"></div>
        <img
          src="~/assets/img/cta-arrow-horiz.png"
          alt="Arrow"
          class="cta-tertiary__arrow"
        />
      </div>
    </a>
  </div>
</template>
<script>
import TimelineLite from 'gsap/umd/TimelineLite'
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
    const timeline = new TimelineLite({ paused: true })
    const widthOffset = -Math.abs(
      document.querySelector('.cta-tertiary__link').offsetWidth
    )

    timeline
      /* eslint-disable-next-line */
      .to('.cta-tertiary__icon', 0.5, { x: widthOffset,  ease: Back.easeOut.config( 1.7) })
      .to('.cta-tertiary__text', 0.15, { x: 8 }, '-=0.5')
      .to(
        '.cta-tertiary__circle',
        0.25,
        /* eslint-disable-next-line */
        { scaleY: 0.75, ease: Power1.easeOut },
        '-=0.5'
      )
      /* eslint-disable-next-line */
      .to('.cta-tertiary__circle', 0.25, { scaleY: 1, ease: Power1.easeIn }, '-=0.25')

    // Events.
    document
      .querySelector('.cta-tertiary__link')
      .addEventListener('mouseenter', () => {
        play()
      })
    document
      .querySelector('.cta-tertiary__link')
      .addEventListener('mouseleave', () => {
        reverse()
      })
    document
      .querySelector('.cta-tertiary__link')
      .addEventListener('focus', () => {
        play()
      })
    document
      .querySelector('.cta-tertiary__link')
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
.cta-tertiary {
  position: relative;
  flex: 0 1 auto;

  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $color-blue-light;
  }
  &__text {
    flex: 0 1 auto;
    width: 75%;
    margin-right: 7px;
  }
  &__icon {
    position: relative;
    flex: 0 0 auto;
    width: 30px;
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
