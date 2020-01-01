<template>
  <div class="cta-secondary">
    <a :href="link.href" class="cta-secondary__link">
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
export default {
  props: {
    link: {
      type: Object,
      default: function() {
        return {
          text: 'Learn More',
          href: '/'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.cta-secondary {
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $color-blue-light;
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
