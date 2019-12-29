<template>
  <div class="screenshot-nsf">
    <img
      :data-src="require('~/assets/img/work/nsf/work-small.jpg')"
      alt="Nebraska State Fair"
      class="animatelazyload lazyload"
    />
  </div>
</template>
<script>
import { scrollMagicInit } from '~/plugins/helpers/scrollMagicInit.js'
export default {
  mounted: function() {
    const vm = this
    const TimelineLite = vm.$GSAP.TimelineLite
    const image = document.querySelector('.screenshot-nsf img')

    const timeline = new TimelineLite()
    timeline.fromTo(
      image,
      0.75,
      { x: image.width / 2, opacity: 0 },
      { x: 0, opacity: 1 }
    )
    scrollMagicInit(vm, timeline, '.screenshot-nsf', 0.75)
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.screenshot-nsf {
  display: flex;
  justify-content: flex-end;
  margin-top: $s0;
  overflow: hidden;

  @include breakpoint($small) {
    overflow: visible;
    justify-content: center;
  }
  img {
    flex: 0 1 auto;
    width: 344px;
    height: auto;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @include breakpoint($small) {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      overflow: visible;
    }
  }
}
</style>
