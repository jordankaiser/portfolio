<template>
  <div
    class="loader"
    :class="{
      'loader--start': loading,
      'loader--finish': !loading
    }"
  >
    <div class="loader__dino">
      <img
        class="loader__dino__layer1"
        src="~/assets/img/dino-body.png"
        alt="Dinosaur"
      />
      <img
        class="loader__dino__layer2"
        src="~/assets/img/dino-eye-closed.png"
        alt="Dinosaur"
      />
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
        class: [!this.loading ? 'loaded' : 'loading']
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
@import '~/assets/scss/_variables.scss';
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
  background: $color-red;
  font-size: 30px;
  z-index: 100;
  transition: opacity 0.5s, visibility 0.5s;
  pointer-events: none;

  &--start {
    visibility: visible;
    opacity: 1;

    .loader__dino {
      animation-name: dino-loader;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
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
  &__description p {
    color: $color-white;
    font-family: $font-open-sans;
    font-size: $fs2;
    font-weight: 700;
    margin-top: $s-1;
  }
  &__dino {
    position: relative;
    width: 150px;
    transform-origin: 100% 100%;

    &__layer1 {
      position: relative;
      width: 100%;
      height: auto;
    }
    &__layer2 {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;
    }
  }
}

@keyframes dino-loader {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(15deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
</style>
