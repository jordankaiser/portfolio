<template>
  <div :class="CtaHero" class="cta-hero">
    <nuxt-link to="/styleguide" class="cta-hero__link">
      <div class="cta-hero__text">About Me</div>
      <div class="cta-hero__arrow">
        <cta-arrow />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import TweenLite from 'gsap/umd/TweenLite'
/* eslint-disable-next-line */
import TimelineLite from 'gsap/umd/TimelineLite'
import CtaArrow from '~/components/CTAArrow'
if (process.client) {
  /* eslint-disable-next-line */
  const MorphSVGPlugin = require('~/assets/vendor/MorphSVGPlugin');
}
export default {
  components: {
    CtaArrow
  },
  props: {
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    CtaHero: function() {
      return {
        'cta-hero--red': this.color === 'red',
        'cta-hero--purple': this.color === 'purple'
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
