'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var appendUntil = require('./')

/*!
 * tests.
 */

test('appendUntil()', function (t) {
  t.deepEqual(appendUntil(5, len(1)), [5], 'Defaults to empty array')
  t.deepEqual(appendUntil(3, len(3), []), [3, 3, 3], 'Static')
  t.deepEqual(appendUntil(incrementBy(5), len(4), [5]), [5, 10, 15, 20], 'Generator')
  t.throws(appendUntil.bind(null, 7, 47), 'Throws on bad predicate')
  t.end()
})

function len (length) {
  return (list) => list.length === length
}

function incrementBy (val) {
  return (list) => Number(list.slice(-1)) + val
}
