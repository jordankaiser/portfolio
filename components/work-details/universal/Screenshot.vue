<template>
  <div class="screenshot">
    <img
      :data-src="require('~/assets/img/work/mc/work-small-homepage-mobile.jpg')"
      :src="placeholder"
      alt="MemorialCare"
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
  mounted: function() {
    this.placeholder = imageContentReflow('580', '1948')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.screenshot {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
