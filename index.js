'use strict'
var fetch = require('isomorphic-fetch')

function json (url) {
  return fetch(url).then(function (res) {
    if (res.status >= 400) {
      throw new Error('HTTP status: ' + res.status)
    }
    return res.json()
  })
}

module.exports = json
