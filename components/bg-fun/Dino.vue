<template>
  <div :class="'dino-fun--' + orientation" class="dino-fun">
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
.dino-fun {
  position: relative;
  width: 90px;
  height: 90px;
  transform: translateX(90px);
  transform-origin: 69% 78%;

  &--right {
    transform: translateX(-90px) scaleX(-1);
    transform-origin: 78% 69%;
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
