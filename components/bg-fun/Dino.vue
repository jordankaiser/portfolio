<template>
  <div :class="'dino-fun--' + orientation" class="dino-fun">
    <img
      class="dino-fun__artwork dino-fun__artwork--body"
      src="~/assets/img/dino.png"
    />
    <img
      class="dino-fun__artwork dino-fun__artwork--eye-open"
      src="~/assets/img/dino-eye-open.png"
    />
    <img
      class="dino-fun__artwork dino-fun__artwork--eye-closed"
      src="~/assets/img/dino-eye-closed.png"
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
  width: 50px;
  height: 50px;
  &--right {
    transform: scaleX(-1);
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
