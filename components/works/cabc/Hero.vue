<template>
  <div class="cabc-hero">
    <div class="cabc-hero__parts">
      <!-- Circle -->
      <div class="cabc-hero__layer cabc-hero__layer--circle"></div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-01">
        <img
          src="~/assets/img/work/cabc/line-01.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-02">
        <img
          src="~/assets/img/work/cabc/line-02.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-03">
        <img
          src="~/assets/img/work/cabc/line-03.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-04">
        <img
          src="~/assets/img/work/cabc/line-04.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-05">
        <img
          src="~/assets/img/work/cabc/line-05.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-06">
        <img
          src="~/assets/img/work/cabc/line-06.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>
      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-07">
        <img
          src="~/assets/img/work/cabc/line-07.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-08">
        <img
          src="~/assets/img/work/cabc/line-08.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Line -->
      <div class="cabc-hero__layer cabc-hero__layer--line-09">
        <img
          src="~/assets/img/work/cabc/line-09.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Background -->
      <div class="cabc-hero__layer cabc-hero__layer--background">
        <img
          src="~/assets/img/work/cabc/background.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Frame -->
      <div class="cabc-hero__layer cabc-hero__layer--frame">
        <img
          src="~/assets/img/work/cabc/frame.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Front wheel -->
      <div class="cabc-hero__layer cabc-hero__layer--front-wheel">
        <img
          src="~/assets/img/work/cabc/front-wheel.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Back wheel -->
      <div class="cabc-hero__layer cabc-hero__layer--back-wheel">
        <img
          src="~/assets/img/work/cabc/back-wheel.png"
          alt="Bicycle"
          class="cabc-hero__frame"
        />
      </div>

      <!-- Pedal -->
      <div class="cabc-hero__layer cabc-hero__layer--pedal">
        <!-- Foot gears -->
        <div class="cabc-hero__layer cabc-hero__layer--foot-gears">
          <img
            src="~/assets/img/work/cabc/foot-gears.png"
            alt="Bicycle"
            class="cabc-hero__frame"
          />
        </div>

        <!-- Foot rest back -->
        <div class="cabc-hero__layer cabc-hero__layer--foot-rest-back">
          <img
            src="~/assets/img/work/cabc/foot-rest-back.png"
            alt="Bicycle"
            class="cabc-hero__frame"
          />
        </div>

        <!-- Pedal leg -->
        <div class="cabc-hero__layer cabc-hero__layer--pedal-leg">
          <img
            src="~/assets/img/work/cabc/pedal-leg.png"
            alt="Bicycle"
            class="cabc-hero__frame"
          />
        </div>

        <!-- Foot rest front -->
        <div class="cabc-hero__layer cabc-hero__layer--foot-rest-front">
          <img
            src="~/assets/img/work/cabc/foot-rest-front.png"
            alt="Bicycle"
            class="cabc-hero__frame"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// disable eslint for this file
/* eslint-disable */
import debounce from 'lodash/debounce'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
export default {
  mounted: function() {
    // Only animated if user hasn't scrolled past already
    if (scrolledPast(document.querySelector('.work__segment--cabc')) === true) {
      return
    }

    // Broadly scopped variables.
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const TimelineLite = vm.$GSAP.TimelineLite
    const hero = {
      container: document.querySelector('.cabc-hero'),
      parts: document.querySelector('.cabc-hero__parts'),
      frontWheel: document.querySelector('.cabc-hero__layer--front-wheel'),
      backWheel: document.querySelector('.cabc-hero__layer--back-wheel'),
      pedal: document.querySelector('.cabc-hero__layer--pedal'),
      footRestBack: document.querySelector('.cabc-hero__layer--foot-rest-back'),
      footRestFront: document.querySelector('.cabc-hero__layer--foot-rest-front'),
      lines: {
        one: document.querySelector('.cabc-hero__layer--line-01'),
        two: document.querySelector('.cabc-hero__layer--line-02'),
        three: document.querySelector('.cabc-hero__layer--line-03'),
        four: document.querySelector('.cabc-hero__layer--line-04'),
        five: document.querySelector('.cabc-hero__layer--line-05'),
        six: document.querySelector('.cabc-hero__layer--line-06'),
        seven: document.querySelector('.cabc-hero__layer--line-07'),
        eight: document.querySelector('.cabc-hero__layer--line-08'),
        nine: document.querySelector('.cabc-hero__layer--line-09')
      }
    }

    // Desktop animations.
    function desktopTimeline(element) {
      // Hero timeline.
      const introTimeline = new TimelineLite()
      const lineDuration = 0.75
      const lineOffset = '-=0.7'
      introTimeline
        .fromTo(element.container, 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(element.parts, 1, { scale: 0.5, rotation: 20 }, { scale: 1, rotation: 0, ease: Back.easeOut.config(1.7), }, '-=1')
        .fromTo(element.lines.one, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, '-=0.5')
        .fromTo(element.lines.six, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)
        .fromTo(element.lines.eight, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)
        .fromTo(element.lines.three, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)
        .fromTo(element.lines.five, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)
        .fromTo(element.lines.nine, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)
        .fromTo(element.lines.two, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)
        .fromTo(element.lines.seven, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)
        .fromTo(element.lines.four, lineDuration, { opacity: 0, scale: 0.5, }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.7) }, lineOffset)

      // Pedaling timeline
      const repeat = 6
      const duration = 10
      const pedalingTimeline = new TimelineLite()
      pedalingTimeline
        .fromTo(element.frontWheel, duration, { rotation: 0 }, { rotation: -360, repeat: repeat, ease: Linear.easeNone })
        .fromTo(element.backWheel, duration, { rotation: 0 }, { rotation: -360, repeat: repeat, ease: Linear.easeNone }, 0)
        .fromTo(element.pedal, duration, { rotation: 0 }, { rotation: -360, repeat: repeat, ease: Linear.easeNone }, 0)
        .fromTo(element.footRestBack, duration, { rotation: 0 }, { rotation: 360, repeat: repeat, ease: Linear.easeNone }, 0)
        .fromTo(element.footRestFront, duration, { rotation: 0 }, { rotation: 360, repeat: repeat, ease: Linear.easeNone }, 0)
        
      const heroTimeline = new TimelineLite()
      heroTimeline.add(introTimeline, 0)
      heroTimeline.add(pedalingTimeline, 0)

      // Reveal on scroll.
      scrollMagicScene(vm, heroTimeline, '.cabc-hero', 0.75)
    }
    desktopTimeline(hero)


    // Intro reveal.
    const introText = [
      document.querySelector('.work__segment--cabc .work__heading'),
      document.querySelector('.work__segment--cabc .work__subhead'),
      document.querySelector('.work__segment--cabc .work__description')
    ]
    const introTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [introText]
    })
    introTimeline.staggerFromTo(
      introText,
      2,
      { opacity: 0 },
      /* eslint-disable-next-line */
        { opacity: 1, ease: Power2.easeInOut },
      0.3
    )
    scrollMagicScene(
      vm,
      introTimeline,
      '.work__segment--cabc .work__intro',
      0.75
    )

    // Divider reveal.
    const divider = {
      container: document.querySelector('.work__segment--cabc .work__divider'),
      line: document.querySelector('.divider-cabc__line'),
      illustration: document.querySelector('.divider-cabc__illustration')
    }
    const dividerTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [divider]
    })
    dividerTimeline
      .set(divider.container, { opacity: 1 })
      .from(
        divider.line,
        0.66,
        {
          scaleX: 0,
          transformOrigin: '100% 50%'
        },
        '-=1'
      )
      .from(
        divider.illustration,
        0.75,
        {
          rotation: 360,
          scale: 0,
          /* eslint-disable-next-line */
            ease: Back.easeOut.config(2)
        },
        '-=0.75'
      )
    scrollMagicScene(
      vm,
      dividerTimeline,
      '.work__segment--cabc .work__divider',
      0.85
    )

    // CTA reveal.
    const ctas = [
      document.querySelector('.work__segment--cabc .cta-secondary__link'),
      document.querySelector('.work__segment--cabc .cta-tertiary__link')
    ]
    const ctasTimeline = new TimelineLite({
      onComplete: timelineCleanup,
      onCompleteParams: [ctas]
    })
    ctasTimeline.staggerFromTo(
      ctas,
      1,
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1 },
      0.25
    )
    scrollMagicScene(vm, ctasTimeline, '.work__segment--cabc .work__ctas', 0.9)
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.cabc-hero {
  position: relative;

  // Parts.
  &__parts {
    position: relative;
    width: 243px;
    height: 232px;
    overflow: hidden;
  }

  // Layer.
  &__layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    // Circle.
    &--circle {
      &::before {
        content: '';
        position: absolute;
        width: 140px;
        height: 140px;
        border-radius: 140px;
        background-color: $color-cabc-green-200;
        border-radius: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    // Pedal.
    &--pedal {
      transform-origin: 51.15% 56.4%;
    }

    // Foot rest front.
    &--foot-rest-front {
      transform-origin: 48.5% 66.3%;
    }

    // Foot rest back.
    &--foot-rest-back {
      transform-origin: 48.25% 66.25%;
    }

    // Front wheel.
    &--front-wheel {
      transform-origin: 25.85% 48.85%;
    }

    // Back wheel.
    &--back-wheel {
      transform-origin: 70.3% 62.3%;
    }

    // Line 1.
    &--line-01 {
      transform-origin: 12% 63.5%;
    }

    // Line 2.
    &--line-02 {
      transform-origin: 13% 29.5%;
    }

    // Line 3.
    &--line-03 {
      transform-origin: 33% 11%;
    }

    // Line 4.
    &--line-04 {
      transform-origin: 51.5% 13%;
    }

    // Line 5.
    &--line-05 {
      transform-origin: 72% 16%;
    }

    // Line 6.
    &--line-06 {
      transform-origin: 85% 36%;
    }

    // Line 7.
    &--line-07 {
      transform-origin: 88% 67%;
    }
    
    // Line 8.
    &--line-08 {
      transform-origin: 66% 83%;
    }
    
    // Line 9.
    &--line-09 {
      transform-origin: 36.5% 81%;
    }
    
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__circle-wrap {
    position: absolute;
    right: 0;
    top: 57%;
    width: 160px;
    height: 160px;
    transform: translate(0%, -43%);
    transform-origin: 50% 50%;
    overflow: hidden;

    @include breakpoint($small) {
      width: 120px;
      height: 120px;
      top: 10px;
      transform: none;
      overflow: visible;
    }
  }
  &__circle {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 46%;
    left: 105%;
    transform: translate(-50%, -50%);
    background-color: pink;
    border-radius: 100%;

    @include breakpoint($small) {
      position: relative;
      width: 100%;
      height: 100%;
      top: initial;
      left: initial;
      transform: none;
    }
  }
}
</style>
