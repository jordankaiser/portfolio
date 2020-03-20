<template>
  <div class="header-flair">
    <div class="container container--narrow">
      <div class="header-flair__content">
        <div class="header-flair__box header-flair__box--one"></div>
        <div class="header-flair__box header-flair__box--two"></div>
        <div class="header-flair__box header-flair__box--three"></div>
        <div class="header-flair__box header-flair__box--four"></div>
        <div class="header-flair__box header-flair__box--five"></div>
        <div class="header-flair__box header-flair__box--six"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.header-flair {
  width: 100%;

  &__content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 60px;
    overflow: hidden;
  }
  &__box {
    flex: 0 1 auto;
    width: 34px;
    height: 25px;
    margin-right: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &--one {
      background-color: $color-mc-blue;
      transform: translateY(-16px);
    }
    &--two {
      background-color: $color-mc-pink;
      transform: translateY(-6px);
    }
    &--three {
      background-color: $color-mc-blue-dark;
    }
    &--four {
      background-color: $color-mc-blue;
      transform: translateY(-6px);
    }
    &--five {
      background-color: $color-mc-pink;
      transform: translateY(-12px);
    }
    &--six {
      background-color: $color-mc-blue-dark;
      transform: translateY(-17px);
    }
  }
}
</style>
