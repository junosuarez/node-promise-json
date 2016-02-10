/* globals describe, it */
'use strict'

const expect = require('mochi').expect
const nock = require('nock')

const URL = 'https://en.wikipedia.org/api.json'

describe('fetchjson', function () {
  const fetchjson = require('../')

  it('returns a Promise', function () {
    var json = fetchjson(URL)
    expect(json.then).to.be.a('function')
  })

  it('makes request', function () {
    const req = nock('https://en.wikipedia.org')
      .get('/api.json')
      .reply(200, {})

    return fetchjson(URL).then(function () {
      req.done()
    })
  })

  it('rejects on http 400', function () {
    const req = nock('https://en.wikipedia.org')
      .get('/api.json')
      .reply(400, {})

    return fetchjson(URL)
    .then(function () { throw new Error('should not resolve') }, function (err) {
      expect(err).to.match(/HTTP status: 400/)
    })
    .then(function () {
      req.done()
    })
  })

  it('rejects on json parse error', function () {
    const req = nock('https://en.wikipedia.org')
      .get('/api.json')
      .reply(200, 'sdfsf')

    return fetchjson(URL)
    .then(function () { throw new Error('should not resolve') }, function (err) {
      expect(err).to.be.instanceof(SyntaxError)
    })
    .then(function () {
      req.done()
    })
  })

  it('resolves json object', function () {
    const req = nock('https://en.wikipedia.org')
      .get('/api.json')
      .reply(200, {hi: 'abc'})

    return fetchjson(URL).then(function (val) {
      expect(val).to.deep.equal({hi: 'abc'})
      req.done()
    })
  })
})
