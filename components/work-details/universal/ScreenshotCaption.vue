<template>
  <div :class="`caption--${id}`" class="caption">
    <div class="caption__flair-left"></div>
    <div class="caption__flair-right"></div>
    <div class="caption__content">
      <div class="caption__text">
        <slot name="captionText"></slot>
      </div>
    </div>
    <div>
      <CtaSecondary />
    </div>
  </div>
</template>
<script>
import CtaSecondary from '~/components/ctas/CTASecondary'
export default {
  components: { CtaSecondary },
  props: {
    id: undefined,
    caption: {
      type: Object,
      default: function() {
        return {
          id: 'default',
          text: 'Screenshot description.'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.caption {
  position: relative;
  padding-right: $s-1;
  padding-left: $s-1;
  top: -5px;
  z-index: -1;

  &--mc {
    .caption__content {
      background-color: lighten($color-mc-purple, 6);
    }
    .caption__flair-left {
      background-color: $color-mc-pink;
    }
    .caption__flair-right {
      background-color: $color-mc-blue-dark;
    }
  }
  &__content {
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 50px;
    padding-right: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: orange;
    box-shadow: $box-shadow;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.42);
  }
  &__flair-left {
    position: absolute;
    top: 0;
    left: 7px;
    width: 8px;
    height: 68px;
    background-color: lightcoral;
    border-bottom-left-radius: 5px;
    z-index: -1;
  }
  &__flair-right {
    position: absolute;
    top: 0;
    right: 7px;
    width: 8px;
    height: 173px;
    background-color: lightcoral;
    border-bottom-right-radius: 5px;
    z-index: -1;
  }
}
</style>
