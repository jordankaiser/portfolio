<template>
  <nav class="menu">
    <button class="hamburger" aria-label="menu" aria-expanded="false">
      <div class="hamburger__line hamburger__line--one"></div>
      <div class="hamburger__line hamburger__line--two"></div>
      <div class="hamburger__line hamburger__line--three"></div>
    </button>
  </nav>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@import '~/assets/scss/_variables.scss';
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
}
.hamburger {
  @include buttonReset;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  height: 48px;
  background-color: $color-red;
  border-bottom-left-radius: 10px;

  &__line {
    width: 32px;
    height: 4px;
    background-color: $color-white;
    border-radius: 10px;
  }
}
</style>
