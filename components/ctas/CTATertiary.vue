<template>
  <div :class="`cta-tertiary--${varient}`" class="cta-tertiary">
    <a
      :href="link.href"
      :class="`cta-tertiary__link--${varient}`"
      :target="link.target"
      class="cta-tertiary__link"
    >
      <div class="cta-tertiary__text">{{ link.text }}</div>
      <div class="cta-tertiary__icon">
        <div class="cta-tertiary__circle"></div>
        <img
          src="~/assets/img/cta-arrow-horiz.png"
          alt="Arrow"
          class="cta-tertiary__arrow"
        />
      </div>
    </a>
  </div>
</template>
<script>
import { secondaryTertiaryCTA } from '~/plugins/secondaryTertiaryCTA'
export default {
  props: {
    link: {
      type: Object,
      default: function() {
        return {
          text: 'Home',
          href: '/',
          target: '_self'
        }
      }
    },
    varient: {
      type: String,
      default: 'default'
    }
  },
  mounted: function() {
    secondaryTertiaryCTA('.cta-tertiary__link', 'tertiary')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.cta-tertiary {
  position: relative;
  flex: 0 1 auto;

  &--ezgo {
    .cta-tertiary__link {
      color: $color-blue;

      .cta-tertiary__circle {
        background-color: $color-ezgo-blue-dark;
      }
    }
  }
  &--mc {
    .cta-tertiary__link {
      color: $color-white;

      .cta-tertiary__circle {
        background-color: $color-mc-blue;
      }
    }
  }
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $color-blue-light;

    &:focus {
      outline: none;
    }
  }
  &__text {
    flex: 0 1 auto;
    width: 75%;
    margin-right: 7px;
  }
  &__icon {
    position: relative;
    flex: 0 0 auto;
    width: 30px;
  }
  &__circle {
    width: 30px;
    height: 30px;
    background-color: $color-orange;
    border-radius: 30px;
    box-shadow: 2px 2px 4.76px rgba(0, 0, 0, 0.2);
  }
  &__arrow {
    position: absolute;
    width: 15px;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
