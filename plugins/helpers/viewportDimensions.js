/**
 * Returns clientWidth() and clientHeight() from documentElement
 * @constructor
 */
export default function() {
  const dimensions = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }
  return dimensions
}
