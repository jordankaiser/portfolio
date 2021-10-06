<template>
  <div>slb hero</div>
</template>
<script>
import debounce from 'lodash/debounce'
import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
import { scrollMagicScene } from '~/plugins/helpers/scrollMagicScene.js'
import { timelineCleanup } from '~/plugins/helpers/timelineCleanup.js'
import { scrolledPast } from '~/plugins/helpers/scrolledPast.js'
export default {
  mounted: function() {
    // Only animated if user hasn't scrolled past already
    if (scrolledPast(document.querySelector('.work__segment--slb')) === true) {
      return
    }

    // Broadly scopped variables.
    const vm = this
    let viewportDimensions = getViewportDimensions()
    const TimelineLite = vm.$GSAP.TimelineLite

    // Determine viewport width.
    window.addEventListener(
      'resize',
      debounce(() => {
        viewportDimensions = getViewportDimensions()
        if (
          viewportDimensions.width !== document.documentElement.clientWidth ||
          viewportDimensions.height !== document.documentElement.clientHeight
        ) {
          mobileOrDesktop(viewportDimensions.width)
        }
      }, 200)
    )

    // Determine which animations to play by viewport width.
    mobileOrDesktop(viewportDimensions.width)
    function mobileOrDesktop(viewportWidth) {
      if (viewportWidth >= 600) {
        // desktopTimeline(pillHero)
      } else {
        // mobileTimeline(pillHero)
      }
    }

    // Intro reveal.
    const introText = [
      document.querySelector('.work__segment--slb .work__heading'),
      document.querySelector('.work__segment--slb .work__subhead'),
      document.querySelector('.work__segment--slb .work__description')
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
      '.work__segment--slb .work__intro',
      0.75
    )

    // Divider reveal.
    const divider = {
      container: document.querySelector('.work__segment--slb .work__divider'),
      line: document.querySelector('.divider-hammer__line'),
      circle: document.querySelector('.divider-hammer__circle'),
      illustration: document.querySelector('.divider-hammer__illustration')
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
      .from(divider.circle, 0.5, { scale: 0, x: -20 }, '-=1')
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
      '.work__segment--slb .work__divider',
      0.85
    )

    // CTA reveal.
    const ctas = [
      document.querySelector('.work__segment--slb .cta-secondary__link'),
      document.querySelector('.work__segment--slb .cta-tertiary__link')
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
    scrollMagicScene(vm, ctasTimeline, '.work__segment--slb .work__ctas', 0.9)
  }
}
</script>
