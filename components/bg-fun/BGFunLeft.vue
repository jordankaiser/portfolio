<template>
  <div class="bg-fun-left">
    <div class="bg-fun-left__section bg-fun-left__section--one">
      <dino orientation="right"></dino>
    </div>
    <div class="bg-fun-left__section bg-fun-left__section--two"></div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
import { scrollMagicInit } from '~/plugins/helpers/scrollMagicInit.js'
import Dino from '~/components/bg-fun/Dino.vue'
import { dinoFunTimeline } from '~/plugins/mixins/dinoFun.js'
export default {
  components: {
    Dino
  },
  mounted: function() {
    const vm = this
    let viewportDimensions = getViewportDimensions()

    // Determine viewport width.
    window.addEventListener(
      'resize',
      debounce(() => {
        viewportDimensions = getViewportDimensions()
        mobileOrDesktop(viewportDimensions.width)
      }, 200)
    )

    // Determine which animations to play by viewport width.
    mobileOrDesktop(viewportDimensions.width)
    function mobileOrDesktop(viewportWidth) {
      if (viewportWidth >= 1024) {
        vm.$nextTick(function() {
          scrollMagicInit(vm, dinoFunTimeline, '.work__segment--nsf', 0.5)
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.bg-fun-left {
  @include breakpoint($large) {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: calc(50% - 300px);
    height: 100vh;
    background-color: darkgoldenrod;
    z-index: 1;
    opacity: 0.5;

    &__section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 0 1 auto;
      width: 100%;
      height: 50%;
      overflow: hidden;
    }
  }
}
</style>
