<template>
  <div class="divider-golfer">
    <div class="divider-golfer__line"></div>
    <div class="divider-golfer__artwork">
      <div class="divider-golfer__circle"></div>
      <div class="divider-golfer__illustration-wrap">
        <img
          class="divider-golfer__illustration"
          src="~/assets/img/work/ezgo/golfer.png"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.divider-golfer {
  display: flex;
  align-items: center;

  &__line {
    flex: 0 1 auto;
    width: 100%;
    height: 2px;
    background-color: $color-orange;
  }
  &__artwork {
    position: relative;
    flex: 0 0 auto;
    width: 33px;
    height: 33px;

    @include breakpoint($extrasmall) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &__circle {
    width: 100%;
    height: 100%;
    border: 2px solid $color-orange;
    border-radius: 33px;
    background-color: $color-white;
  }
  &__illustration-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 42px;
    height: 42px;
    transform: translate(-50%, -50%);
  }
  &__illustration {
    width: 42px;
    height: auto;
  }
}
</style>
