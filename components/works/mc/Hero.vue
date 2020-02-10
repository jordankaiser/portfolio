<template>
  <div class="mc-hero">
    <div class="mc-hero__images-wrap">
      <div class="mc-hero__syringe">
        <img
          src="~/assets/img/work/mc/syringe.png"
          alt="Syringe Illustration"
        />
      </div>
      <div class="mc-hero__pills"></div>
    </div>
    <div class="mc-hero__circle-wrap">
      <div class="mc-hero__circle"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.mc-hero {
  position: relative;

  &__images-wrap {
    position: relative;
    z-index: 1;
  }
  &__syringe img {
    width: 139px;
    height: auto;
  }
  &__circle-wrap {
    position: absolute;
    right: 0;
    top: 50%;
    width: 100px;
    height: 140px;
    transform: translate(0%, -50%);
    transform-origin: 50% 50%;
    overflow: hidden;
  }
  &__circle {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 50%;
    left: 120%;
    transform: translate(-50%, -50%);
    background-color: $color-mc-blue;
    border-radius: 100%;
  }
}
</style>
