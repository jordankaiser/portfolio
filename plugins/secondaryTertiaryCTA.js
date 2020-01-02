// TODO: Finish building this out. Rerefence animations from CTASecondary.vue.
/**
 * Animate secondary and tertiary CTA interactions.
 *
 * @param {object} elements - An object of document.querySelector type elements.
 *
 * @example
 *
 *     secondaryTertiaryCTA('.link')
 *
 */
export function secondaryTertiaryCTA(elements) {
  const ctas = document.querySelectorAll(elements)
  Array.from(ctas).forEach(cta => {
    console.log(cta)
  })
}
