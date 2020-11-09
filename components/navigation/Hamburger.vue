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
      console.log(hamburgerTimeline.isActive())
      if (!hamburgerTimeline.isActive()) {
        this.$store.commit('toggleMenuOpen')
        if (this.navigationOpen) {
          navLinksTimeline.reverse(0)
        } else {
          navLinksTimeline.play()
        }
        hamburgerTimeline.play()
        this.navigationOpen = this.navigationOpen !== true
      }
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

      if (this.navigationOpen) {
        timeline
          // Hamburger middle.
          .to('.hamburger__middle.hamburger__middle--one', 0.5, {
            morphSVG: '.hamburger__middle.hamburger__middle--two'
          })
          .to('.hamburger__middle.hamburger__middle--one', 0.5, {
            morphSVG: '.hamburger__middle.hamburger__middle--one'
          })

          // Hamburger top.
          .to(
            '.hamburger__top.hamburger__top--one',
            0.2,
            {
              morphSVG: '.hamburger__top.hamburger__top--two'
            },
            '-=0.25'
          )
          .to('.hamburger__top.hamburger__top--one', 0.2, {
            morphSVG: '.hamburger__top.hamburger__top--one'
          })

          // Hamburger bottom.
          .to(
            '.hamburger__bottom.hamburger__bottom--one',
            0.2,
            {
              morphSVG: '.hamburger__bottom.hamburger__bottom--two'
            },
            '-=0.4'
          )
          .to(
            '.hamburger__bottom.hamburger__bottom--one',
            0.2,
            {
              morphSVG: '.hamburger__bottom.hamburger__bottom--one'
            },
            '-=0.2'
          )
        return timeline
      } else {
        timeline
          // Hamburger top.
          .to('.hamburger__top.hamburger__top--one', 0.4, {
            morphSVG: '.hamburger__top.hamburger__top--two'
          })
          .to('.hamburger__top.hamburger__top--one', 0.4, {
            morphSVG: '.hamburger__top.hamburger__top--three'
          })

          // Hamburger bottom.
          .to(
            '.hamburger__bottom.hamburger__bottom--one',
            0.4,
            {
              morphSVG: '.hamburger__bottom.hamburger__bottom--two'
            },
            '-=0.8'
          )
          .to(
            '.hamburger__bottom.hamburger__bottom--one',
            0.4,
            {
              morphSVG: '.hamburger__bottom.hamburger__bottom--three'
            },
            '-=0.4'
          )

          // Hamburger middle.
          .to(
            '.hamburger__middle.hamburger__middle--one',
            0.5,
            {
              morphSVG: '.hamburger__middle.hamburger__middle--two'
            },
            '-=0.4'
          )
          .to('.hamburger__middle.hamburger__middle--one', 0.5, {
            morphSVG: '.hamburger__middle.hamburger__middle--three'
          })
        return timeline
      }
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
