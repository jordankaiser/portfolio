<template>
  <div>
    <section class="work-details segment animated">
      <div class="work-details__sub-segment">
        <div class="work-details__header-flair">
          <HeaderFlair :modifier="modifier" />
        </div>
        <div class="introduction container container--narrow">
          <div class="introduction">
            <h4 class="introduction__roles">
              Roles <span>|</span> Development
            </h4>
            <h1 class="introduction__title">MemorialCare</h1>
            <div class="introduction__description">
              <p>
                Introduction of work donec maximus turpis eget quam elementum
                laoreet. Quisque euismod leo a magna congue, vitae scelerisque
                eros dapibus. Mauris in quam vitae tortor consectetur volutpat
                at id purus. Maecenas maximus nibh quis mauris molestie, at
                lacinia arcu finibus. Mauris at sem at metus luctus mattis vel
                ac massa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="work-details__sub-segment">
        <div class="container container--narrow">
          <div class="work-details__flair">
            <Flair :modifier="modifier" />
          </div>
          <div class="tools">
            <div class="tools__listing">
              <h4 class="tools__list-title">Tools</h4>
              <ul class="tools__list">
                <li class="tools__list-item">Drupal</li>
                <li class="tools__list-item">PHP</li>
                <li class="tools__list-item">Javascript</li>
                <li class="tools__list-item">Vue.js</li>
                <li class="tools__list-item">Twig</li>
                <li class="tools__list-item">SCSS</li>
              </ul>
            </div>
            <div class="tools__illustration">
              <Hero />
            </div>
          </div>
        </div>
      </div>
      <div
        class="work-details__sub-segment work-details__sub-segment--placeholder"
      ></div>
    </section>
  </div>
</template>
<script>
import Hero from '~/components/work-details/mc/Hero.vue'
import HeaderFlair from '~/components/work-details/universal/HeaderFlair.vue'
import Flair from '~/components/work-details/universal/Flair.vue'
export default {
  head: {
    title: 'MemorialCare'
  },
  components: {
    Hero,
    HeaderFlair,
    Flair
  },
  data: function() {
    return {
      modifier: 'mc'
    }
  },
  mounted: function() {
    // Unhide animated section.
    /* eslint-disable-next-line no-undef */
    TweenLite.set('.work-details.animated', { visibility: 'visible' })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work-details {
  @include animated;
  color: $color-white;
  background-color: $color-mc-purple;

  &__flair {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    bottom: 100%;
    left: $s0;
    width: calc(100% - #{$s0 * 2});
    z-index: -1;

    &:first-child div {
      flex: 0 1 auto;
    }
  }
  &__sub-segment {
    position: relative;

    &:not(:first-of-type) {
      margin-top: $s1;
    }
    &--placeholder {
      height: 200vh;
    }
  }
  &__header-flair {
    position: absolute;
    top: -60px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.introduction {
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
  &__description {
    margin-top: 40px;
  }
}
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 25px;
  padding-right: 15px;
  border-radius: 10px;
  box-shadow: $box-shadow;

  &__listing {
    flex: 0 1 auto;
    width: 100%;
  }
  &__list {
    display: flex;
    flex-direction: column;
    margin-top: 13px;

    @include breakpoint($small) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  &__list-title {
    font-size: 13px;
    text-transform: uppercase;
  }
  &__list-item {
    flex: 0 1 auto;
    position: relative;
    padding-left: 15px;
    margin-top: $s0;

    @include breakpoint($small) {
      width: 150px;

      &:nth-child(2) {
        margin-top: 0;
      }
    }
    &:nth-child(1) {
      margin-top: 0;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: -1px;
      width: 5px;
      height: 20px;
      background-color: $color-mc-pink;
    }
  }
  &__illustration {
    flex: 0 1 auto;
    width: 140px;
  }
}
</style>
