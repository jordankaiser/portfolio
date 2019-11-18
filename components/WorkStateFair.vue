<template>
  <section class="work segment">
    <div class="work__intro">
      <div class="work__text">
        <p class="work__subhead">Development</p>
        <h2 class="work__heading">Nebraska State Fair</h2>
      </div>
      <div class="work__illustration">
        <corn-hero />
      </div>
    </div>
    <p class="container work__description">
      Brief description of project amet nulla vel nunc placerat ultricies eget
      vel massa. Ut efficitur ex ut libero vestibulum porta. Vestibulum sed
      purus aliquet, consequat.
    </p>
  </section>
</template>
<script>
import CornHero from '~/components/work-illustrations/CornHero.vue'
export default {
  components: {
    CornHero
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work {
  width: 100%;
  height: 100vh;
  background-color: $color-white;

  &__container {
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
    max-width: none;
  }
  &__intro {
    display: flex;
    justify-content: space-between;
    padding-left: $s0;
  }
  &__text {
    flex: 0 1 auto;
    align-self: flex-end;
    margin-bottom: 35px;
    width: 100%;
  }
  &__heading {
    margin-top: 9px;
  }
  &__illustration {
    flex: 0 0 auto;
    width: 114px;
  }
}
</style>
