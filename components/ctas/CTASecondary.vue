<template>
  <div class="cta-secondary">
    <a
      :href="link.href"
      :class="`cta-secondary__link--${varient}`"
      class="cta-secondary__link"
    >
      <div class="cta-secondary__text">{{ link.text }}</div>
      <div class="cta-secondary__icon">
        <div class="cta-secondary__circle"></div>
        <img
          src="~/assets/img/cta-arrow-horiz.png"
          alt="Arrow"
          class="cta-secondary__arrow"
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
          href: '/'
        }
      }
    },
    varient: {
      type: String,
      default: 'default'
    }
  },
  mounted: function() {
    secondaryTertiaryCTA('.cta-secondary__link', 'secondary')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.cta-secondary {
  position: relative;
  flex: 0 1 auto;

  &__link {
    display: block;
    position: relative;
    text-decoration: none;
    padding-top: 15px;
    padding-right: 30px;
    padding-bottom: 15px;
    padding-left: 25px;
    border-radius: 16px;
    background-color: $color-blue-light;
    color: $color-white;
    font-family: $font-raleway;

    &--ezgo {
      background-color: $color-blue;

      .cta-secondary__circle {
        background-color: $color-ezgo-blue-dark;
      }
    }
  }
  &__icon {
    position: absolute;
    right: -15px;
    top: 50%;
    width: 30px;
    transform: translate(0, -50%);
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
