<template>
  <section class="work animated">
    <div
      v-for="work in works"
      :key="work.id"
      :class="'work__segment--' + work.id"
      class="work__segment segment"
    >
      <div class="work__bg-fun">
        <bg-fun />
      </div>
      <div class="work__intro container container--narrow">
        <div class="work__text">
          <p class="work__subhead">{{ work.task }}</p>
          <h2 class="work__heading">{{ work.title }}</h2>
        </div>
        <div class="work__illustration">
          <component :is="work.illustration"></component>
        </div>
      </div>
      <p class="work__description container container--narrow">
        {{ work.description }}
      </p>
      <div class="work__divider container container--narrow">
        <component :is="work.divider"></component>
      </div>
      <div class="work__screenshot container container--narrow">
        <component :is="work.screenshot"></component>
      </div>
      <div class="work__ctas container container--narrow">
        <div class="work__ctas-wrapper">
          <component
            :is="work.CTASecondary.component"
            v-if="work.CTASecondary"
            :link="work.CTASecondary.link"
          ></component>
          <component
            :is="work.CTATertiary.component"
            v-if="work.CTATertiary"
            :link="work.CTATertiary.link"
          ></component>
        </div>
      </div>
      <div class="work__footer container container--narrow">
        <div class="work__footer-wrapper">
          <component :is="work.footer"></component>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CTASecondary from '~/components/ctas/CTASecondary'
import CTATertiary from '~/components/ctas/CTATertiary'
import NSFHero from '~/components/works/nsf/Hero.vue'
import NSFDivider from '~/components/works/nsf/Divider.vue'
import NSFScreenshot from '~/components/works/nsf/Screenshot.vue'
import NSFFooter from '~/components/works/nsf/Footer.vue'
import BgFun from '~/components/bg-fun/BGFun.vue'
import 'lazysizes'
export default {
  components: {
    CTASecondary,
    CTATertiary,
    NSFHero,
    NSFDivider,
    NSFFooter,
    BgFun
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
          illustration: NSFHero,
          divider: NSFDivider,
          screenshot: NSFScreenshot,
          CTATertiary: {
            component: CTATertiary,
            link: {
              text: 'Visit Site',
              href: 'https://google.com'
            }
          },
          CTASecondary: {
            component: CTASecondary,
            link: {
              text: 'Project Details',
              href: 'https://google.com'
            }
          },
          footer: NSFFooter
        }
      ]
    }
  },
  mounted: function() {
    // Unhide animated section.
    /* eslint-disable-next-line */
    TweenLite.set('.work.animated', { visibility: 'visible' })
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work {
  &.animated {
    visibility: hidden;
  }
  &__segment {
    position: relative;
    padding-bottom: 0;
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
      padding-right: $s0;
      padding-left: 0;

      @include breakpoint($extrasmall) {
        padding-left: $s0;
      }
    }
  }
  &__screenshot {
    overflow: hidden;

    &.container {
      padding-right: 0;
      @include breakpoint($extrasmall) {
        max-width: $cs-1;
        padding-right: $s0;
      }
    }
  }
  &__ctas {
    display: flex;
    justify-content: center;
    margin-top: $s0;
  }
  &__ctas-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0 1 auto;

    .cta-secondary + .cta-tertiary {
      margin-top: $s0;
      margin-left: $s-1;
    }
  }
  &__footer-wrapper {
    display: flex;
    justify-content: center;
  }
  &__bg-fun {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
