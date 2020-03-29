<template>
  <div class="container container--narrow">
    <div class="screenshot">
      <div class="screenshot__image">
        <Flair :modifiers="screenshotModifiers" />
        <img
          :data-src="
            require('~/assets/img/work/mc/work-small-homepage-mobile.jpg')
          "
          :src="placeholder"
          alt="MemorialCare"
          class="animatelazyload lazyload"
        />
        <div class="caption">
          <div class="caption__content">
            <div class="caption__text">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { imageContentReflow } from '~/plugins/helpers/imageContentReflow.js'
import Flair from '~/components/work-details/universal/Flair.vue'
export default {
  components: {
    Flair
  },
  data: function() {
    return {
      placeholder: null,
      screenshotModifiers: {
        id: 'mc-screenshot',
        revealOffset: 0.3,
        initialDelay: '+=0',
        triggerEl: '.screenshot'
      },
      caption: {
        id: 'mc',
        text:
          'Phasellus elementum est et placerat accumsan. Nunc congue tortor et vehicula consectetur. Vestibulum ut nibh at dolor porttitor imperdiet non et erat. Proin volutpat elit eu nibh commodo, id eleifend eros pretium. Suspendisse congue mi consectetur enim venenatis, vitae convallis odio convallis.'
      }
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
  display: flex;
  justify-content: center;

  &__image {
    flex: 0 1 auto;
    max-width: 290px;

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: $box-shadow;
    }
  }
}
.flair {
  float: right;
  margin-right: 13px;
}
</style>
