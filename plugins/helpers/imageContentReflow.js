/**
 * Fix for lazy loaded images causing content reflow when loaded in.
 * Using the inline SVG method from https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/
 *
 * @param {string} width - The width of the image.
 *
 * @param {string} height - The height of the image.
 *
 * @example
 *
 *     imageContentReflow('200, '300')
 *
 */
export function imageContentReflow(width, height) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height} '%3E%3C/svg%3E`
}
