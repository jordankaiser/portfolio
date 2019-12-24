/**
 * Init an animation using ScrollMagic
 *
 * @param {object} vue - The vue object.
 *
 * @example
 *
 *     foo('hello')
 */
export function scrollMagicInit(vue, timeline, trigger, triggerHook) {
  const ScrollMagic = vue.$ScrollMagic
  const nsfSection = document.querySelector(trigger)
  const sceneController = new ScrollMagic.Controller()
  new ScrollMagic.Scene({
    triggerElement: nsfSection,
    triggerHook: triggerHook,
    reverse: false
  })
    .setTween(timeline)
    .addTo(sceneController)
}
// TODO: Get JSDoc codehints working on imports. Params: vue ref, timeline, triggering section, trigger hook.
