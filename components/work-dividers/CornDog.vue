<template>
  <div class="divider-corndog">
    <div class="divider-corndog__line"></div>
    <div class="divider-corndog__artwork">
      <div class="divider-corndog__circle"></div>
      <div class="divider-corndog__illustration-wrap">
        <img
          class="divider-corndog__illustration"
          src="~/assets/img/corn-dog.png"
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
.divider-corndog {
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
    left: 50%;
    right: 50%;
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
