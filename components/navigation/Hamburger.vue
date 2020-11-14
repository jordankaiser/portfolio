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
  data: function() {
    return {
      hamburgerOpenTimeline: null,
      hamburgerCloseTimeline: null,
      linksTimeline: null
    }
  },
  computed: {
    isAnimationPlaying() {
      return (
        this.hamburgerOpenTimeline.isActive() === true ||
        this.hamburgerCloseTimeline.isActive() === true ||
        this.linksTimeline.isActive()
      )
    }
  },
  mounted() {
    this.createHamburgerOpenTimeline()
    this.createHamburgerCloseTimeline()
    this.createLinksTimeline()
  },
  methods: {
    toggleNavigation() {
      // Don't toggle nav if animation is playing.
      if (this.isAnimationPlaying === false) {
        if (this.$store.state.menuOpen) {
          this.linksTimeline.timeScale(2)
          this.linksTimeline.reverse(0)
          this.hamburgerCloseTimeline.play(0)
        } else {
          this.linksTimeline.timeScale(1)
          this.linksTimeline.play()
          this.hamburgerOpenTimeline.play(0)
        }
        this.$store.commit('toggleMenuOpen')
      }
    },
    createLinksTimeline() {
      const TimelineLite = this.$GSAP.TimelineLite
      const timeline = new TimelineLite({ paused: true })
      const elements = {
        backgroundContainer: '.links',
        backgrounds: [
          document.querySelector('.links__background--one'),
          document.querySelector('.links__background--two'),
          document.querySelector('.links__background--three')
        ],
        links: '.links__text',
        linkUnderlines: '.links__link__underline',
        linkHeadlines: '.links__headline'
      }

      timeline
        .set(elements.backgroundContainer, { x: 0 })
        .staggerFromTo(
          elements.backgrounds,
          1.25,
          { x: 177, y: -322 },
          /* eslint-disable-next-line no-undef */
          { x: 0, y: 0, ease: Back.easeOut.config(1.7) },
          0.1
        )
        .staggerFromTo(
          elements.links,
          0.75,
          { opacity: 0, x: 30 },
          /* eslint-disable-next-line no-undef */
          { opacity: 1, x: 0, ease: Back.easeOut.config(2) },
          0.1,
          '-=1'
        )
        .staggerFromTo(
          elements.linkUnderlines,
          0.75,
          { opacity: 0, x: 30 },
          /* eslint-disable-next-line no-undef */
          { opacity: 1, x: 0, ease: Back.easeOut.config(2) },
          0.1,
          '-=0.75'
        )
        .staggerFromTo(
          elements.linkHeadlines,
          0.5,
          { opacity: 0 },
          { opacity: 0.75 },
          0.2,
          '-=0.5'
        )

      this.linksTimeline = timeline
    },
    createHamburgerCloseTimeline() {
      const TimelineLite = this.$GSAP.TimelineLite
      const timeline = new TimelineLite({ paused: true })

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
      this.hamburgerCloseTimeline = timeline
    },
    createHamburgerOpenTimeline() {
      const TimelineLite = this.$GSAP.TimelineLite
      const timeline = new TimelineLite({ paused: true })

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
      this.hamburgerOpenTimeline = timeline
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
