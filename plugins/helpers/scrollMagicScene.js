/**
 * Init an animation using ScrollMagic
 *
 * @param {object} vue - The vue object.
 *
 * @param {object} timeline - The gsap timeline.
 *
 * @param {string} trigger - A CSS selector that triggers the animation.
 *
 * @param {integer} triggerHook - A integer between 0 and 1. The offset when the animation is triggered on.
 *
 * @example
 *
 *     scrollMagicScene(vm, timeline, '.screenshot-nsf', 0.75)
 *
 */
export function scrollMagicScene(vue, timeline, trigger, triggerHook) {
  const ScrollMagic = vue.$ScrollMagic
  const triggerEl = document.querySelector(trigger)
  const sceneController = new ScrollMagic.Controller()
  new ScrollMagic.Scene({
    triggerElement: triggerEl,
    triggerHook: triggerHook,
    reverse: false
  })
    .setTween(timeline)
    .addTo(sceneController)
}
