<template>
  <div>
    <section class="marquee">
      <div class="marquee__art">
        <img src="~/assets/img/logo.png" alt="Design Report" />
        <div class="marquee__shape"></div>
      </div>
      <div class="marquee__description">
        <div class="marquee__text text">
          <h1>Introduction</h1>
          <p>
            Along with <strong>fourteen experienced designers</strong>, we’d
            like to invite you to celebrate creativity, and look into the state
            of design tools and trends in 2018.
          </p>
          <p>
            Data is backed by <strong>6,354,110</strong> designs that were added
            to Avocode that year.
          </p>
        </div>
      </div>
    </section>
    <choose-tool />
  </div>
</template>

<script>
import ChooseTool from '~/components/ChooseTool.vue'
export default {
  head() {
    return {
      title: 'Home'
    }
  },
  components: {
    ChooseTool
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
main {
  padding-top: 0;
}
.marquee {
  position: relative;
  display: flex;
  align-items: stretch;

  @include responsive(medium) {
    flex-direction: column;
  }
  &__art {
    position: relative;
    flex: 0 1 auto;
    padding: 100px 60px;
    width: 50%;
    background-image: url('~assets/img/background-grey.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    @include responsive(medium) {
      width: 100%;
      padding: 50px 30px;
    }
    img {
      position: relative;
      float: right;
      width: 100%;
      max-width: 420px;
      height: auto;
      z-index: 1;
    }
  }
  &__description {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    padding: 60px;
    width: 50%;
    background-color: $white;

    @include responsive(medium) {
      width: 100%;
      padding: 50px 30px;
    }
  }
  &__shape {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 44%;
    background-color: $tan;
  }
}
</style>
