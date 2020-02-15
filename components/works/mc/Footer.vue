<template>
  <div class="pill-footer">
    <img
      :data-src="require('~/assets/img/work/mc/pill-circle-pink.png')"
      alt="Pill Illustration"
      class="animatelazyload lazyload pill-footer__circle pill-footer__circle--1"
    />
    <img
      :data-src="require('~/assets/img/work/mc/pill-oval-blue.png')"
      alt="Pill Illustration"
      class="animatelazyload lazyload pill-footer__oval pill-footer__oval--1"
    />
    <img
      :data-src="require('~/assets/img/work/mc/pill-circle-pink.png')"
      alt="Pill Illustration"
      class="animatelazyload lazyload pill-footer__circle pill-footer__circle--2"
    />
    <img
      :data-src="require('~/assets/img/work/mc/pill-oval-blue.png')"
      alt="Pill Illustration"
      class="animatelazyload lazyload pill-footer__oval pill-footer__oval--2"
    />
    <img
      :data-src="require('~/assets/img/work/mc/pill-circle-pink.png')"
      alt="Pill Illustration"
      class="animatelazyload lazyload pill-footer__circle pill-footer__circle--3"
    />
    <img
      :data-src="require('~/assets/img/work/mc/pill-oval-blue.png')"
      alt="Pill Illustration"
      class="animatelazyload lazyload pill-footer__oval pill-footer__oval--3"
    />
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.pill-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: calc(#{$s0} - 5px);
  width: 240px;
  height: 71px;
  overflow: hidden;

  &__circle {
    width: 26px;
    height: auto;

    &--1 {
      transform: translate(14px, -4px) rotate(119deg);
    }
    &--2 {
      transform: translate(4px, -8px) rotate(164deg);
    }
    &--3 {
      transform: translate(-5px, -15px) rotate(19deg);
    }
  }
  &__oval {
    width: 22px;
    height: auto;

    &--1 {
      transform: translate(7px, -15px) rotate(146deg);
    }
    &--2 {
      transform: translate(0px, -23px) rotate(188deg);
    }
    &--3 {
      transform: translate(-10px, 1px) rotate(57deg);
    }
  }
}
</style>
