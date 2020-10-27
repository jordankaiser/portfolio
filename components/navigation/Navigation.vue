<template>
  <nav class="menu">
    <button class="hamburger" aria-label="menu" aria-expanded="false">
      <div class="hamburger__line hamburger__line--one"></div>
      <div class="hamburger__line hamburger__line--two"></div>
      <div class="hamburger__line hamburger__line--three"></div>
    </button>
    <div class="links" style="display: none;">
      <ul class="links__list">
        <li>
          <span class="links__headline">Work</span>
          <ul>
            <li>
              <a href="#" class="links__link">
                MemorialCare
                <div class="links__link__underline"></div>
              </a>
            </li>
            <li>
              <a href="#" class="links__link">
                E-Z-GO
                <div class="links__link__underline"></div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <span class="links__headline">Me</span>
          <ul>
            <li>
              <a href="#" class="links__link">
                MemorialCare
                <div class="links__link__underline"></div>
              </a>
            </li>
            <li>
              <a href="#" class="links__link">
                E-Z-GO
                <div class="links__link__underline"></div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  height: 48px;
  background-color: $color-red;
  border-bottom-left-radius: 10px;
  z-index: 1;

  &__line {
    width: 32px;
    height: 4px;
    background-color: $color-white;
    border-radius: 10px;
  }
}
.links {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: $s1;
  padding-bottom: $s1;
  padding-right: $s0;
  padding-left: $s0;
  background-color: $color-mc-purple-dark;

  &__headline {
    font-size: 15px;
    opacity: 0.6;
  }
  &__link {
    display: inline-block;
    position: relative;
    padding-bottom: 8px;
    color: $color-white;
    text-decoration: none;

    &__underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: $color-orange;
    }
  }
  ul {
    color: $color-white;
    text-align: right;

    li {
      position: relative;
      margin-bottom: $s-1;

      & > ul {
        margin-top: $s-1;
      }
    }
  }
}
</style>
