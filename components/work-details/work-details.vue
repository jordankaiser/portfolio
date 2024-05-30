<template>
  <div
    :class="`work-detail work-detail--${content.id}`"
    :style="{ backgroundColor: content.backgroundColor }"
  >
    <Navigation />
    <!-- Scroll art -->
    <div class="work-detail__scroll-art">
      <div
        v-for="art in content.scrollArt"
        :key="art.className"
        :class="`${art.className} ${art.className}--${content.id}`"
      >
        <img
          class="work-detail__scroll-art__image"
          :src="require(`~/assets/img/work-detail/${art.imageSrc}`)"
          :alt="art.imageAlt"
        />
      </div>
    </div>
    <!-- Intro -->
    <div class="work-detail__intro container container--narrow">
      <!-- Roles -->
      <h4 :class="`work-detail__roles work-detail__roles--${content.id}`">
        Roles
        <span
          :class="
            `work-detail__role-seperator work-detail__role-seperator--${content.id}`
          "
          >|</span
        >
        <span v-for="(role, index) in content.roles" :key="role">
          <span v-if="index !== content.roles.length - 1"> {{ role }}, </span>
          <span v-else>
            {{ role }}
          </span>
        </span>
      </h4>

      <!-- Headline -->
      <h1 :class="`work-detail__headline work-detail__headline--${content.id}`">
        {{ content.title }}
      </h1>

      <!-- Description -->
      <!-- eslint-disable vue/no-v-html -->
      <div
        :class="
          `work-detail__description work-detail__description--${content.id} text`
        "
        class="work-detail__description text"
        v-html="content.description"
      ></div>
    </div>

    <!-- Tools -->
    <div
      :class="
        `work-detail__tools work-detail__tools--${content.id} container container--narrow`
      "
    >
      <div class="work-detail__tools__headline"><p>Tools</p></div>
      <div class="work-detail__tools__wrapper">
        <span
          v-for="tool in content.tools"
          :key="tool"
          class="work-detail__tools__tool-wrapper"
        >
          <span class="work-detail__tools__checkmark">
            <check-mark :checkmark="content.checkmark" />
          </span>
          <span class="work-detail__tools__tool">{{ tool }}</span>
        </span>
      </div>
    </div>

    <!-- Work Sections -->
    <div
      v-for="(work, index) in content.works"
      :key="work.title"
      :class="`work-detail__work work-detail__work--${content.id}-${index}`"
    >
      <div class="work-detail__work__background">
        <div
          :class="
            `work-detail__work__background-one work-detail__work__background-one--${content.id}`
          "
        ></div>
        <div
          :class="
            `work-detail__work__background-two work-detail__work__background-two--${content.id}`
          "
        ></div>
      </div>
      <div class="work-detail__work__content">
        <div class="work-detail__work__content__image">
          <img
            :src="require(`~/assets/img/work-detail/${work.image}`)"
            alt="Screenshot of MemorialCare Website"
          />
        </div>
        <div class="work-detail__work__content__text">
          <h2 class="work-detail__work__content__title">{{ work.title }}</h2>
          <p class="work-detail__work__content__description">
            {{ work.description }}
          </p>
          <div v-if="work.link" class="work-detail__work__content__cta">
            <CTASecondary :link="work.link" :varient="content.id" />
          </div>
        </div>
      </div>
    </div>

    <!-- Addendum -->
    <div
      v-if="content.addendum"
      :class="
        `work-detail__addendum work-detail__addendum--${content.id} container container--narrow`
      "
    >
      <h2 :class="`work-detail__headline work-detail__headline--${content.id}`">
        Addendum
      </h2>
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="work-detail__description text"
        v-html="content.addendum"
      ></div>
    </div>

    <!-- Back -->
    <div class="work-detail__back container container--narrow">
      <div class="work-detail__back__link">
        <CTATertiary :link="link" :varient="content.id" />
      </div>
    </div>

    <!-- Animated pattern -->
    <div ref="animatedDivWrapper" class="work-detail__animated-div">
      <div
        ref="animatedDiv"
        :style="{
          backgroundImage:
            'url(\'' +
            require(`~/assets/img/work-detail/${content.pattern}`) +
            '\')'
        }"
        class="work-detail__animated-div__animator"
      ></div>
    </div>
  </div>
</template>
<script>
// Helpers.
import debounce from 'lodash/debounce'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'

// Components.
import CheckMark from '~/components/checkmark/Checkmark.vue'
import CTASecondary from '~/components/ctas/CTASecondary'
import CTATertiary from '~/components/ctas/CTATertiary'
import Navigation from '~/components/navigation/Navigation'

export default {
  head() {
    return {
      title: 'MemorialCare',
      titleTemplate: '%s | Jordan Kaiser'
    }
  },
  components: {
    CheckMark,
    CTASecondary,
    CTATertiary,
    Navigation
  },
  props: {
    content: {
      type: Object,
      default: () => {
        return {}
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      roles: {
        type: Array,
        default: ['Developer']
      },
      checkmark: {
        type: Object,
        default: () => {
          return {
            width: '9px',
            height: '14px',
            backgroundColor: '#fff'
          }
        }
      },
      works: {
        type: Array,
        default: []
      },
      scrollArt: {
        type: Array,
        default: []
      }
    }
  },
  data: () => {
    return {
      lastScrollTop: 0,
      documentHeight: 0,
      link: {
        text: 'Home',
        href: '/',
        target: '_self'
      }
    }
  },
  mounted() {
    this.attachScrollDetection()
    this.animateWork()
    // this.animateScrollArt()
    this.setDocumentHeight()
  },
  methods: {
    animateSidePattern() {
      // Distance scrolled from the top.
      const scrolledTop =
        window.pageYOffset || document.documentElement.scrollTop
      const percentageScrolled = scrolledTop / this.documentHeight
      const scrollPositition = 250 * percentageScrolled
      if (scrolledTop > this.lastScrollTop && this.$refs.animatedDiv) {
        this.$refs.animatedDiv.style.transform = `translateY(calc(${scrollPositition}px - 50%))`
      } else if (this.$refs.animatedDiv) {
        this.$refs.animatedDiv.style.transform = `translateY(calc(${scrollPositition}px - 50%))`
      }
      this.lastScrollTop = scrolledTop <= 0 ? 0 : scrolledTop
    },
    attachScrollDetection() {
      window.onscroll = event => {
        window.requestAnimationFrame(() => {
          this.animateSidePattern(event)
        })
      }
    },
    animateWork() {
      const workSections = document.querySelectorAll('.work-detail__work')

      Array.from(workSections).forEach(workSection => {
        const ScrollMagic = this.$ScrollMagic
        const sceneController = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
          triggerElement: workSection,
          duration: workSection.offsetHeight * 4,
          triggerHook: 0.9
        })
          .setTween(
            workSection.querySelector('.work-detail__work__background-two'),
            {
              y: 90
            }
          )
          .addTo(sceneController)
      })
    },
    animateScrollArt() {
      const TimelineLite = this.$GSAP.TimelineLite

      const animatedClassNames = [
        '.work-detail__scroll-art__one',
        '.work-detail__scroll-art__two'
      ]

      let rotationAlternator = true
      animatedClassNames.forEach(animatedClassName => {
        const element = document.querySelector(animatedClassName)
        const timeline = new TimelineLite({
          onComplete: timelineCleanup,
          onCompleteParams: [document.querySelector(animatedClassName)]
        })

        rotationAlternator = !rotationAlternator
        const rotation = rotationAlternator ? 360 : -360

        timeline.from(element, 1, {
          x: -200,
          rotation: rotation,
          opacity: 0,
          scale: 0.25
        })

        // Reveal on scroll.
        scrollMagicScene(this, timeline, animatedClassName, 1)
      })
    },
    setDocumentHeight() {
      this.documentHeight = document.documentElement.scrollHeight
      window.addEventListener(
        'resize',
        debounce(() => {
          this.documentHeight = document.documentElement.scrollHeight
        }, 200)
      )
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work-detail {
  position: relative;
  padding-top: 80px;
  padding-bottom: $s1;

  &--mc {
    background-color: $color-mc-purple;
  }
  &--ezgo {
    background-color: $color-ezgo-blue;
    color: $color-blue;
  }
  &--slb {
    background-color: $color-slb-grey;
  }
  // Top left triangle.
  &:after {
    content: '';
    position: absolute;
    left: -9px;
    top: -30px;
    opacity: 0.5;
    width: 160px;
    height: 50px;
    transform: rotate(166deg);
  }

  // Headline.
  &__headline {
    position: relative;
    margin-top: $s-1;
    font-size: $fs4;
    color: $color-white;
    font-weight: 700;

    &--mc {
      color: $color-white;
    }
    &--ezgo {
      color: $color-blue;
    }
    @include breakpoint($small) {
      font-size: $fs6;
      line-height: $fs6;
    }
  }

  // Description.
  &__description {
    color: $color-white;
    margin-top: $s0;

    &--mc {
      color: $color-white;
    }
    &--ezgo {
      color: $color-blue;
    }
    p {
      margin-top: $s0;
    }
  }

  // Roles.
  &__roles {
    color: $color-white;
    font-size: $fs-1;
    line-height: $fs-1;

    &--mc {
      color: $color-white;
    }
    &--ezgo {
      color: $color-blue;
    }
    @include breakpoint($medium) {
      font-size: $fs0;
      line-height: $fs0;
    }
  }
  &__role-seperator {
    color: #2c024d;

    &--mc {
      color: #2c024d;
    }
    &--ezgo {
      color: #969ca5;
    }
    &--slb {
      color: $color-slb-orange;
    }
  }

  // Scroll art.
  &__scroll-art {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;

    &__one--mc {
      display: block;
      position: absolute;
      top: -183px;
      left: -51px;

      @media only screen and (min-width: 800px) {
        display: block;
        position: absolute;
        top: 100px;
        left: -50px;
      }
      img {
        transform: scale(0.28) rotate(-65deg);

        @media only screen and (min-width: 800px) {
          transform: scale(0.5) rotate(35deg);
        }
      }
    }
    &__two--mc {
      display: none;

      @media only screen and (min-width: 800px) {
        display: block;
        position: absolute;
        top: 400px;
        left: -10px;

        img {
          transform: scale(0.3) rotate(-40deg);
        }
      }
    }
    &__one--ezgo {
      display: block;
      position: absolute;
      top: -70px;
      left: 36%;
      width: 180px;

      @media only screen and (min-width: 800px) {
        top: 140px;
        left: -50px;
      }
      img {
        transform: rotate(107deg);

        @media only screen and (min-width: 800px) {
          transform: rotate(0deg);
        }
      }
    }
    &__two--ezgo {
      display: none;

      @media only screen and (min-width: 800px) {
        display: block;
        position: absolute;
        top: 670px;
        left: 27px;
        width: 84px;
      }
    }
    // TODO: Delete three aand four.
    &__four--ezgo {
      display: block;
      position: absolute;
      top: 2728px;
      left: 3px;
      width: 100px;
    }
    &__one--slb {
      display: block;
      position: absolute;
      top: -63px;
      left: 56%;
      width: 130px;

      @media only screen and (min-width: 800px) {
        top: 230px;
        left: 10px;
      }
      img {
        transform: rotate(94deg);

        @media only screen and (min-width: 800px) {
          transform: rotate(0deg);
        }
      }
    }
    &__image {
      width: 100%;
      height: auto;
    }
  }

  // Scrolling pattern.
  &__animated-div {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 25px;

    @include breakpoint($medium) {
      width: 95px;
      font-size: $fs6;
    }
    &__animator {
      position: absolute;
      top: 50%;
      right: 0;
      width: 100%;
      height: calc(100% + 500px);
      transform: translateY(-50%);
      background-repeat: repeat-y;
      background-size: 94px;
    }
  }

  // Tools.
  &__tools {
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-top: $s1;
    color: $color-white;

    &--mc {
      color: $color-white;

      &:before {
        background-color: $color-mc-new-purple-light;
      }
    }
    &--ezgo {
      color: $color-blue;

      &:before {
        background-color: #80a9ea;
      }
    }
    &--slb {
      &:before {
        background-color: $color-slb-orange;
      }
      &:after {
        content: '';
        position: absolute;
        left: -10px;
        bottom: -82px;
        width: 77px;
        height: 126px;
        background-image: url('~assets/img/work-detail/slb/screw-driver.png');
        background-size: contain;
        background-repeat: no-repeat;
        transform: rotate(85deg);

        @media only screen and (min-width: 800px) {
          bottom: -50px;
          left: -130px;
          transform: rotate(0deg);
        }
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: -30px;
      left: 50%;
      height: 1px;
      width: calc(100% - 60px);
      transform: translateX(-50%);
    }
    &__headline {
      flex: 0 0 auto;
      width: 80px;
      font-weight: 700;
      text-transform: uppercase;

      p {
        position: relative;
        margin-right: $s-1;
        top: -3px;
      }
    }
    &__wrapper {
      flex: 0 1 auto;
      display: flex;
      flex-wrap: wrap;
    }
    &__tool-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      margin-right: 25px;
      margin-bottom: 15px;
    }
    &__checkmark {
      position: relative;
      flex: 0 0 auto;
      top: -1px;
      margin-right: 10px;
    }
    &__tool {
      flex: 0 1 auto;
    }
  }
  &__work {
    position: relative;
    margin-top: $s1;
    margin-bottom: 200px;
    width: 100%;
    z-index: 1;

    &__background:before {
      content: '';
      position: absolute;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &--mc-0 {
      .work-detail__work__background:before {
        left: 44px;
        bottom: -154px;
        width: 22px;
        height: 50px;
        background-image: url('~assets/img/work-detail/mc/pill.png');
        transform: scale(2) rotate(48deg);
      }
    }
    &--mc-1 {
      .work-detail__work__background:before {
        left: 44px;
        bottom: -154px;
        width: 22px;
        height: 50px;
        background-image: url('~assets/img/work-detail/mc/pill.png');
        transform: scale(1.5) rotate(113deg);
      }
    }
    &--ezgo-0 {
      .work-detail__work__background:before {
        left: 35px;
        bottom: -158px;
        width: 85px;
        height: 85px;
        background-image: url('~assets/img/work-detail/ezgo/golf-ball.png');
      }
    }
    &--ezgo-1 {
      .work-detail__work__background:before {
        left: 22px;
        bottom: -168px;
        width: 85px;
        height: 85px;
        background-image: url('~assets/img/work-detail/ezgo/golf-club.png');
      }
    }
    &--slb-0 {
      .work-detail__work__background:before {
        left: 22px;
        bottom: -185px;
        width: 85px;
        height: 85px;
        background-image: url('~assets/img/work-detail/slb/hard-hat.png');
      }
    }
    &__background {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
    &__background-one {
      position: absolute;
      left: 0;
      top: 25px;
      width: 100%;
      height: 100%;
      background-color: $color-mc-new-purple-medium;
      transform: skewY(-3deg);
      z-index: 1;

      &--mc {
        background-color: $color-mc-new-purple-medium;
      }
      &--ezgo {
        background-color: #7675ae;
      }
      &--slb {
        background-color: $color-slb-grey-dark;
      }
    }
    &__background-two {
      position: absolute;
      left: 0;
      top: -10px;
      width: 100%;
      height: 100%;
      background-color: $color-mc-new-purple-light;
      transform: skewY(3deg);

      &--mc {
        background-color: $color-mc-new-purple-light;
      }
      &--ezgo {
        background-color: #d9e8ff;
      }
      &--slb {
        background-color: $color-slb-orange;
      }
    }
    &__content {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 100px 30px 40px;
      max-width: 1080px;
      margin: 0 auto;
      z-index: 1;

      @media only screen and (min-width: 850px) {
        flex-direction: row;
        padding: 140px 30px 20px;
      }
      &__image {
        flex: 0 1 auto;
        margin-bottom: $s0;
        max-width: 610px;

        @media only screen and (min-width: 850px) {
          flex: 0 0 auto;
          margin-right: $s0;
          width: 610px;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
      &__text {
        flex: 0 1 auto;
        margin-bottom: 30px;

        h2 {
          margin-bottom: $s0;
          font-family: $font-raleway;
          font-size: 37px;
          font-weight: 700;
          letter-spacing: 115%;
          color: $color-white;
        }
        p {
          margin-bottom: $s0;
          color: $color-white;
        }
      }
    }
  }

  // Addendum
  &__addendum {
    margin-top: -50px;
  }

  // Back
  &__back {
    display: flex;
    justify-content: center;

    .work-detail__addendum + & {
      margin-top: 30px;
    }
    .work-detail__work + & {
      margin-top: -90px;
    }
    &__link {
      flex: 0 1 auto;
    }
  }
}
</style>
