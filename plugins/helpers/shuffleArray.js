/**
 * Shuffle an array.
 * Fisher-Yates (aka Knuth) Shuffle
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 *
 * @param {array} array - An array
 *
 * @example
 *
 *     const arr = [2, 11, 37, 42];
 *     arr = shuffle(arr);
 */

export function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue = null
  let randomIndex = null

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
