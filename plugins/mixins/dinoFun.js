// import debounce from 'lodash/debounce'
// import getViewportDimensions from '~/plugins/helpers/viewportDimensions'
import TimelineLite from 'gsap/umd/TimelineLite'
// import { scrollMagicInit } from '~/plugins/helpers/scrollMagicInit.js'
export function dinoFunTimeline() {
  // Do desktop animations.
  // const randomNumber = Math.floor(Math.random() * 2)
  const randomNumber = 0
  const timelineOne = new TimelineLite({ paused: true })
  switch (randomNumber) {
    case 0:
      initTimelineOne()
      break
    case 1:
      break
    case 2:
      break
    case 3:
      break
  }

  // Timeline one.
  function initTimelineOne() {
    const leftDino = {
      container: document.querySelector(
        '.bg-fun-left .bg-fun-left__section--one .dino-fun'
      ),
      eyeOpen: document.querySelector(
        '.bg-fun-left .bg-fun-left__section--one .dino-fun__artwork--eye-open'
      ),
      eyeClosed: document.querySelector(
        '.bg-fun-left .bg-fun-left__section--one .dino-fun__artwork--eye-closed'
      )
    }
    const rightDino = {
      container: document.querySelector(
        '.bg-fun-right .bg-fun-right__section--one .dino-fun'
      ),
      eyeOpen: document.querySelector(
        '.bg-fun-right .bg-fun-right__section--one .dino-fun__artwork--eye-open'
      ),
      eyeClosed: document.querySelector(
        '.bg-fun-right .bg-fun-right__section--one .dino-fun__artwork--eye-closed'
      )
    }
    const rightContainerWidth = document.querySelector('.bg-fun-right')
      .clientWidth
    timelineOne
      .set([leftDino.eyeClosed, rightDino.eyeOpen], { opacity: 0 })
      .fromTo(
        leftDino.container,
        1,
        { x: -135, rotation: 170 },
        { x: -95, rotation: 180 },
        '+=1'
      )
      .to(leftDino.eyeOpen, 0.15, { opacity: 0 }, '+=0.75')
      .to(leftDino.eyeClosed, 0.15, { opacity: 1 }, '+=0.15')
      .to(leftDino.container, 0.33, { x: -135, rotation: 170 }, '+=0.5 ')
      .fromTo(
        rightDino.container,
        1.25,
        { x: 100, rotation: 30 },
        {
          x: rightContainerWidth * -1 + 100,
          rotation: 0,
          /* eslint-disable-next-line no-undef */
          ease: Power3.easeIn
        },
        '+=0.25'
      )
      .fromTo(
        '.work__segment--nsf .work__screenshot',
        0.25,
        { x: 0 },
        { x: -50 }
      )
      .to('.work__segment--nsf .work__screenshot', 0.25, {
        x: 0,
        /* eslint-disable-next-line no-undef */
        ease: Bounce.easeOut
      })
    return timelineOne
    // Reveal on scroll.
    // scrollMagicInit(vm, timelineOne, '.work__segment--nsf', 0.5)
  }
}
