<template>
  <div>
    <bg-fun />
    <navigation />
    <!-- Intro section -->
    <section class="introduction animated">
      <div class="introduction__container container">
        <introduction-dino />
        <div class="introduction__text">
          <p>
            Hi, I'm Jordan Kaiser. I'm a website developer and certified Web
            Accessibility Specialist. I'm an industry veteran who has been
            working in the field for over ten years. I've worked in a variety of
            roles including back and front end development, animation, design
            and user experience.
          </p>
        </div>
        <!-- <div class="introduction__cta">
          <cta-hero color="red" />
        </div> -->
      </div>
      <div class="introduction__scroll-hint">
        <div class="scroll-hint">
          <p class="scroll-hint__text">Work</p>
          <img class="scroll-hint__arrow" src="~/assets/img/arrow-white.png" />
        </div>
      </div>
    </section>
    <!-- Work sections -->
    <works />
  </div>
</template>

<script>
import BgFun from '~/components/bg-fun/BGFun.vue'
import introductionDino from '~/components/introduction-dino/IntroductionDino.vue'
import Works from '~/components/Works'
import Navigation from '~/components/navigation/Navigation'
export default {
  head() {
    return {
      title: 'Home'
    }
  },
  components: {
    introductionDino,
    Works,
    BgFun,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.introduction {
  @include animated;
  position: relative;
  background: $color-red;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 70%;
    background-color: $color-red-light;
    border-bottom-right-radius: 14px;

    @include breakpoint($large) {
      display: block;
    }
  }
  &:after {
    content: '';
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 25px;
    height: 14px;
    background-color: $color-red-light;
    border-top-left-radius: 14px;

    @include breakpoint($large) {
      display: block;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: 390px;
    z-index: 2;
  }
  &__text {
    color: $color-white;
  }
  &__cta {
    margin-top: 30px;
    opacity: 0;
  }
  &__scroll-hint {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 3px;
  }
}
.scroll-hint {
  overflow: hidden;

  &__text {
    display: inline-block;
    margin-right: 2px;
    font-size: 0.9rem;
    color: $color-white;
  }
  &__arrow {
    display: inline-block;
    position: relative;
    top: 2px;
    width: 12px;
    height: auto;
  }
}
</style>
