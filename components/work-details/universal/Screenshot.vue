<template>
  <div class="container container--narrow">
    <div :class="`screenshot--${screenshot.id}`" class="screenshot">
      <div class="screenshot__image">
        <Flair :modifiers="screenshot.animationConfig" />
        <img
          :data-src="require(`~/assets/img/work/${screenshot.image}`)"
          :src="placeholder"
          :alt="screenshot.alt"
          class="animatelazyload lazyload"
        />
        <slot name="caption"></slot>
        <div class="screenshot__cta">
          <slot name="cta"></slot>
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
  props: {
    screenshot: {
      type: Object,
      default: function() {
        return {
          id: 'default',
          image: '',
          placeholderConfig: {
            initial: null,
            width: '500',
            height: '500'
          },
          animationConfig: {
            id: 'mc-screenshot',
            revealOffset: 0.3,
            initialDelay: '+=0',
            triggerEl: '.screenshot'
          }
        }
      }
    }
  },
  data: function() {
    return {
      placeholder: null
    }
  },
  created: function() {
    this.placeholder = imageContentReflow(
      this.screenshot.placeholderConfig.width,
      this.screenshot.placeholderConfig.height
    )
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

    @include breakpoint($medium) {
      max-width: 600px;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: $box-shadow;
    }
  }
  &__cta {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .cta-secondary {
      flex: 0 1 auto;
      top: -28px;
    }
  }
}
.flair {
  float: right;
  margin-right: 13px;
}
</style>
