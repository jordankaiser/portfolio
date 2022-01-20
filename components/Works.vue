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
          <component
            :is="work.footer.component"
            :modifiers="work.footer.modifiers"
          ></component>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Callouts.
import CTASecondary from '~/components/ctas/CTASecondary'
import CTATertiary from '~/components/ctas/CTATertiary'

// NSF.
import NSFHero from '~/components/works/nsf/Hero.vue'
import NSFDivider from '~/components/works/nsf/Divider.vue'
import NSFScreenshot from '~/components/works/nsf/Screenshot.vue'
import NSFFooter from '~/components/works/nsf/Footer.vue'

// EZGO.
import EZGOHero from '~/components/works/ezgo/Hero.vue'
import EZGODivider from '~/components/works/ezgo/Divider.vue'
import EZGOScreenshot from '~/components/works/ezgo/Screenshot.vue'
import EZGOFooter from '~/components/works/ezgo/Footer.vue'

// MC.
import MCHero from '~/components/works/mc/Hero.vue'
import MCDivider from '~/components/works/mc/Divider.vue'
import MCScreenshot from '~/components/works/mc/Screenshot.vue'
import MCFooter from '~/components/works/mc/Footer.vue'

// SLB.
import SLBHero from '~/components/works/slb/Hero.vue'
import SLBDivider from '~/components/works/slb/Divider.vue'
import SLBScreenshot from '~/components/works/slb/Screenshot.vue'
import SLBFooter from '~/components/works/slb/Footer.vue'

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
    MCFooter,
    SLBHero,
    SLBDivider,
    SLBScreenshot,
    SLBFooter
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
            "MemorialCare is a large hospital system in Los Angeles California and surrounding areas. The website contains information on it's hospitals, providers, services and treatments.",
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
              href: '/memorialcare',
              target: '_self'
            }
          },
          footer: {
            component: MCFooter,
            modifiers: {
              triggerEl: '.work__segment--mc .pill-footer',
              revealOffset: '0.85'
            }
          }
        },
        {
          id: 'ezgo',
          parity: null,
          title: 'E-Z-GO',
          task: 'Development',
          description:
            'E-Z-GO is a leading global manufacturer of golf cars, utility vehicles and personal transportation vehicles. The website features segmented audience content and a vehicle building tool.',
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
              href: '/ezgo',
              target: '_self'
            }
          },
          footer: {
            component: EZGOFooter,
            modifiers: {
              triggerEl: '.work__segment--ezgo .golf-footer',
              revealOffset: '1'
            }
          }
        },
        {
          id: 'slb',
          parity: null,
          title: 'JLG Self-Leveling Boom',
          task: 'Development',
          description:
            'This site was created to promote the international launch of the new 670SJ Self-Leveling Boom from JLG. The website was built with nuxt.js and features translation.',
          illustration: SLBHero,
          divider: SLBDivider,
          screenshot: SLBScreenshot,
          CTATertiary: {
            component: CTATertiary,
            link: {
              text: 'Visit Site',
              href: 'https://www.selflevelingboom.com/',
              target: '_blank'
            }
          },
          CTASecondary: {
            component: CTASecondary,
            link: {
              text: 'Project Details',
              href: '/selflevelingboom',
              target: '_self'
            }
          },
          footer: {
            component: SLBFooter,
            modifiers: {
              triggerEl: '.work__segment--slb .work__footer',
              revealOffset: '1'
            }
          }
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

    &--nsf {
      &::before,
      &:after {
        background-color: $color-blue-light;
      }
    }
    &--ezgo {
      background-color: $color-ezgo-blue;
      &::before,
      &:after {
        background-color: $color-blue;
      }
    }
    &--mc {
      color: $color-white;
      background-color: $color-mc-purple;

      &::before,
      &:after {
        background-color: $color-mc-blue;
      }
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
    &--slb {
      color: $color-white;
      background-color: $color-slb-grey;

      &::before,
      &:after {
        background-color: $color-slb-orange;
      }
    }
    &--even {
      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 0;
        bottom: 0;
        width: 25px;
        height: 80%;
        border-top-right-radius: 25px;
      }
      &:before {
        content: '';
        position: absolute;
        display: none;
        right: 0;
        top: 0;
        width: 25px;
        height: 80%;
        border-bottom-left-radius: 25px;
      }
      @include breakpoint($large) {
        &:after,
        &:before {
          display: block;
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
        width: 25px;
        height: 80%;
        border-top-left-radius: 25px;
      }
      &:before {
        content: '';
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 80%;
        border-bottom-right-radius: 25px;
      }
      @include breakpoint($large) {
        &:after,
        &:before {
          display: block;
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
    &--slb {
      height: 160px;
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

      @include breakpoint($small) {
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
