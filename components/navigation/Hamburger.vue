<template>
  <button
    href="#"
    class="hamburger"
    aria-label="Open menu."
    aria-expanded="false"
    @click.prevent="toggleNavigation"
  >
    <hamburger-top />
    <hamburger-middle />
    <hamburger-bottom />
  </button>
</template>
<script>
import hamburgerTop from '~/components/svg/hamburgerTop.vue'
import hamburgerMiddle from '~/components/svg/hamburgerMiddle.vue'
import hamburgerBottom from '~/components/svg/hamburgerBottom.vue'
// Only pull in lib on client side.
if (process.client) {
  /* eslint-disable-next-line */
  const MorphSVGPlugin = require('~/assets/vendor/MorphSVGPlugin');
}
export default {
  components: {
    hamburgerTop,
    hamburgerMiddle,
    hamburgerBottom
  },
  methods: {
    toggleNavigation() {
      const navLinksTimeline = this.animateLinks()
      const hamburgerTimeline = this.hamburgerTimeline()
      this.$store.commit('toggleMenuOpen')
      if (this.navigationOpen) {
        navLinksTimeline.reverse(0)
        hamburgerTimeline.reverse(0)
      } else {
        navLinksTimeline.play()
        hamburgerTimeline.play()
      }
      this.navigationOpen = this.navigationOpen !== true
    },
    animateLinks() {
      const TimelineLite = this.$GSAP.TimelineLite
      const timeline = new TimelineLite({ paused: true })

      // Navigation animation.
      timeline.fromTo('.links', 0.5, { x: 177 }, { x: 0 })
      return timeline
    },
    hamburgerTimeline() {
      const TimelineLite = this.$GSAP.TimelineLite
      const timeline = new TimelineLite({ paused: true })

      timeline
        .fromTo(
          '.hamburger__top.hamburger__top--one',
          0.1,
          {
            morphSVG: '.hamburger__top.hamburger__top--one'
          },
          {
            morphSVG: '.hamburger__top.hamburger__top--two'
          }
        )
        .fromTo(
          '.hamburger__top.hamburger__top--one',
          0.1,
          {
            morphSVG: '.hamburger__top.hamburger__top--two'
          },
          {
            morphSVG: '.hamburger__top.hamburger__top--three'
          }
        )
        .fromTo(
          '.hamburger__bottom.hamburger__bottom--one',
          0.1,
          {
            morphSVG: '.hamburger__bottom.hamburger__bottom--one'
          },
          {
            morphSVG: '.hamburger__bottom.hamburger__bottom--two'
          },
          '-=0.2'
        )
        .fromTo(
          '.hamburger__bottom.hamburger__bottom--one',
          0.1,
          {
            morphSVG: '.hamburger__bottom.hamburger__bottom--two'
          },
          {
            morphSVG: '.hamburger__bottom.hamburger__bottom--three'
          },
          '-=0.05'
        )
        .fromTo(
          '.hamburger__middle.hamburger__middle--one',
          1,
          {
            morphSVG: '.hamburger__middle.hamburger__middle--one'
          },
          {
            morphSVG: '.hamburger__middle.hamburger__middle--two'
          }
        )
        .fromTo(
          '.hamburger__middle.hamburger__middle--one',
          1,
          {
            morphSVG: '.hamburger__middle.hamburger__middle--two'
          },
          {
            morphSVG: '.hamburger__middle.hamburger__middle--three'
          },
          '+=1'
        )
      return timeline
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@import '~/assets/scss/_variables.scss';
.hamburger {
  @include buttonReset;
  position: relative;
  padding: 12px;
  height: 52px;
  background-color: $color-red;
  border-bottom-left-radius: 10px;
  transition: background-color 500ms;
  z-index: 1;

  &:hover,
  &:focus {
    background-color: $color-purple;
  }
  &__middle {
    position: relative;
  }
  &__top,
  &__bottom {
    position: absolute;
    top: 12px;
    left: 12px;
  }
}
</style>
