<template>
  <div class="caption">
    <div class="caption__content">
      <div class="caption__text">
        <slot name="captionText"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
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

  &__content {
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 50px;
    padding-right: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: orange;
  }
}
</style>
