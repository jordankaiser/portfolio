<template>
  <div :class="'dino-fun--' + orientation" class="dino-fun animated">
    <img
      class="dino-fun__artwork dino-fun__artwork--body"
      src="~/assets/img/dino-white.png"
    />
    <img
      class="dino-fun__artwork dino-fun__artwork--eye-open"
      src="~/assets/img/dino-white-eye-open.png"
    />
    <img
      class="dino-fun__artwork dino-fun__artwork--eye-closed"
      src="~/assets/img/dino-white-eye-closed.png"
    />
  </div>
</template>
<script>
export default {
  props: {
    orientation: {
      type: String,
      default: 'left'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.dino-fun {
  @include animated;
  position: relative;
  width: 90px;
  height: 90px;

  &--left {
    transform-origin: 69% 78%;
  }
  &--right {
    transform-origin: 78% 69%;
  }
  &--right-pointed-up {
    align-self: flex-end;
  }
  &__artwork {
    width: 100%;
    height: auto;

    &--eye-open,
    &--eye-closed {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
