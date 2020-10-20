<template>
  <div class="screenshot-nsf">
    <img
      :data-src="require('~/assets/img/work/nsf/work-small.jpg')"
      :src="placeholder"
      alt="Nebraska State Fair"
      class="animatelazyload lazyload"
    />
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
  created: function() {
    this.placeholder = imageContentReflow('690', '660')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.screenshot-nsf {
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
