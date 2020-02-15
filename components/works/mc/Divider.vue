<template>
  <div class="divider-bottle">
    <div class="divider-bottle__line"></div>
    <div class="divider-bottle__artwork">
      <div class="divider-bottle__circle"></div>
      <div class="divider-bottle__illustration-wrap">
        <img
          class="divider-bottle__illustration"
          src="~/assets/img/work/mc/pill-bottle.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.divider-bottle {
  display: flex;
  align-items: center;

  &__line {
    flex: 0 1 auto;
    width: 100%;
    height: 2px;
    background-color: $color-mc-pink;
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
    border: 2px solid $color-mc-pink;
    border-radius: 33px;
    background-color: $color-mc-purple;
  }
  &__illustration-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 42px;
    height: 42px;
    transform: translate(-47%, -63%);
  }
  &__illustration {
    width: 40px;
    height: auto;
  }
}
</style>
