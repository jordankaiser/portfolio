<template>
  <section class="work">
    <div
      v-for="work in works"
      :key="work.id"
      :class="'work__segment--' + work.id"
      class="work__segment segment"
    >
      <div class="work__intro container container--narrow">
        <div class="work__text">
          <p class="work__subhead preanimation">{{ work.task }}</p>
          <h2 class="work__heading preanimation">{{ work.title }}</h2>
        </div>
        <div class="work__illustration">
          <component :is="work.illustration"></component>
        </div>
      </div>
      <p class="work__description preanimation container container--narrow">
        {{ work.description }}
      </p>
      <div class="work__divider preanimation container container--narrow">
        <component :is="work.divider"></component>
      </div>
    </div>
  </section>
</template>
<script>
import CornHero from '~/components/work-illustrations/CornHero.vue'
import CornDog from '~/components/work-dividers/CornDog.vue'
export default {
  components: {
    CornHero,
    CornDog
  },
  data: function() {
    return {
      works: [
        {
          id: 'nsf',
          title: 'Nebraska State Fair',
          task: 'Development',
          description:
            'Brief description of project amet nulla vel nunc placerat ultricies eget vel massa. Ut efficitur ex ut libero vestibulum porta. Vestibulum sed purus aliquet, consequat.',
          illustration: CornHero,
          divider: CornDog
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work {
  &__segment {
    width: 100%;
    height: 100vh;
    background-color: $color-white;
  }
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

    max-width: none;
    padding-right: 0;

    @include breakpoint($small) {
      max-width: $cs-1;
      padding-right: $s0;
    }
  }
  &__text {
    flex: 0 1 auto;
    align-self: flex-end;
    margin-bottom: 35px;
    width: 100%;
  }
  &__description.container {
    padding-right: 70px;
  }
  &__subhead {
    color: $color-blue-light;
  }
  &__heading {
    margin-top: 9px;
  }
  &__illustration {
    flex: 0 0 auto;
    width: 114px;
    overflow: hidden;

    @include breakpoint($small) {
      flex: 0 1 auto;
      width: 161px;
      overflow: visible;
    }
  }
  &__divider {
    margin-top: $s0;

    &.container {
      padding-right: 70px;
      padding-left: 0;
    }
  }
}
</style>
