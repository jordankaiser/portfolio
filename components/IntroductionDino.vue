<template>
  <div class="introduction-dino">
    <div class="introduction-dino__headline">
      <h1>
        <span class="introduction-dino__first-name">Jordan</span>
        <span class="introduction-dino__last-name">Kaiser</span>
      </h1>
    </div>
    <div class="introduction-dino__illustration">
      <div class="dino">
        <div class="dino__forground">
          <!-- TODO: Work on getting the clip-path setup. The clipping file is dino-clip.svg -->
          <img src="~/assets/img/dino.png" />
        </div>
        <div class="dino__background">
          <img src="~/assets/img/dino-background.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.introduction-dino {
  display: flex;
  justify-content: space-between;
  flex: 0 1 auto;
  width: 100%;
  &__headline {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 0 1 auto;
    padding-bottom: 4px;
    width: 52%;

    h1 {
      line-height: 2.2rem;
    }
  }
  &__first-name {
    display: block;
    color: $white;
    font-size: $fs1;
    font-weight: 300;
  }
  &__last-name {
    display: block;
    font-size: $fs5;
    font-weight: 700;
    color: $color-red-dark;
  }
  &__illustration {
    position: relative;
    flex: 0 1 auto;
    padding-top: 14px;
    width: 48%;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.dino {
  &__forground {
    position: relative;
    z-index: 1;
  }
  &__background {
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 100%;
    transform: translateX(-50%);
  }
}
</style>
