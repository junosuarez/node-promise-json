# promise-json
HTTP GET a json document returning a Promise

[![js standard style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)]()

[![build status](https://circleci.com/gh/jden/node-promise-json.svg?&style=shield)][circleci]

[circleci]: https://circleci.com/gh/jden/node-promise-json
[standard]: http://standardjs.com/

*WARNING: this is not production quality software, use at your own risk*


## usage
```js
const json = require('promise-json')
json('https://en.wikipedia.org/w/api.php?action=query&titles=Tardigrade&format=json')
  .then(console.log)
```


## api
with [jsig](https://github.com/jsigbiz/spec) type annotation:

### `json(url: String) => Promise<Object>`
Follows redirects. Resolves to JavaScript Object. Rejects on HTTP status >= 400 or JSON parse error.


## installation

    $ npm install promise-json


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXVI jden <jason@denizac.org>. See LICENSE.md
