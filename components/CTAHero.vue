<template>
  <div class="cta-hero">
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
  mounted: function() {
    const timeline = new TimelineLite({ paused: true })

    timeline
      .to('.cta-hero #cta-arrow-up', 0.2, {
        morphSVG: '#cta-arrow-circle'
      })
      .to('.cta-hero #cta-arrow-up', 0.2, {
        morphSVG: '#cta-arrow-down'
      })

    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('mouseenter', () => {
        timeline.play()
      })
    document
      .querySelector('.cta-hero .cta-hero__link')
      .addEventListener('mouseleave', () => {
        timeline.play().reverse()
      })
  }
}
</script>
