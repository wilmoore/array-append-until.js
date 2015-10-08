# array-append-until
> Add one element to the end of an array returning the new array without mutating source array.

[![Build Status](http://img.shields.io/travis/wilmoore/array-append-until.js.svg)](https://travis-ci.org/wilmoore/array-append-until.js) [![Code Climate](https://codeclimate.com/github/wilmoore/array-append-until.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/array-append-until.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install array-append-until --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/array-append-until.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/array-append-until.svg)](https://www.npmjs.org/package/array-append-until) [![NPM downloads](http://img.shields.io/npm/dm/array-append-until.svg)](https://www.npmjs.org/package/array-append-until) [![Dependency Status](https://gemnasium.com/wilmoore/array-append-until.js.svg)](https://gemnasium.com/wilmoore/array-append-until.js)

## API Example

###### Static

```js
var appendUntil = require('array-append-until')
appendUntil('Z', (list) => list.length === 2)
//=> ['Z', 'Z']
```

###### Generator

```js
var appendUntil = require('array-append-until')
appendUntil((list) => list.pop() + 5, (list) => list.length === 3, [0])
//=> [ 0, 5, 10 ]
```

## API

### `appendUntil(element, predicate, list)`

###### arguments

 - `element (*|Function)`.
 - `predicate (Function)`.
 - `list (Array)`.

###### returns

 - `(Array)` New array with element (or value returned from applying `list` to `element` function) appended.

## Alternatives

 - N/A

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/array-append-until.js.svg)](https://github.com/wilmoore/array-append-until.js/blob/master/license)
