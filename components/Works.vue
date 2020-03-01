<template>
  <section class="work animated">
    <div
      v-for="work in works"
      :key="work.id"
      :class="['work__segment--' + work.id, 'work__segment--' + work.parity]"
      class="work__segment segment"
    >
      <div class="work__intro container container--narrow">
        <div class="work__text">
          <h2 class="work__heading">{{ work.title }}</h2>
          <p class="work__subhead">Roles <span>|</span> {{ work.task }}</p>
        </div>
        <div
          :class="'work__illustration--' + work.id"
          class="work__illustration"
        >
          <component :is="work.illustration"></component>
        </div>
      </div>
      <p class="work__description container container--narrow">
        {{ work.description }}
      </p>
      <div class="work__divider container container--narrow">
        <component :is="work.divider"></component>
      </div>
      <div
        class="work__screenshot container container--narrow dino-fun-trigger"
      >
        <component :is="work.screenshot"></component>
      </div>
      <div class="work__ctas container container--narrow">
        <div class="work__ctas-wrapper">
          <component
            :is="work.CTASecondary.component"
            v-if="work.CTASecondary"
            :link="work.CTASecondary.link"
            :varient="work.id"
          ></component>
          <component
            :is="work.CTATertiary.component"
            v-if="work.CTATertiary"
            :link="work.CTATertiary.link"
            :varient="work.id"
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
// Work components.
import CTASecondary from '~/components/ctas/CTASecondary'
import CTATertiary from '~/components/ctas/CTATertiary'
import NSFHero from '~/components/works/nsf/Hero.vue'
import NSFDivider from '~/components/works/nsf/Divider.vue'
import NSFScreenshot from '~/components/works/nsf/Screenshot.vue'
import NSFFooter from '~/components/works/nsf/Footer.vue'
import EZGOHero from '~/components/works/ezgo/Hero.vue'
import EZGODivider from '~/components/works/ezgo/Divider.vue'
import EZGOScreenshot from '~/components/works/ezgo/Screenshot.vue'
import EZGOFooter from '~/components/works/ezgo/Footer.vue'
import MCHero from '~/components/works/mc/Hero.vue'
import MCDivider from '~/components/works/mc/Divider.vue'
import MCScreenshot from '~/components/works/mc/Screenshot.vue'
import MCFooter from '~/components/works/mc/Footer.vue'

// Libraries.
import 'lazysizes'

// Helpers.
import { isEven } from '~/plugins/helpers/isEven.js'

export default {
  components: {
    CTASecondary,
    CTATertiary,
    NSFHero,
    NSFDivider,
    NSFFooter,
    NSFScreenshot,
    EZGOHero,
    EZGODivider,
    EZGOFooter,
    EZGOScreenshot,
    MCHero,
    MCDivider,
    MCScreenshot,
    MCFooter
  },
  data: function() {
    return {
      works: [
        {
          id: 'mc',
          parity: null,
          title: 'MemorialCare',
          task: 'Development',
          description:
            'Brief description of project amet nulla vel nunc placerat ultricies eget vel massa. Ut efficitur ex ut libero vestibulum porta. Vestibulum sed purus aliquet, consequat.',
          illustration: MCHero,
          divider: MCDivider,
          screenshot: MCScreenshot,
          CTATertiary: {
            component: CTATertiary,
            link: {
              text: 'Visit Site',
              href: 'https://memorialcare.org',
              target: '_blank'
            }
          },
          CTASecondary: {
            component: CTASecondary,
            link: {
              text: 'Project Details',
              href: '/styleguide',
              target: '_self'
            }
          },
          footer: MCFooter
        },
        {
          id: 'nsf',
          parity: null,
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
              href: 'https://statefair.org',
              target: '_blank'
            }
          },
          CTASecondary: {
            component: CTASecondary,
            link: {
              text: 'Project Details',
              href: '/styleguide',
              target: '_self'
            }
          },
          footer: NSFFooter
        },
        {
          id: 'ezgo',
          parity: null,
          title: 'E-Z-GO',
          task: 'Development',
          description:
            'Brief description of project amet nulla vel nunc placerat ultricies eget vel massa. Ut efficitur ex ut libero vestibulum porta. Vestibulum sed purus aliquet, consequat.',
          illustration: EZGOHero,
          divider: EZGODivider,
          screenshot: EZGOScreenshot,
          CTATertiary: {
            component: CTATertiary,
            link: {
              text: 'Visit Site',
              href: 'https://ezgo.txtsv.com/',
              target: '_blank'
            }
          },
          CTASecondary: {
            component: CTASecondary,
            link: {
              text: 'Project Details',
              href: '/styleguide',
              target: '_self'
            }
          },
          footer: EZGOFooter
        }
      ]
    }
  },
  mounted: function() {
    // Unhide animated section.
    /* eslint-disable-next-line */
    TweenLite.set('.work.animated', { visibility: 'visible' })

    // Parity.
    this.works.forEach((work, index) => {
      if (isEven(index)) {
        this.works[index].parity = 'even'
      } else {
        this.works[index].parity = 'odd'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work {
  @include animated;
  &__segment {
    position: relative;
    padding-bottom: 0;

    &--ezgo {
      background-color: $color-ezgo-blue;
    }
    &--mc {
      color: $color-white;
      background-color: $color-mc-purple;

      .work__heading {
        font-size: $fs2;

        @include breakpoint($tiny) {
          font-size: $fs3;
        }
        @include breakpoint($extrasmall) {
          font-size: $fs4;
        }
      }
      .work__subhead span {
        color: #2c024d;
      }
    }
    &--even {
      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 0;
        bottom: 0;
        width: 146px;
        height: 80%;
        background-color: rgba(black, 0.1);
        border-top-right-radius: 146px;
      }
      &:before {
        content: '';
        position: absolute;
        display: none;
        right: 0;
        top: 0;
        width: 146px;
        height: 80%;
        background-color: rgba(black, 0.1);
        border-bottom-left-radius: 146px;
      }
      @include breakpoint($large) {
        &:after,
        &:before {
          display: block;
        }
      }
      @include breakpoint($extralarge) {
        &::before,
        &:after {
          width: 200px;
        }
      }
    }
    &--odd {
      &:after {
        display: none;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 146px;
        height: 80%;
        background-color: rgba(black, 0.1);
        border-top-left-radius: 146px;
      }
      &:before {
        content: '';
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 146px;
        height: 80%;
        background-color: rgba(black, 0.1);
        border-bottom-right-radius: 146px;
      }
      @include breakpoint($large) {
        &:after,
        &:before {
          display: block;
        }
      }
      @include breakpoint($extralarge) {
        &::before,
        &:after {
          width: 200px;
        }
      }
    }
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
    margin-top: 5px;
    font-size: $fs-1;
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
    &--ezgo {
      width: 135px;
      overflow: visible;

      @include breakpoint($small) {
        width: inherit;
      }
    }
    &--mc {
      overflow: visible;
    }
  }
  &__divider {
    margin-top: $s0;

    &.container {
      padding-right: $s0;
      padding-left: 0;

      @include breakpoint($extrasmall) {
        max-width: 300px;
        margin-top: 40px;
        padding-left: $s0;
      }
    }
  }
  &__screenshot {
    overflow: hidden;

    &.container {
      padding-right: 0;

      @include breakpoint($extrasmall) {
        margin-top: $s-1;
        max-width: $cs-1;
        padding-right: $s0;
      }
      @include breakpoint($medium) {
        max-width: 700px;
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
