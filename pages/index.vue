<template>
  <div>
    <section class="marquee">
      <div class="marquee__art">
        <img src="~/assets/img/logo.png" alt="Design Report" />
      </div>
      <div class="marquee__description">
        <div class="marquee__text text">
          <h1>Introduction</h1>
          <p>
            Along with fourteen experienced designers, we’d like to invite you
            to celebrate creativity, and look into the state of design tools and
            trends in 2018.
          </p>
          <p>
            Data is backed by 6,354,110 designs that were added to Avocode that
            year.
          </p>
        </div>
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
main {
  padding-top: 0;
}
.marquee {
  display: flex;
  align-items: center;

  &__art {
    flex: 0 1 auto;
    padding: 40px;
    width: 50%;
    background-image: url('~assets/img/background-grey.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    img {
      float: right;
      width: 100%;
      max-width: 420px;
      height: auto;
    }
  }
  &__description {
    flex: 0 1 auto;
    padding: 40px;
    width: 50%;
  }
  &__text {
    max-width: 300px;
    width: 100%;
  }
}
</style>
