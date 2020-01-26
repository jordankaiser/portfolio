<template>
  <div class="golf-footer">
    <img
      :data-src="require('~/assets/img/work/ezgo/golf-ball.png')"
      alt="Corn Illustration"
      class="animatelazyload lazyload golf-footer__left"
    />
    <img
      :data-src="require('~/assets/img/work/ezgo/golf-ball.png')"
      alt="Corn Illustration"
      class="animatelazyload lazyload golf-footer__middle"
    />
    <img
      :data-src="require('~/assets/img/work/ezgo/golf-ball.png')"
      alt="Corn Illustration"
      class="animatelazyload lazyload golf-footer__right"
    />
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.golf-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: calc(#{$s0} - 5px);
  width: 200px;
  overflow: hidden;

  &__left,
  &__right {
    flex: 0 1 auto;
    width: 47px;
    height: auto;
    transform: translateY(12px);
  }
  &__middle {
    flex: 0 1 auto;
    width: 47px;
    height: auto;
  }
}
</style>
