<template>
  <div :class="`cta-secondary--${varient}`" class="cta-secondary">
    <!-- Use nuxt-link if an internal link -->
    <div v-if="link.target === '_self'" class="cta-secondary__wrap">
      <nuxt-link
        :to="link.href"
        :class="`cta-secondary__link--${varient}`"
        class="cta-secondary__link"
        :target="link.target"
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
      </nuxt-link>
    </div>
    <!-- Else use <a> if an external link -->
    <div v-else class="cta-secondary__wrap">
      <a
        :href="link.href"
        :class="`cta-secondary__link--${varient}`"
        class="cta-secondary__link"
        :target="link.target"
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
    secondaryTertiaryCTA('.cta-secondary__link', 'secondary')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.cta-secondary {
  position: relative;
  flex: 0 1 auto;

  &--mc {
    .cta-secondary__link {
      background-color: $color-mc-purple-dark;
    }
    .cta-secondary__circle {
      background-color: $color-mc-blue;
    }
  }
  &--ezgo {
    .cta-secondary__link {
      background-color: $color-blue;

      .cta-secondary__circle {
        background-color: $color-ezgo-blue-dark;
      }
    }
  }
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

    &:focus {
      outline: none;
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
