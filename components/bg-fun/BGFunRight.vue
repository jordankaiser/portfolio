<template>
  <div class="bg-fun-right">
    <div class="bg-fun-right__section bg-fun-right__section--one">
      <dino orientation="left"></dino>
    </div>
    <div class="bg-fun-right__section bg-fun-right__section--two"></div>
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
.bg-fun-right {
  @include breakpoint($large) {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
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
