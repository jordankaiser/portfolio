<template>
  <div
    class="loader"
    :class="{
      'loader--start': loading,
      'loader--finish': !loading
    }"
  >
    <div class="loader__icons">
      <div class="loader__icon"></div>
      <div class="loader__icon"></div>
      <div class="loader__icon"></div>
      <div class="loader__icon"></div>
      <div class="loader__icon"></div>
    </div>
    <div class="loader__description">
      <p>Loading</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  head() {
    return {
      bodyAttrs: {
        // Set loaded status with a body class.
        class: !this.loading ? 'loaded' : 'loading'
      }
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_animation.scss';
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  font-size: 30px;
  z-index: 100;
  transition: opacity 0.5s, visibility 0.5s;
  pointer-events: none;

  &--start {
    visibility: visible;
    opacity: 1;

    .loader__icon {
      &:nth-child(1) {
        @include bender(0s);
      }
      &:nth-child(2) {
        @include bender(0.1s);
      }
      &:nth-child(3) {
        @include bender(0.2s);
      }
      &:nth-child(4) {
        @include bender(0.3s);
      }
      &:nth-child(5) {
        @include bender(0.4s);
      }
    }
  }

  &--finish {
    visibility: hidden;
    opacity: 0;
  }
  &__icons {
    display: flex;
    justify-content: space-between;
    flex: 0 1 auto;
    margin-bottom: 8px;
    max-width: 285px;
    width: 100%;
    border-bottom: 1px solid #9ea9bd;
    overflow: hidden;
  }
  &__icon {
    width: 50px;
    height: 50px;
    background-image: url('~assets/img/loader-bender.png');
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(55px);
    transition: transform 0.5s;
  }
  &__description p {
    color: grey;
  }
}
</style>
