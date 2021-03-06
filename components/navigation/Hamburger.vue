<template>
  <div class="hamburger">
    <button
      href="#"
      class="hamburger__button"
      aria-label="Open menu."
      aria-expanded="false"
      @click.prevent="toggleNavigation"
    >
      <div class="hamburger__background-wrap">
        <div class="hamburger__background"></div>
      </div>
      <hamburger-top />
      <hamburger-middle />
      <hamburger-bottom />
    </button>
  </div>
</template>
<script>
import hamburgerTop from '~/components/svg/hamburgerTop.vue'
import hamburgerMiddle from '~/components/svg/hamburgerMiddle.vue'
import hamburgerBottom from '~/components/svg/hamburgerBottom.vue'
/* eslint-disable-next-line   no-unused-vars */
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
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
      const elements = {
        backgroundContainer: document.querySelector('.links'),
        backgrounds: [
          document.querySelector('.links__background--one'),
          document.querySelector('.links__background--two'),
          document.querySelector('.links__background--three')
        ],
        links: document.querySelectorAll('.links__text'),
        linkUnderlines: document.querySelectorAll('.links__link__underline'),
        linkHeadlines: document.querySelectorAll('.links__headline'),
        home: document.querySelector('.links__home'),
        homeIcon: document.querySelector('.links__home .icon-home')
      }
      const TimelineLite = this.$GSAP.TimelineLite
      const timeline = new TimelineLite({
        paused: true,
        onComplete: this.cleanup,
        onCompleteParams: ['createLinksTimeline', elements]
      })

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
        .fromTo(elements.home, 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.5')

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
    },
    cleanup(context, elements) {
      timelineCleanup({ ...elements.linkUnderlines })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@import '~/assets/scss/_variables.scss';
.hamburger {
  position: relative;

  &__button {
    @include buttonReset;
    position: relative;
    padding: 12px;
    height: 52px;
    z-index: 2;

    &:hover,
    &:active,
    &:focus {
      .hamburger__background {
        transform: translate(0px, 0px);
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: $color-red;
      border-bottom-left-radius: 10px;
      z-index: 2;
    }
  }
  &__background-wrap {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    overflow: hidden;
  }
  &__background {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 12px;
    background-color: $color-orange;
    transform: translate(5px, -5px);
    transition: transform $t;
    z-index: 1;
  }
  &__middle {
    position: relative;
    z-index: 3;
  }
  &__top,
  &__bottom {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 3;
  }
}
</style>
