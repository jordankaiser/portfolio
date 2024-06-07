<template>
  <div class="divider-hammer">
    <div class="divider-hammer__line"></div>
    <div class="divider-hammer__artwork">
      <div class="divider-hammer__circle"></div>
      <div class="divider-hammer__illustration-wrap">
        <img
          class="divider-hammer__illustration"
          src="~/assets/img/work/slb/hammer.png"
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
.divider-hammer {
  display: flex;
  align-items: center;

  &__line {
    flex: 0 1 auto;
    width: 100%;
    height: 2px;
    background-color: $color-slb-orange;
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
    border: 2px solid $color-slb-orange;
    border-radius: 33px;
    background-color: $color-slb-grey;
  }
  &__illustration-wrap {
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% + 4px);
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
