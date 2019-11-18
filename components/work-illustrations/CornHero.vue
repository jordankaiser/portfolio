<template>
  <div class="corn-hero">
    <img
      src="~/assets/img/corn-1.png"
      alt="Corn Illustration"
      class="corn-hero__1"
    />
    <img
      src="~/assets/img/corn-2.png"
      alt="Corn Illustration"
      class="corn-hero__2"
    />
    <img
      src="~/assets/img/corn-3.png"
      alt="Corn Illustration"
      class="corn-hero__3"
    />
    <div class="corn-hero__circle"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.corn-hero {
  position: relative;
  overflow: hidden;
  padding-bottom: 10px;

  &__1 {
    position: relative;
    width: 161px;
    height: auto;
    z-index: 1;
  }
  &__2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 161px;
    height: auto;
    z-index: 1;
  }
  &__3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 161px;
    height: auto;
    z-index: 1;
  }
  &__circle {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 55%;
    left: 99%;
    transform: translate(-50%, -50%);
    background-color: $color-orange;
    border-radius: 100%;
  }
}
</style>
