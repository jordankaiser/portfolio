<template>
  <nav class="menu">
    <hamburger />
    <div class="links">
      <div class="links__backgrounds">
        <div class="links__background links__background--one"></div>
        <div class="links__background links__background--two"></div>
        <div class="links__background links__background--three"></div>
      </div>
      <ul class="links__list">
        <li class="links__group">
          <span class="links__headline">My Work</span>
          <ul>
            <li>
              <a :tabindex="tabIndex" href="#" class="links__link">
                <span class="links__text">MemorialCare</span>
                <div class="links__link__underline"></div>
              </a>
            </li>
            <li>
              <a :tabindex="tabIndex" href="#" class="links__link">
                <span class="links__text">E-Z-GO</span>
                <div class="links__link__underline"></div>
              </a>
            </li>
          </ul>
        </li>
        <!-- <li class="links__group">
          <span class="links__headline">Me</span>
          <ul>
            <li>
              <a :tabindex="tabIndex" href="#" class="links__link">
                <span class="links__text">MemorialCare</span>
                <div class="links__link__underline"></div>
              </a>
            </li>
            <li>
              <a :tabindex="tabIndex" href="#" class="links__link">
                <span class="links__text">E-Z-GO</span>
                <div class="links__link__underline"></div>
              </a>
            </li>
          </ul>
        </li> -->
      </ul>
      <nuxt-link to="/" class="links__home" :tabindex="tabIndex">
        <div class="links__circle"></div>
        <home />
      </nuxt-link>
    </div>
  </nav>
</template>
<script>
import Hamburger from '~/components/navigation/Hamburger'
import Home from '~/components/svg/home'
export default {
  components: {
    Hamburger,
    Home
  },
  data: function() {
    return {
      navigationOpen: false
    }
  },
  computed: {
    tabIndex() {
      return this.$store.state.menuOpen === true ? 0 : -1
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
  padding-top: 85px;
  padding-bottom: 50px;
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
    top: -60px;
    right: -60px;
    width: calc(100% + 30px);
    height: calc(100% + 30px);
    border-bottom-left-radius: 20px;

    &--one {
      background-color: pink;
    }
    &--two {
      background-color: orange;
    }
    &--three {
      background-color: $color-purple;
    }
  }
  &__headline {
    font-size: 15px;
    opacity: 0.6;
  }
  &__link {
    display: inline-block;
    position: relative;
    padding-bottom: 9px;
    color: $color-white;
    text-decoration: none;

    &:hover,
    &:focus {
      outline: none;

      .links__link__underline {
        transform: scaleX(0.75);
      }
    }
    &__underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: $color-orange;
      border-radius: 9px;
      transform-origin: 100% 50%;
      transition: transform $t;
    }
  }
  &__text {
    position: relative;
    display: block;
  }
  &__home {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: darken($color-purple, 20);
    padding: 8px 0;
    border-bottom-left-radius: 20px;

    &:hover,
    &:focus {
      outline: none;

      .icon-home {
        transform: translateY(-10px);
        color: $color-white;
      }
      .links__circle {
        transform: translate(-50%, calc(-50% - 10px)) scale(1);
      }
    }
    .icon-home {
      position: relative;
      flex: 0 1 auto;
      color: $color-white;
      transition: color $t, transform $t;
    }
  }
  &__circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%) scale(0);
    background-color: $color-orange;
    border-radius: 45px;
    transition: transform $t;
  }
  ul {
    color: $color-white;
    text-align: right;

    li {
      position: relative;
      margin-bottom: $s-1;

      &.links__group {
        margin-bottom: 30px;

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
