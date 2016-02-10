'use strict'
const fetch = require('isomorphic-fetch')

function fetchjson (url) {
  return fetch(url).then(function (res) {
    if (res.status >= 400) {
      throw new Error('HTTP status: ' + res.status)
    }
    return res.json()
  })
}

module.exports = fetchjson
