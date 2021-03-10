<template>
  <div>
    <navigation />
    <section class="work-details segment animated">
      <div class="work-details__sub-segment">
        <div class="work-details__header-flair">
          <HeaderFlair :modifiers="workDetails.headerModifiers" />
        </div>
        <div class="introduction">
          <h4 class="introduction__roles container container--narrow">
            Roles <span class="introduction__role-seperator">|</span>
            <span v-for="(role, index) in workDetails.roles" :key="role">
              <span v-if="index !== workDetails.roles.length - 1">
                {{ role }},
              </span>
              <span v-else>
                {{ role }}
              </span>
            </span>
          </h4>
          <h1 class="introduction__title container">{{ workDetails.title }}</h1>
          <div class="introduction__description container container--narrow">
            <p>{{ workDetails.description }}</p>
          </div>
        </div>
      </div>
      <div class="work-details__sub-segment">
        <div class="screenshots">
          <div class="screenshots__screenshot">
            <!-- Slot for Screenshot.vue -->
            <Screenshot
              :screenshot="workDetails.screenshotOne"
              @lazyloaded="lazyloaded"
            >
              <template v-slot:caption>
                <!-- Slot for ScreenshotCaption.vue -->
                <ScreenshotCaption :caption="workDetails.screenshotOneCaption">
                  <template v-slot:captionText>
                    <!-- eslint-disable vue/no-v-html -->
                    <div v-html="workDetails.screenshotOneCaptionText"></div>
                  </template>
                </ScreenshotCaption>
              </template>
              <template v-slot:cta>
                <CtaSecondary
                  :link="workDetails.screenshotOneLink"
                  :varient="workDetails.id"
                />
              </template>
            </Screenshot>
          </div>
          <div class="screenshots__screenshot">
            <!-- Slot for Screenshot.vue -->
            <Screenshot
              :screenshot="workDetails.screenshotTwo"
              @lazyloaded="lazyloaded"
            >
              <template v-slot:caption>
                <!-- Slot for ScreenshotCaption.vue -->
                <ScreenshotCaption :caption="workDetails.screenshotTwoCaption">
                  <template v-slot:captionText>
                    <!-- eslint-disable vue/no-v-html -->
                    <div v-html="workDetails.screenshotTwoCaptionText"></div>
                  </template>
                </ScreenshotCaption>
              </template>
              <template v-slot:cta>
                <CtaSecondary
                  :link="workDetails.screenshotTwoLink"
                  :varient="workDetails.id"
                />
              </template>
            </Screenshot>
          </div>
        </div>
      </div>
      <div class="work-details__sub-segment">
        <div class="container container--narrow">
          <div class="work-details__flair">
            <Flair :modifiers="workDetails.toolsModifiers" />
          </div>
          <div class="tools">
            <div class="tools__listing">
              <h4 class="tools__list-title">Tools</h4>
              <ul class="tools__list">
                <li
                  v-for="tool in workDetails.tools"
                  :key="tool"
                  class="tools__list-item"
                >
                  {{ tool }}
                </li>
              </ul>
            </div>
            <div class="tools__illustration">
              <Hero :modifiers="workDetails.hero" />
            </div>
          </div>
        </div>
      </div>
      <div class="work-details__sub-segment">
        <CtaHero :cta="workDetails.ctaHero" />
      </div>
      <div class="work-details__sub-segment">
        <FooterPills :modifiers="workDetails.footerPills" />
      </div>
    </section>
  </div>
</template>
<script>
// Components
import Hero from '~/components/work-details/mc/Hero.vue'
import Screenshot from '~/components/work-details/universal/Screenshot.vue'
import ScreenshotCaption from '~/components/work-details/universal/ScreenshotCaption.vue'
import HeaderFlair from '~/components/work-details/universal/HeaderFlair.vue'
import Flair from '~/components/work-details/universal/Flair.vue'
import CtaSecondary from '~/components/ctas/CTASecondary'
import CtaHero from '~/components/ctas/CTAHero'
import FooterPills from '~/components/works/mc/Footer.vue'
import Navigation from '~/components/navigation/Navigation'

// Libraries.
import 'lazysizes'

export default {
  components: {
    Hero,
    Screenshot,
    ScreenshotCaption,
    HeaderFlair,
    Flair,
    CtaSecondary,
    CtaHero,
    FooterPills,
    Navigation
  },
  props: {
    workDetails: {
      type: Object,
      default: function() {
        return {}
      },
      id: {
        type: String,
        default: 'mc'
      },
      headerModifiers: {
        type: Object,
        default: function() {
          return {
            id: 'mc-header',
            revealOffset: 0.7
          }
        }
      },
      roles: {
        type: Array,
        default: ['Developer']
      },
      title: {
        type: String,
        default: 'Work Title'
      },
      description: {
        type: String,
        default: 'Laoreet class eleifend dis.'
      },
      screenshotOne: {
        type: Object,
        default: function() {
          return {
            id: 'one',
            image: 'mc/work-cash-pricing.jpg',
            alt: 'MemorialCare Home Page',
            relatedCaption: 'screenshotOneCaption',
            placeholderConfig: {
              initial: null,
              width: '1000',
              height: '1000'
            },
            animationConfig: {
              id: 'mc-screenshot-one',
              revealOffset: 0.75,
              initialDelay: '+=0',
              triggerEl: '.screenshot--one'
            }
          }
        }
      },
      screenshotOneCaption: {
        id: 'mc',
        uniqueId: 'one',
        cta: '.screenshot--one .cta-secondary'
      },
      screenshotOneCaptionText: {
        type: String,
        default: 'Caption text'
      },
      screenshotOneLink: {
        type: Object,
        default: function() {
          return {
            text: 'Link Title',
            href: '/',
            target: '_self'
          }
        }
      },
      screenshotTwo: {
        type: Object,
        default: function() {
          return {
            id: 'two',
            image: 'mc/work-small-service-line.jpg',
            relatedCaption: 'screenshotTwoCaption',
            placeholderConfig: {
              initial: null,
              width: '582',
              height: '570'
            },
            animationConfig: {
              id: 'mc-screenshot-two',
              revealOffset: 0.75,
              initialDelay: '+=0',
              triggerEl: '.screenshot--two'
            }
          }
        }
      },
      screenshotTwoCaption: {
        type: Object,
        default: function() {
          return {
            id: 'mc',
            uniqueId: 'two',
            cta: '.screenshot--two .cta-secondary'
          }
        }
      },
      screenshotTwoCaptionText: {
        type: String,
        default:
          '<p>Lorem habitasse lacus amet ipsum consectetur adipiscing ullamcorper risus, morbi rutrum hac dictumst euismod elit hendrerit ligula, aenean malesuada cum metus pulvinar nisl eleifend.</p>'
      },
      screenshotTwoLink: {
        type: Object,
        default: function() {
          return {
            text: 'Cancer Care Service',
            href: 'https://www.memorialcare.org/services/cancer-care',
            target: '_blank'
          }
        }
      },
      toolsModifiers: {
        type: Object,
        default: function() {
          return {
            id: 'mc-tools',
            revealOffset: 0.8,
            initialDelay: '+=1',
            triggerEl: '.mc-hero'
          }
        }
      },
      tools: {
        type: Array,
        default: ['Drupal', 'Javascript', 'PHP', 'Vue.js', 'Twig', 'SCSS']
      },
      hero: {
        type: Object,
        default: function() {
          return {
            revealOffset: 0.75
          }
        }
      },
      ctaHero: {
        type: Object,
        default: function() {
          return {
            id: 'mc',
            text: 'Visit Website',
            link: 'https://wwww.memorialcare.org',
            linkTarget: '_blank'
          }
        }
      },
      footerPills: {
        type: Object,
        default: function() {
          return {
            id: 'mc',
            revealOffset: 1,
            triggerEl: '.work-details__sub-segment .pill-footer',
            initialDelay: '+=0.5'
          }
        }
      }
    }
  },
  head: {
    title: 'MemorialCare'
  },
  mounted: function() {
    // Unhide animated section.
    /* eslint-disable-next-line no-undef */
    TweenLite.set('.work-details.animated', { visibility: 'visible' })
  },
  methods: {
    lazyloaded(value) {
      console.log('screenshot lazyloaded')
      console.log(value)
      console.log('---')
    }
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
    text-align: center;

    @include breakpoint($medium) {
      font-size: $fs0;
      line-height: $fs0;
    }
  }
  &__role-seperator {
    color: #2c024d;
  }
  &__title {
    margin-top: $s0;
    margin-top: calc(min(max(10px, 4.5vw), 30px));
    font-weight: bold;
    text-align: center;
    font-size: $fs4;
    line-height: $fs4;
    font-size: calc(min(max(40px, 4.5vw), 65px));
    line-height: calc(min(max(40px, 4.5vw), 65px));
  }
  &__description {
    margin-top: $s0;
    margin-top: calc(min(max(10px, 4.5vw), 30px));
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
  background-color: lighten($color-mc-purple, 6);

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
      border-radius: 5px;
    }
  }
  &__illustration {
    flex: 0 1 auto;
    width: 140px;
  }
}
.screenshots {
  @include breakpoint($medium) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
  }
  &__screenshot {
    flex: 0 1 auto;
  }
}
.pill-footer {
  margin: 0 auto;
}
</style>
