<template>
  <nav class="menu">
    <button class="hamburger" aria-label="menu" aria-expanded="false">
      <div class="hamburger__line hamburger__line--one"></div>
      <div class="hamburger__line hamburger__line--two"></div>
      <div class="hamburger__line hamburger__line--three"></div>
    </button>
    <div class="links" style="display: none;">
      <ul>
        <li class="links__group">
          <span class="links__headline">Work</span>
          <ul>
            <li class="links__item">
              <a href="#">MemorialCare</a>
            </li>
            <li class="links__item">
              <a href="#">E-Z-GO</a>
            </li>
          </ul>
        </li>
        <li class="links__group">
          <span class="links__headline">Me</span>
          <ul>
            <li class="links__item">
              <a href="#">MemorialCare</a>
            </li>
            <li class="links__item">
              <a href="#">E-Z-GO</a>
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
  ul {
    color: $color-white;
    text-align: right;

    li {
      position: relative;

      a {
        color: $color-white;
        text-decoration: none;
      }
    }
  }
}
</style>
