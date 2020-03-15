<template>
  <div>
    <section class="work-details segment">
      <div class="work-details__sub-segment">
        <div class="introduction container container--narrow">
          <h4 class="introduction__roles">Roles <span>|</span> Development</h4>
          <h1 class="introduction__title">MemorialCare</h1>
          <div class="introduction__description">
            <p>
              Introduction of work donec maximus turpis eget quam elementum
              laoreet. Quisque euismod leo a magna congue, vitae scelerisque
              eros dapibus. Mauris in quam vitae tortor consectetur volutpat at
              id purus. Maecenas maximus nibh quis mauris molestie, at lacinia
              arcu finibus. Mauris at sem at metus luctus mattis vel ac massa.
            </p>
          </div>
        </div>
      </div>
      <div class="work-details__sub-segment">
        <div class="tools container container--narrow">
          <div class="tools__list">
            <ul>
              <li>Drupal</li>
              <li>PHP</li>
              <li>Javascript</li>
              <li>Vue.js</li>
              <li>Twig</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div class="tools__illustration"></div>
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
.work-details {
  color: $color-white;
  background-color: $color-mc-purple;

  &__sub-segment:not(:first-of-type) {
    margin-top: $s1;
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

  &__list {
    flex: 0 1 auto;
    width: 100%;
    background-color: lightcoral;
  }
  &__illustration {
    width: 161px;
    height: 180px;
    background-color: orange;
  }
}
</style>
