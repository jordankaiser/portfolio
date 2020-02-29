/**
 * Fix for lazy loaded images causing content reflow when loaded in.
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
