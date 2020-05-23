/**
 * Animate secondary and tertiary CTA interactions.
 *
 * @param {object} elements - An object of document.querySelectorAll() type elements.
 *
 * @example
 *
 *     secondaryTertiaryCTA('.link')
 *
 */
import TimelineLite from 'gsap/umd/TimelineLite'
import EasePack from 'gsap/umd/EasePack'
export function secondaryTertiaryCTA(elements, type) {
  /* eslint-disable-next-line no-unused-vars */
  const plugins = [EasePack]

  const ctas = document.querySelectorAll(elements)
  const textXMove = type === 'secondary' ? 5 : 8
  Array.from(ctas).forEach(cta => {
    const timeline = new TimelineLite({ paused: true })
    const widthOffset = -Math.abs(cta.offsetWidth)

    timeline
      /* eslint-disable-next-line */
      .to(cta.querySelector(`.cta-${type}__icon`), 0.5, { x: widthOffset,  ease: Back.easeOut.config( 1.7) })
      .to(
        cta.querySelector(`.cta-${type}__text`),
        0.15,
        { x: textXMove },
        '-=0.5'
      )
      .to(
        cta.querySelector(`.cta-${type}__circle`),
        0.25,
        /* eslint-disable-next-line */
        { scaleY: 0.75, ease: Power1.easeOut },
        '-=0.5'
      )
      /* eslint-disable-next-line */
      .to(cta.querySelector(`.cta-${type}__circle`), 0.25, { scaleY: 1, ease: Power1.easeIn }, '-=0.25')

    cta.animation = timeline

    // Events.
    cta.addEventListener('mouseenter', function() {
      this.animation.play()
    })
    cta.addEventListener('mouseleave', function() {
      this.animation.reverse()
    })
    cta.addEventListener('focus', function() {
      this.animation.play()
    })
    cta.addEventListener('blur', function() {
      this.animation.reverse()
    })
  })
}
