'use strict'

/*!
 * exports.
 */

module.exports = append

/**
 * Add one element to the end of an array returning the new array without mutating source array.
 *
 * @param {*|Function} element
 * Element or function to call to get element to add.
 *
 * @param {Function} predicate
 * Predicate function which takes list as only parameter and returns a boolean.
 *
 * @param {Array} [list=[]]
 * List to append to (default to an empty array).
 *
 * @return {*|undefined}
 * New array with element (or value returned from applying `list` to `element` function) appended.
 */

function append (element, predicate, list) {
  list = Array.isArray(list)
    ? list
    : []

  var effectiveItem = (typeof element === 'function')
    ? element([].concat(list))
    : element

  if (typeof predicate !== 'function') {
    throw new TypeError('`predicate` is expected to be a `Function`!')
  }

  return predicate([].concat(list))
    ? [].concat(list)
    : append(element, predicate, [].concat(list, effectiveItem))
}
