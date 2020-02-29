<template>
  <div class="screenshot-ezgo">
    <div class="screenshot-ezgo__wrapper">
      <img
        :data-src="require('~/assets/img/work/ezgo/work-small.jpg')"
        :src="placeholder"
        alt="E-Z-GO Website"
        class="animatelazyload lazyload"
      />
    </div>
  </div>
</template>
<script>
import { imageContentReflow } from '~/plugins/helpers/imageContentReflow.js'
export default {
  data: function() {
    return {
      placeholder: null
    }
  },
  mounted: function() {
    this.placeholder = imageContentReflow('686', '634')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.screenshot-ezgo {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: $s0;
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  overflow: hidden;

  @include breakpoint($extrasmall) {
    overflow: visible;
    justify-content: center;
  }
  img {
    flex: 0 1 auto;
    max-width: 344px;
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @include breakpoint($extrasmall) {
      max-width: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      overflow: visible;
    }
  }
}
</style>
