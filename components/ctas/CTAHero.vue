<template>
  <div :class="`cta-hero cta-hero--${id}`">
    <nuxt-link to="/styleguide" class="cta-hero__link">
      <div class="cta-hero__text">About Me</div>
      <div class="cta-hero__arrow">
        <cta-arrow :id="id" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import TweenLite from 'gsap/umd/TweenLite'
/* eslint-disable-next-line */
import TimelineLite from 'gsap/umd/TimelineLite'
import CtaArrow from '~/components/svg/ctaArrow'
// Only pull in lib on client side.
if (process.client) {
  /* eslint-disable-next-line */
  const MorphSVGPlugin = require('~/assets/vendor/MorphSVGPlugin');
}
export default {
  components: {
    CtaArrow
  },
  props: {
    id: {
      type: String,
      default: 'default'
    }
  },
  mounted: function() {
    const timeline = new TimelineLite({ paused: true })

    timeline
      .to('.cta-hero #cta-arrow-up', 0.2, {
        morphSVG: '#cta-arrow-circle'
      })
      .to('.cta-hero #cta-arrow-up', 0.2, {
        morphSVG: '#cta-arrow-down'
      })

    // Events.
    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('mouseenter', () => {
        play()
      })
    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('mouseleave', () => {
        reverse()
      })
    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('focus', () => {
        play()
      })
    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('blur', () => {
        reverse()
      })

    function play() {
      timeline.play()
    }

    function reverse() {
      timeline.play().reverse()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.cta-hero {
  position: relative;
  display: flex;
  justify-content: center;

  &--mc {
    // MemorialCare.
    .cta-hero__link {
      background-color: $color-mc-purple-dark;
    }
  }
  &__link {
    flex: 0 1 auto;
    padding: 20px 38px;
    background-color: $color-red-dark;
    border-radius: 16px;
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      .cta-hero__text {
        transform: translate(0px, 6px);
      }
      .cta-hero__arrow {
        transform: translate(-50%, -50px);
      }
    }
  }
  &__text {
    font-family: $font-raleway;
    color: $color-white;
    transform: translate(0px, -7px);
    transition: transform $t;
  }
  &__arrow {
    position: absolute;
    padding: 6px 38px 3px;
    bottom: -9px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: $color-white;
    border-radius: 20px;
    transition: transform $t;
    box-shadow: 3.19487px 4.69646px 5.76142px rgba(0, 0, 0, 0.2);
  }
}
</style>
