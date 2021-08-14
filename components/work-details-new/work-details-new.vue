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

    <!-- Animated pattern -->
    <div ref="animatedDivWrapper" class="work-detail__animated-div">
      <div ref="animatedDiv" class="work-detail__animated-div__animator"></div>
    </div>
  </div>
</template>
<script>
// Components.
import CheckMark from '~/components/checkmark/Checkmark.vue'

export default {
  components: {
    CheckMark
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
      }
    }
  },
  data: () => {
    return {
      lastScrollTop: 0,
      patternYTransform: 0,
      checkmark: {
        width: '9px',
        height: '14px',
        backgroundColor: '#fff'
      }
    }
  },
  mounted() {
    this.attachScrollDetection()
  },
  methods: {
    animateDiv() {
      // Distance scrolled from the top.
      const scrolledTop =
        window.pageYOffset || document.documentElement.scrollTop
      console.log(this.patternYTransform, 'thisPatternYTransform')
      if (scrolledTop > this.lastScrollTop) {
        // Translate the element on the Y axis by the patternYTransform.
        this.patternYTransform = this.patternYTransform - 1
        this.$refs.animatedDiv.style.transform = `translateY(calc(${this.patternYTransform}px - 50%))`
      } else {
        this.patternYTransform = this.patternYTransform + 1
        this.$refs.animatedDiv.style.transform = `translateY(calc(${this.patternYTransform}px - 50%))`
      }
      this.lastScrollTop = scrolledTop <= 0 ? 0 : scrolledTop
    },
    attachScrollDetection() {
      window.onscroll = event => {
        window.requestAnimationFrame(() => {
          this.animateDiv(event)
        })
      }
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
    width: 95px;

    &__animator {
      position: absolute;
      top: 50%;
      right: 0;
      width: 100%;
      height: calc(200vh);
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
    margin-top: $s0;
    color: $color-white;

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
}
</style>
