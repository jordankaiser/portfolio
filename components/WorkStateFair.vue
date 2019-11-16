<template>
  <section class="work segment">
    <div class="work__container container">
      <div class="work__intro">
        <div class="work__description">
          <p class="work__subhead">Development</p>
          <h2 class="work__heading">Nebraska State Fair</h2>
          <p>
            Brief description of project amet nulla vel nunc placerat ultricies
            eget vel massa. Ut efficitur ex ut libero vestibulum porta.
            Vestibulum sed purus aliquet, consequat.
          </p>
        </div>
        <div class="work__illustration"></div>
      </div>
    </div>
  </section>
</template>

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
  }
  &__intro {
    display: flex;
    justify-content: space-between;
  }
  &__description {
    flex: 0 1 auto;
    width: 100%;
    background-color: hotpink;
  }
  &__illustration {
    flex: 0 0 auto;
    width: 90px;
    background-color: teal;
  }
}
</style>
