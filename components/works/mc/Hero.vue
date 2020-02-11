<template>
  <div class="mc-hero">
    <div class="mc-hero__syringe-wrap">
      <div class="mc-hero__syringe">
        <img
          src="~/assets/img/work/mc/syringe.png"
          alt="Syringe Illustration"
        />
      </div>
    </div>
    <div class="mc-hero__pills">
      <img
        src="~/assets/img/work/mc/pill-circle-blue.png"
        alt="Pill Illustration"
        class="mc-hero__pill-circle mc-hero__pill-circle--1"
      />
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

  &__syringe-wrap {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  &__syringe {
    transform: translateX(4px);

    img {
      width: 139px;
      height: auto;
    }
  }
  &__pills {
    position: absolute;
    right: 0;
    top: 13px;
    width: 100%;
    height: 100%;
  }
  &__pill-circle {
    position: absolute;
    width: 26px;
    height: auto;
    top: 0;
    left: 0;
    top: -3px;
    left: 65px;
    z-index: 1;
  }
  &__circle-wrap {
    position: absolute;
    right: 0;
    top: 57%;
    width: 160px;
    height: 160px;
    transform: translate(0%, -43%);
    transform-origin: 50% 50%;
    overflow: hidden;
  }
  &__circle {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 46%;
    left: 105%;
    transform: translate(-50%, -50%);
    background-color: $color-mc-blue;
    border-radius: 100%;
  }
}
</style>
