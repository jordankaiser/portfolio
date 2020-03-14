<template>
  <div>
    <section class="work-detail segment">
      <div class="container container--narrow">
        <h4 class="work-detail__roles">Roles <span>|</span> Development</h4>
        <h1 class="work-detail__title">MemorialCare</h1>
        <div class="work-detail__introduction">
          <p>
            Introduction of work donec maximus turpis eget quam elementum
            laoreet. Quisque euismod leo a magna congue, vitae scelerisque eros
            dapibus. Mauris in quam vitae tortor consectetur volutpat at id
            purus. Maecenas maximus nibh quis mauris molestie, at lacinia arcu
            finibus. Mauris at sem at metus luctus mattis vel ac massa.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head: {
    title: 'MemorialCare'
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work-detail {
  color: $color-white;

  &__roles {
    font-size: $fs-1;
    line-height: $fs-1;

    span {
      color: #2c024d;
    }
  }
  &__title {
    margin-top: 5px;
    font-weight: bold;
    font-size: $fs3;
    line-height: $fs3;
  }
  &__introduction {
    margin-top: $s0;
  }
  &.segment {
    background-color: $color-mc-purple;
  }
}
</style>
