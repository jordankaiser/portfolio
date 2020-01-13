<template>
  <div class="bg-fun-left">
    <div class="bg-fun-left__section bg-fun__section--one">
      <dino orientation="right"></dino>
    </div>
    <div class="bg-fun-left__section bg-fun__section--two"></div>
  </div>
</template>
<script>
import Dino from '~/components/bg-fun/Dino.vue'
export default {
  components: {
    Dino
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.bg-fun-left {
  @include breakpoint($large) {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: calc(50% - 300px);
    height: 100vh;
    background-color: darkgoldenrod;
    z-index: 1;
    opacity: 0.5;

    &__section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 0 1 auto;
      width: 100%;
      height: 50%;
      overflow: hidden;
    }
  }
}
</style>
