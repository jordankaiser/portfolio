<template>
  <div class="home">
    <section class="marquee">
      <div class="marquee__art">
        <img src="~/assets/img/logo.png" alt="Design Report" />
      </div>
      <div class="marquee__description">
        <h1>Introduction</h1>
        <p>
          Along with fourteen experienced designers, we’d like to invite you to
          celebrate creativity, and look into the state of design tools and
          trends in 2018.
        </p>
        <p>
          Data is backed by 6,354,110 designs that were added to Avocode that
          year.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
.marquee {
  display: flex;

  &__art {
    flex: 0 1 auto;
    width: 50%;
    background-image: url('~assets/img/background-grey.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    img {
      width: 100%;
      height: auto;
    }
  }
  &__description {
    flex: 0 1 auto;
    width: 50%;

    h1 {
      // color: $red;
    }
  }
}
</style>
