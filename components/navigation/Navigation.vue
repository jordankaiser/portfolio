<template>
  <nav class="menu">
    <hamburger />
    <div class="links">
      <div class="links__backgrounds">
        <div class="links__background links__background--one"></div>
        <div class="links__background links__background--two"></div>
        <div class="links__background links__background--three"></div>
      </div>
      <ul>
        <li class="links__group">
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
        <li class="links__group">
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
<script>
import Hamburger from '~/components/navigation/Hamburger'
export default {
  components: {
    Hamburger
  },
  data: function() {
    return {
      navigationOpen: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@import '~/assets/scss/_variables.scss';
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
}
.links {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 75px;
  padding-bottom: 25px;
  padding-right: 20px;
  padding-left: $s0;
  transform: translateX(177px);

  &__backgrounds {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% + 30px);
    height: calc(100% + 30px);
    overflow: hidden;
  }
  &__background {
    position: absolute;
    top: -30px;
    right: -30px;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 20px;

    &--one {
      background-color: pink;
      right: -10px;
      top: -10px;
    }
    &--two {
      background-color: orange;
      right: -20px;
      top: -20px;
    }
    &--three {
      background-color: $purple;
    }
  }
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

      &.links__group {
        margin-bottom: 24px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
      & > ul {
        margin-top: $s-2;
      }
    }
  }
}
</style>
