/**
 * Determine if the element has been scrolled past.
 *
 * @param {object} element - The element referenced by a querySelector().
 *
 * @example
 *
 *     scrolledPast(document.querySelector('#element'))
 */

export function scrolledPast(element) {
  const rect = element.getBoundingClientRect()

  return window.pageYOffset >= rect.top + window.pageYOffset + rect.height
}
