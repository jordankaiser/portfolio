<template>
  <div class="divider-cabc">
    <div class="divider-cabc__line"></div>
    <div class="divider-cabc__artwork">
      <div class="divider-cabc__circle"></div>
      <div class="divider-cabc__illustration-wrap">
        <img
          class="divider-cabc__illustration"
          src="~/assets/img/work/cabc/helmet.png"
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
.divider-cabc {
  display: flex;
  align-items: center;

  &__line {
    flex: 0 1 auto;
    width: 100%;
    height: 2px;
    background-color: $color-cabc-green-600;
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
    border: 2px solid $color-cabc-green-600;
    border-radius: 33px;
    background-color: $color-cabc-green-500;
  }
  &__illustration-wrap {
    position: absolute;
    top: calc(50%);
    left: calc(50%);
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
  }
  &__illustration {
    width: 60px;
    height: auto;
  }
}
</style>
