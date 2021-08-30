<template>
  <div class="work-detail">
    <!-- Intro -->
    <div class="work-detail__intro container container--narrow">
      <!-- Roles -->
      <h4 class="work-detail__roles">
        Roles <span class="work-detail__role-seperator">|</span>
        <span v-for="(role, index) in content.roles" :key="role">
          <span v-if="index !== content.roles.length - 1"> {{ role }}, </span>
          <span v-else>
            {{ role }}
          </span>
        </span>
      </h4>

      <!-- Headline -->
      <h1 class="work-detail__headline">{{ content.title }}</h1>

      <!-- Description -->
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="work-detail__description text"
        v-html="content.description"
      ></div>
    </div>

    <!-- Tools -->
    <div class="work-detail__tools container container--narrow">
      <div class="work-detail__tools__headline"><p>Tools</p></div>
      <div class="work-detail__tools__wrapper">
        <span
          v-for="tool in content.tools"
          :key="tool"
          class="work-detail__tools__tool-wrapper"
        >
          <span class="work-detail__tools__checkmark">
            <check-mark :checkmark="checkmark" />
          </span>
          <span class="work-detail__tools__tool">{{ tool }}</span>
        </span>
      </div>
    </div>

    <!-- Work Sections -->
    <div
      v-for="work in content.works"
      :key="work.title"
      class="work-detail__work"
    >
      <div class="work-detail__work__background">
        <div class="work-detail__work__background-one"></div>
        <div class="work-detail__work__background-two"></div>
      </div>
      <div class="work-detail__work__content">
        <div class="work-detail__work__content__image">
          <img
            src="~/assets/img/work/mc-new/mc-detail-one.jpeg"
            alt="Screenshot of MemorialCare Website"
          />
        </div>
        <div class="work-detail__work__content__text">
          <h2 class="work-detail__work__content__title">{{ work.title }}</h2>
          <p class="work-detail__work__content__description">
            {{ work.description }}
          </p>
          <div class="work-detail__work__content__cta">
            <CtaSecondary :link="work.link" :varient="content.id" />
          </div>
        </div>
      </div>
    </div>

    <!-- Animated pattern -->
    <div ref="animatedDivWrapper" class="work-detail__animated-div">
      <div ref="animatedDiv" class="work-detail__animated-div__animator"></div>
    </div>
  </div>
</template>
<script>
// Components.
import debounce from 'lodash/debounce'
import CheckMark from '~/components/checkmark/Checkmark.vue'
import CtaSecondary from '~/components/ctas/CTASecondary'

export default {
  components: {
    CheckMark,
    CtaSecondary
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
      works: {
        type: Array,
        default: []
      }
    }
  },
  data: () => {
    return {
      lastScrollTop: 0,
      checkmark: {
        width: '9px',
        height: '14px',
        backgroundColor: '#fff'
      },
      documentHeight: 0
    }
  },
  mounted() {
    this.attachScrollDetection()
    this.animateWork()
    this.setDocumentHeight()
  },
  methods: {
    animateSidePattern() {
      // Distance scrolled from the top.
      const scrolledTop =
        window.pageYOffset || document.documentElement.scrollTop
      const percentageScrolled = scrolledTop / this.documentHeight
      const scrollPositition = 250 * percentageScrolled
      if (scrolledTop > this.lastScrollTop) {
        this.$refs.animatedDiv.style.transform = `translateY(calc(${scrollPositition}px - 50%))`
      } else {
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
        console.log(workSection)
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
              y: 70
            }
          )
          .addTo(sceneController)
      })
    },
    setDocumentHeight() {
      this.documentHeight = document.documentElement.scrollHeight
      console.log(this.documentHeight)
      window.addEventListener(
        'resize',
        debounce(() => {
          console.log(this.documentHeight)
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
  background-color: $color-mc-purple;

  // Top left triangle.
  &:after {
    content: '';
    position: absolute;
    left: -9px;
    top: -30px;
    background-color: $color-mc-purple-dark;
    opacity: 0.5;
    width: 160px;
    height: 50px;
    transform: rotate(166deg);
  }

  // Headline.
  &__headline {
    position: relative;
    margin-top: $s-1;
    font-size: $fs3;
    color: $color-white;
    font-weight: 700;

    @include breakpoint($small) {
      font-size: $fs6;
    }
  }

  // Description.
  &__description {
    color: $color-white;
    margin-top: $s0;

    p {
      margin-top: $s0;
    }
  }

  // Roles.
  &__roles {
    color: $color-white;
    font-size: $fs-1;
    line-height: $fs-1;

    @include breakpoint($medium) {
      font-size: $fs0;
      line-height: $fs0;
    }
  }
  &__role-seperator {
    color: #2c024d;
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
      background-image: url('~assets/img/work/mc-new/pill-pattern.png');
      background-repeat: repeat;
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

    &:before {
      content: '';
      position: absolute;
      top: -30px;
      left: 50%;
      height: 1px;
      background-color: $color-mc-new-purple-light;
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
    margin-bottom: 200vh;
    width: 100%;
    z-index: 1;

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
    }
    &__background-two {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: $color-mc-new-purple-light;
      transform: skewY(3deg);
    }
    &__content {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 100px 30px 40px;
      z-index: 1;

      @include breakpoint($medium) {
        flex-direction: row;
        padding: 120px 30px 0;
      }
      &__image {
        flex: 0 1 auto;
        margin-bottom: $s0;
        max-width: 350px;

        @include breakpoint($medium) {
          flex: 0 0 auto;
          margin-right: $s0;
        }
        img {
          width: 100%;
          max-width: 480px;
          height: auto;
        }
      }
      &__text {
        flex: 0 1 auto;

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
}
</style>
