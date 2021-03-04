<template>
  <div :class="`cta-hero cta-hero--${cta.id}`">
    <!-- Use nuxt-link if an internal link -->
    <div v-if="cta.target === '_self'" class="cta-hero__wrap">
      <nuxt-link :to="cta.link" class="cta-hero__link" :target="cta.target">
        <div class="cta-hero__text">{{ cta.text }}</div>
        <div class="cta-hero__arrow">
          <cta-arrow :id="cta.id" />
        </div>
      </nuxt-link>
    </div>
    <!-- Else use <a> if an external link -->
    <div v-else class="cta-hero__wrap">
      <a :href="cta.link" class="cta-hero__link" :target="cta.target">
        <div class="cta-hero__text">{{ cta.text }}</div>
        <div class="cta-hero__arrow">
          <cta-arrow :id="cta.id" />
        </div>
      </a>
    </div>
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
    },
    cta: {
      type: Object,
      default: function() {
        return {
          id: 'default',
          text: 'About Me',
          link: '/about-me',
          linkTarget: '_self'
        }
      }
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
      background-color: $color-mc-blue-medium;
    }
  }
  &__wrap {
    flex: 0 1 auto;
  }
  &__link {
    display: block;
    flex: 0 1 auto;
    padding: 20px 38px;
    background-color: $color-red-dark;
    border-radius: 16px;
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      outline: none;

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
