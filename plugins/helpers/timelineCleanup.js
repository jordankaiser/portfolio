/**
 * Init an animation using ScrollMagic
 *
 * @param {object} elements - An object of document.querySelector type elements.
 *
 * @example
 *
 *     timelineCompleted(elements)
 *
 */
export function timelineCleanup(elements) {
  Object.values(elements).forEach(element => {
    /* eslint-disable-next-line no-undef */
    TweenLite.set(element, { clearProps: 'all' })
  })
}
// TODO: Get JSDoc codehints working on imports.
